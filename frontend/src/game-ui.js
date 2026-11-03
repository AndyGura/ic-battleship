// Glue between the headless duel client and the 3D scene: placement with a
// countdown, firing, the HUD (banner, fleet panels, shot log, toasts) and
// the verdict. All moves go through `client.submit`.

import { atTableOf, tag, viewOf } from "@research-ag/duel-game-core/client.js";
import { debriefVerdict } from "@research-ag/duel-game-core/render.js";
import { audio } from "./audio.js";
import {
  KINDS,
  LENGTH,
  NAME,
  SIZE,
  cellLabel,
  cellsOf,
  checkFleet,
  fits,
  hasCell,
  normalizeView,
  randomFleet,
  shipAt,
  shipToWire,
} from "./fleet.js";

/** The placement limit. The canister cannot read a clock: the page runs
 * this countdown and places a random fleet at zero, and the engine's
 * claim-win window (60 s, Host.mo) is the server-side backstop. */
export const PLACEMENT_SECONDS = 45;

const HUD_HTML = /* html */ `
  <div class="hud-banner"><div class="b-title"></div><div class="b-sub"></div></div>
  <div class="hud-fleets">
    <section class="fleet own"><h4>Your fleet</h4><ul></ul></section>
    <section class="fleet enemy"><h4>Enemy fleet</h4><ul></ul></section>
  </div>
  <div class="hud-tools">
    <button data-focus="own" title="Your waters">⚓ Yours</button>
    <button data-focus="enemy" title="Enemy waters">🎯 Enemy</button>
    <button data-focus="overview" title="Both fields">🌊 Both</button>
    <button id="mute-btn" title="Sound"></button>
  </div>
  <div class="hud-tray">
    <div class="tray-head"><span class="tray-title">Deploy your fleet</span><span class="tray-timer"></span></div>
    <div class="timerbar"><i></i></div>
    <div class="cards"></div>
    <div class="tray-buttons">
      <button data-tray="rotate" title="Rotate (R / right-click)">⟳ Rotate</button>
      <button data-tray="random" title="Random fleet">🎲 Random</button>
      <button data-tray="clear" title="Clear">✕ Clear</button>
      <button data-tray="ready" class="primary">READY</button>
    </div>
  </div>
  <div class="hud-fire"><button class="primary">🎯 FIRE <span></span></button></div>
  <div class="hud-log"></div>
  <div class="hud-toast"></div>
`;

export function mountBattleUI({ client, plugin, scene }) {
  const hud = document.createElement("div");
  hud.id = "hud";
  hud.hidden = true;
  hud.innerHTML = HUD_HTML;
  document.body.appendChild(hud);
  const $ = (sel) => hud.querySelector(sel);
  const bannerTitle = $(".b-title");
  const bannerSub = $(".b-sub");
  const fleetOwn = $(".fleet.own ul");
  const fleetEnemy = $(".fleet.enemy ul");
  const tray = $(".hud-tray");
  const cardsEl = $(".cards");
  const timerEl = $(".tray-timer");
  const timerBar = $(".timerbar i");
  const logEl = $(".hud-log");
  const toastEl = $(".hud-toast");
  const fireBtn = $(".hud-fire");
  const muteBtn = $("#mute-btn");

  const ui = {
    key: null,
    latest: null, // { g, seat, key }
    draft: [],
    selected: KINDS[0],
    horizontal: true,
    ready: false,
    submitting: false,
    deadline: 0,
    auto: false,
    pendingShot: null,
    aim: null,
    manual: null, // { name, sig }
    lastTick: -1,
    ended: null,
    sunkShown: { own: new Set(), enemy: new Set() },
  };

  const touch = () => window.matchMedia?.("(pointer: coarse)").matches;

  // ── small helpers ─────────────────────────────────────────────────────
  let toastTimer = 0;
  function toast(text, cls = "") {
    toastEl.className = `hud-toast show ${cls}`;
    toastEl.textContent = text;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (toastEl.className = "hud-toast"), 2200);
  }
  function log(text, cls = "") {
    const li = document.createElement("div");
    li.className = cls;
    li.textContent = text;
    logEl.prepend(li);
    while (logEl.children.length > 5) logEl.lastChild.remove();
  }
  function banner(title, sub = "", cls = "") {
    bannerTitle.textContent = title;
    bannerSub.textContent = sub;
    bannerTitle.parentElement.className = `hud-banner ${cls}`;
  }

  const isMyTurn = () => ui.latest && ui.latest.g.toMove === ui.latest.seat;
  const placingEditable = () => ui.latest && ui.latest.g.phase === "placing" && !ui.latest.g.you.placed && !ui.ready;
  const canFire = () =>
    ui.latest &&
    ui.latest.g.phase === "battle" &&
    isMyTurn() &&
    !scene.isBusy() &&
    !ui.pendingShot &&
    !ui.latest.over;

  // ── focus ─────────────────────────────────────────────────────────────
  function sig() {
    const g = ui.latest?.g;
    return g ? `${g.toMove}:${g.you.shots.length}:${g.opp.shots.length}:${g.phase}` : "";
  }
  function applyFocus() {
    const L = ui.latest;
    if (!L) return;
    if (L.over) return scene.focus("overview");
    if (ui.manual && ui.manual.sig === sig()) return scene.focus(ui.manual.name);
    ui.manual = null;
    if (L.g.phase === "placing") return scene.focus("own");
    scene.focus(L.g.toMove === L.seat ? "enemy" : "own");
  }

  // ── fleet panels ──────────────────────────────────────────────────────
  function sunkSets(g) {
    const sunk = (ships, shots) => new Set(ships.filter((s) => cellsOf(s).every((c) => hasCell(shots, c))).map((s) => s.kind));
    return { own: sunk(g.you.ships, g.you.shots), enemy: sunk(g.opp.ships, g.opp.shots) };
  }
  function paintFleets() {
    const L = ui.latest;
    if (!L) return;
    const s = ui.sunkShown;
    const row = (kind, sunk, hidden) =>
      `<li class="${sunk ? "sunk" : ""}"><span class="pips">${"■".repeat(LENGTH[kind])}</span> ${hidden && !sunk ? "???" : NAME[kind]}${sunk ? " ✖" : ""}</li>`;
    fleetOwn.innerHTML = KINDS.map((k) => row(k, s.own.has(k), false)).join("");
    fleetEnemy.innerHTML = KINDS.map((k) => row(k, s.enemy.has(k), true)).join("");
  }
  function syncFleetPanels(force = false) {
    const L = ui.latest;
    if (!L) return;
    if (!force && scene.isBusy()) return; // no spoilers while shells are in the air
    const sets = sunkSets(L.g);
    ui.sunkShown = sets;
    paintFleets();
  }

  // ── placement ─────────────────────────────────────────────────────────
  function paintTray() {
    cardsEl.innerHTML = KINDS.map((k) => {
      const placed = ui.draft.some((s) => s.kind === k);
      const cls = `${placed ? "placed" : ""} ${ui.selected === k ? "selected" : ""}`;
      return `<button class="card ${cls}" data-kind="${k}"><b>${NAME[k]}</b><span class="pips">${"■".repeat(LENGTH[k])}</span>${placed ? "<i>✓</i>" : ""}</button>`;
    }).join("");
    const ready = $('[data-tray="ready"]');
    ready.disabled = ui.draft.length !== KINDS.length;
    ready.textContent = ui.ready ? "LOCKED IN" : "READY";
  }

  function nextUnplaced() {
    return KINDS.find((k) => !ui.draft.some((s) => s.kind === k)) ?? null;
  }

  function anchorFor(kind, horizontal, cx, cy) {
    const len = LENGTH[kind];
    const half = Math.floor(len / 2);
    return horizontal
      ? { kind, horizontal, x: Math.min(Math.max(cx - half, 0), SIZE - len), y: cy }
      : { kind, horizontal, x: cx, y: Math.min(Math.max(cy - half, 0), SIZE - len) };
  }

  function updateGhost(cell) {
    if (!placingEditable() || !ui.selected || !cell || cell.board !== "own") {
      scene.setGhost(null);
      return;
    }
    const ship = anchorFor(ui.selected, ui.horizontal, cell.x, cell.y);
    const others = ui.draft.filter((s) => s.kind !== ship.kind);
    scene.setGhost(ship, fits(ship, others));
    ui.ghostShip = ship;
  }

  function placeAt(cell) {
    if (!placingEditable() || cell.board !== "own") return;
    const hitShip = shipAt(ui.draft, cell);
    if (hitShip && (!ui.selected || !fitsAnchored(cell))) {
      // pick a placed ship up again
      ui.draft = ui.draft.filter((s) => s.kind !== hitShip.kind);
      ui.selected = hitShip.kind;
      ui.horizontal = hitShip.horizontal;
      scene.setOwnFleet(ui.draft);
      paintTray();
      updateGhost(cell);
      return;
    }
    if (!ui.selected) return;
    const ship = anchorFor(ui.selected, ui.horizontal, cell.x, cell.y);
    if (!fits(ship, ui.draft.filter((s) => s.kind !== ship.kind))) {
      toast("Ships may not overlap", "bad");
      return;
    }
    ui.draft = [...ui.draft.filter((s) => s.kind !== ship.kind), ship];
    ui.selected = nextUnplaced();
    scene.setOwnFleet(ui.draft);
    scene.setGhost(null);
    paintTray();
  }
  const fitsAnchored = (cell) => {
    const ship = anchorFor(ui.selected, ui.horizontal, cell.x, cell.y);
    return fits(ship, ui.draft.filter((s) => s.kind !== ship.kind));
  };

  function setDraft(fleet) {
    ui.draft = fleet;
    ui.selected = nextUnplaced();
    scene.setOwnFleet(ui.draft);
    scene.setGhost(null);
    paintTray();
  }

  function lockIn(auto = false) {
    if (ui.draft.length !== KINDS.length || checkFleet(ui.draft)) return;
    ui.ready = true;
    ui.auto = auto;
    scene.setGhost(null);
    audio.play("lock");
    paintTray();
    maybeSubmit();
  }

  async function maybeSubmit() {
    const L = ui.latest;
    if (!ui.ready || ui.submitting || !L || L.g.phase !== "placing" || L.g.you.placed) return;
    if (L.g.toMove !== L.seat) return; // wait for the enemy admiral to deploy first
    ui.submitting = true;
    const out = await client.submit({ place: ui.draft.map(shipToWire) });
    ui.submitting = false;
    if (!out.ok && out.reason !== "stale" && out.reason !== "inFlight") {
      ui.ready = false;
      paintTray();
    }
  }

  function tickTimer() {
    const L = ui.latest;
    const show = !!L && L.g.phase === "placing" && !L.g.you.placed && !L.over;
    if (!show || ui.ready) {
      timerEl.textContent = ui.ready && show ? "Waiting for your turn to deploy…" : "";
      timerBar.style.width = ui.ready && show ? "0%" : "100%";
      return;
    }
    const left = Math.max(0, (ui.deadline - Date.now()) / 1000);
    timerEl.textContent = `${Math.ceil(left)}s`;
    timerBar.style.width = `${(100 * left) / PLACEMENT_SECONDS}%`;
    tray.classList.toggle("urgent", left <= 10);
    if (left <= 10 && Math.ceil(left) !== ui.lastTick) {
      ui.lastTick = Math.ceil(left);
      audio.play("tick");
    }
    if (left <= 0) {
      toast("Out of time — your fleet was deployed at random", "bad");
      setDraft(randomFleet(ui.draft));
      lockIn(true);
    }
  }
  setInterval(tickTimer, 250);

  // ── pointer ───────────────────────────────────────────────────────────
  const canvas = scene.ok ? scene.renderer.domElement : null;
  function hover(e) {
    const cell = scene.pick(e.clientX, e.clientY);
    if (placingEditable()) {
      updateGhost(cell);
      return;
    }
    if (canFire() && cell?.board === "enemy") {
      const taken = hasCell(ui.latest.g.opp.shots, cell);
      scene.setReticle("enemy", cell.x, cell.y, taken ? "bad" : "ok");
      canvas.style.cursor = taken ? "not-allowed" : "crosshair";
    } else if (!ui.pendingShot && !ui.aim) {
      scene.setReticle(null);
      canvas.style.cursor = "default";
    }
  }
  canvas?.addEventListener("pointermove", hover);
  canvas?.addEventListener("pointerleave", () => {
    if (placingEditable()) scene.setGhost(null);
    if (!ui.pendingShot && !ui.aim) scene.setReticle(null);
  });
  canvas?.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (placingEditable()) rotate(e);
  });
  canvas?.addEventListener("pointerup", (e) => {
    if (e.button !== 0) return;
    const cell = scene.pick(e.clientX, e.clientY);
    if (!cell) return;
    if (placingEditable()) {
      placeAt(cell);
      updateGhost(cell);
      return;
    }
    if (canFire() && cell.board === "enemy" && !hasCell(ui.latest.g.opp.shots, cell)) {
      if (e.pointerType === "touch" || touch()) {
        ui.aim = { x: cell.x, y: cell.y };
        scene.setReticle("enemy", cell.x, cell.y, "ok");
        fireBtn.classList.add("show");
        fireBtn.querySelector("span").textContent = cellLabel(cell.x, cell.y);
      } else {
        fire(cell);
      }
    }
  });

  async function fire(cell) {
    if (!canFire()) return;
    ui.pendingShot = { x: cell.x, y: cell.y };
    ui.aim = null;
    fireBtn.classList.remove("show");
    scene.setReticle("enemy", cell.x, cell.y, "lock");
    audio.play("lock");
    banner("FIRING…", cellLabel(cell.x, cell.y), "fire");
    const out = await client.submit({ fire: { x: BigInt(cell.x), y: BigInt(cell.y) } });
    if (!out.ok) {
      ui.pendingShot = null;
      scene.setReticle(null);
      if (out.reason === "rejected") toast(out.message ?? "Rejected", "bad");
      repaint();
    }
  }
  fireBtn.querySelector("button").addEventListener("click", () => ui.aim && fire(ui.aim));

  function rotate(e) {
    e?.preventDefault?.();
    ui.horizontal = !ui.horizontal;
    audio.play("tick");
    if (ui.hoverCell) updateGhost(ui.hoverCell);
  }
  window.addEventListener("keydown", (e) => {
    if (placingEditable()) {
      if (e.key === "r" || e.key === "R") rotate();
      if (e.key === "Enter" && ui.draft.length === KINDS.length) lockIn();
    }
  });
  canvas?.addEventListener("pointermove", (e) => (ui.hoverCell = scene.pick(e.clientX, e.clientY)));

  hud.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    audio.start();
    if (b.dataset.focus) {
      ui.manual = { name: b.dataset.focus, sig: sig() };
      scene.focus(b.dataset.focus);
    } else if (b.dataset.kind && placingEditable()) {
      const k = b.dataset.kind;
      if (ui.draft.some((s) => s.kind === k)) {
        ui.draft = ui.draft.filter((s) => s.kind !== k);
        scene.setOwnFleet(ui.draft);
      }
      ui.selected = k;
      paintTray();
    } else if (b.dataset.tray === "rotate") rotate();
    else if (b.dataset.tray === "random" && placingEditable()) setDraft(randomFleet());
    else if (b.dataset.tray === "clear" && placingEditable()) setDraft([]);
    else if (b.dataset.tray === "ready" && placingEditable()) lockIn();
    else if (b.id === "mute-btn") {
      audio.setMuted(!audio.muted);
      paintMute();
    }
  });
  function paintMute() {
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
  }
  paintMute();

  // ── scene callbacks ───────────────────────────────────────────────────
  scene.onImpact = (ev) => {
    const mine = ev.board === "enemy"; // my shot lands on the enemy field
    const cell = cellLabel(ev.x, ev.y);
    if (ev.hit) {
      const sunk = ev.sunk ? ` — ${mine ? "enemy" : "your"} ${NAME[ev.sunk.kind]} sunk!` : "";
      toast(ev.sunk ? (mine ? "ENEMY SHIP SUNK!" : "YOUR SHIP IS SUNK!") : mine ? "DIRECT HIT!" : "WE'VE BEEN HIT!", mine ? "good" : "bad");
      log(`${mine ? "You hit" : "Enemy hit"} ${cell}${sunk}`, mine ? "good" : "bad");
    } else {
      toast(mine ? "Splash — miss" : "Enemy missed", "");
      log(`${mine ? "You missed" : "Enemy missed"} ${cell}`);
    }
    if (ui.pendingShot && mine && ev.x === ui.pendingShot.x && ev.y === ui.pendingShot.y) {
      ui.pendingShot = null;
      scene.setReticle(null);
    }
  };
  scene.onBusy = (busy) => {
    if (!busy) {
      syncFleetPanels(true);
      applyFocus();
      repaint();
    }
  };

  // ── rendering from the client's state ─────────────────────────────────
  function repaint() {
    const L = ui.latest;
    if (!L) return;
    const { g, seat } = L;
    if (L.over) return;
    if (g.phase === "placing") {
      if (g.you.placed) {
        banner("FLEET DEPLOYED", g.opp.placed ? "Battle stations…" : "Waiting for the enemy admiral to deploy", "wait");
      } else if (ui.ready) {
        banner("FLEET LOCKED IN", g.toMove === seat ? "Sending orders…" : "Waiting for the enemy admiral to deploy first", "wait");
      } else {
        banner("DEPLOY YOUR FLEET", touch() ? "Tap a ship, then a cell · Rotate with the button" : "Pick a ship, click a cell · R or right-click rotates", "deploy");
      }
      return;
    }
    if (scene.isBusy()) return;
    if (g.toMove === seat) {
      const again = g.last && g.last.by === seat && g.last.hit;
      banner(ui.pendingShot ? "FIRING…" : again ? "DIRECT HIT — FIRE AGAIN!" : "YOUR FIRE", "Choose a target on the enemy field", "fire");
    } else {
      banner("ENEMY TAKING AIM", "Brace for impact…", "enemy");
    }
  }

  function render(state) {
    const st = state.status;
    const inGame = viewOf(st, "inGame");
    const debrief = viewOf(st, "debrief");
    const at = atTableOf(st);
    document.body.dataset.screen = inGame ? "game" : debrief ? "debrief" : "menu";
    hud.hidden = !(inGame || debrief);
    if (!scene.ok) return;

    if (!inGame && !debrief) {
      scene.setMode("menu");
      scene.reset();
      ui.key = null;
      ui.latest = null;
      ui.ended = null;
      audio.setIntensity(0);
      tray.classList.remove("show");
      fireBtn.classList.remove("show");
      return;
    }
    scene.setMode("play");
    const v = inGame ?? debrief;
    const seat = tag(v.seat);
    const key = `${at.id}:${v.gen}`;
    const g = normalizeView(inGame ? inGame.game : debrief.finalGame);
    const over = !!debrief;

    if (key !== ui.key) {
      ui.key = key;
      ui.draft = [];
      ui.selected = KINDS[0];
      ui.horizontal = true;
      ui.ready = false;
      ui.submitting = false;
      ui.pendingShot = null;
      ui.aim = null;
      ui.manual = null;
      ui.ended = null;
      ui.deadline = Date.now() + PLACEMENT_SECONDS * 1000;
      ui.sunkShown = { own: new Set(), enemy: new Set() };
      logEl.innerHTML = "";
      scene.reset();
      scene.setReticle(null);
    }
    ui.latest = { g, seat, key, over };

    if (ui.pendingShot && hasCell(g.opp.shots, ui.pendingShot) && !scene.isBusy() && !scene.cur) {
      // the shot is in the view; the scene will play it
    }
    scene.setPlacing(g.phase === "placing" && !g.you.placed && !over);
    audio.setIntensity(g.phase === "battle" ? 1 : 0.35);

    if (g.phase === "placing" && !g.you.placed && !over) {
      scene.setGame(g, key);
      scene.setOwnFleet(ui.draft, { quiet: true });
      tray.classList.add("show");
      paintTray();
    } else {
      tray.classList.remove("show");
      scene.setGame(g, key, { over });
      if (g.phase === "placing") ui.ready = true;
    }
    fireBtn.classList.toggle("show", !!ui.aim && canFire());

    if (over && ui.ended !== key) {
      ui.ended = key;
      const { title, outcome } = debriefVerdict(debrief.end, seat);
      const vic = outcome === "win";
      banner(vic ? "VICTORY" : outcome === "lose" ? "DEFEAT" : "STAND DOWN", title, vic ? "victory" : outcome === "lose" ? "defeat" : "wait");
      // let the last shells land first
      setTimeout(() => audio.play(vic ? "victory" : outcome === "lose" ? "defeat" : "tick"), scene.isBusy() ? 3500 : 300);
    }
    applyFocus();
    repaint();
    syncFleetPanels(!scene.isBusy());
    maybeSubmit();
  }

  client.subscribe((state) => render(state));
  render(client.getState());
}
