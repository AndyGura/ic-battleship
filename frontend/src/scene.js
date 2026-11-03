// The 3D battlefield. It knows nothing about the network: game-ui.js feeds
// it normalized views (`setGame`) and reads picks (`pick`); the scene turns
// view changes into a queue of shell flights, impacts and sinkings.

import * as THREE from "three";
import { audio } from "./audio.js";
import { Effects } from "./fx.js";
import { buildGhost, buildShip, setGhostValid } from "./ships3d.js";
import { BOARD_X, SUN_DIR, makeGrid, makeSea, makeSky, waveH } from "./water.js";
import { LENGTH, SIZE, cellsOf, hasCell, sameCell } from "./fleet.js";

const FLIGHT = 1.15; // seconds a shell is in the air
const SINK = 3.2;
const FOV = 42;

const ease = (u) => u * u * (3 - 2 * u);
const cl = (v, a, b) => Math.min(b, Math.max(a, v));

function shipPose(s) {
  const L = LENGTH[s.kind];
  return s.horizontal
    ? { cx: s.x + L / 2, cy: s.y + 0.5, yaw: 0 }
    : { cx: s.x + 0.5, cy: s.y + L / 2, yaw: -Math.PI / 2 };
}
const samePose = (a, b) => a.kind === b.kind && a.x === b.x && a.y === b.y && a.horizontal === b.horizontal;

class Board {
  constructor(name, centerX, own, scene) {
    this.name = name;
    this.own = own;
    this.center = new THREE.Vector3(centerX, 0, 0);
    this.group = new THREE.Group();
    this.group.position.copy(this.center);
    this.grid = makeGrid(own);
    this.grid.position.y = 0.2;
    this.group.add(this.grid);
    this.shipsGroup = new THREE.Group();
    this.group.add(this.shipsGroup);
    this.decals = new THREE.Group();
    this.group.add(this.decals);
    scene.add(this.group);
    this.ships = new Map(); // kind -> ship record
    this.marks = []; // {x, y, hit, mesh, fire}
  }

  /** World position of a cell centre at height y. */
  cellPos(x, y, h = 0) {
    return [this.center.x + x + 0.5 - SIZE / 2, h, this.center.z + y + 0.5 - SIZE / 2];
  }

  markAt(x, y) {
    return this.marks.find((m) => m.x === x && m.y === y);
  }
}

export class BattleScene {
  constructor(parent) {
    this.t = 0;
    this.ok = false;
    try {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch (e) {
      console.error("WebGL unavailable", e);
      return;
    }
    this.ok = true;
    const r = this.renderer;
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    const c = r.domElement;
    c.id = "battlefield";
    c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;touch-action:none";
    parent.prepend(c);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 1500);
    this.camera.position.set(0, 6, 30);

    this.sky = makeSky();
    this.sea = makeSea();
    this.scene.add(this.sky, this.sea);

    this.scene.add(new THREE.HemisphereLight(0x8a9bbd, 0x1b2a30, 0.9));
    const sun = new THREE.DirectionalLight(0xffa866, 2.6);
    sun.position.copy(SUN_DIR).multiplyScalar(60);
    this.scene.add(sun);

    this.fx = new Effects(this.scene);
    this.boards = {
      own: new Board("own", -BOARD_X, true, this.scene),
      enemy: new Board("enemy", BOARD_X, false, this.scene),
    };
    this.boards.enemy.grid.material.uniforms.uActive.value = 1;

    // aiming reticle
    this.reticle = this.makeReticle();
    this.reticle.visible = false;
    this.scene.add(this.reticle);
    this.reticleState = null;
    this.ghost = null;

    // menu fleet cruising in the lobby
    this.menuFleet = new THREE.Group();
    this.menuShips = [
      { kind: "carrier", r: 30, a: 0.4, v: 0.012 },
      { kind: "battleship", r: 24, a: 2.6, v: -0.016 },
      { kind: "destroyer", r: 19, a: 4.4, v: 0.02 },
    ].map((d) => {
      const s = buildShip(d.kind, "own");
      this.menuFleet.add(s);
      return { ...d, s };
    });
    this.scene.add(this.menuFleet);

    // state
    this.mode = "menu"; // menu | play
    this.focusName = "overview";
    this.placing = false;
    this.camPos = new THREE.Vector3(0, 6, 30);
    this.camLook = new THREE.Vector3(0, 3, 0);
    this.parallax = new THREE.Vector2();
    this.parallaxT = new THREE.Vector2();
    this.queue = [];
    this.cur = null;
    this.timers = [];
    this.shell = null;
    this.gameKey = null;
    this.synced = false;
    this.shown = { own: 0, enemy: 0 };
    this.cumShots = { own: [], enemy: [] };
    this.pendingReveal = null;
    this.busy = false;
    this.flash = 0;
    this.nextLightning = 6;
    this.onImpact = null;
    this.onSunk = null;
    this.onBusy = null;
    this.raycaster = new THREE.Raycaster();
    this.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.2);

    this.resize = this.resize.bind(this);
    window.addEventListener("resize", this.resize);
    window.addEventListener("pointermove", (e) => {
      this.parallaxT.set((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
    });
    this.resize();
    this.last = performance.now();
    const loop = (now) => {
      requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.update(dt);
      this.renderer.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }

  // ── setup helpers ─────────────────────────────────────────────────────
  makeReticle() {
    const g = new THREE.Group();
    const m = new THREE.MeshBasicMaterial({ color: 0xff5a3c, transparent: true, opacity: 0.95, depthWrite: false });
    this.reticleMat = m;
    const bar = (w, d, x, z) => {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.03, d), m);
      b.position.set(x, 0, z);
      g.add(b);
    };
    const e = 0.46;
    bar(0.96, 0.05, 0, e);
    bar(0.96, 0.05, 0, -e);
    bar(0.05, 0.96, e, 0);
    bar(0.05, 0.96, -e, 0);
    bar(0.3, 0.035, 0.17, 0);
    bar(0.3, 0.035, -0.17, 0);
    bar(0.035, 0.3, 0, 0.17);
    bar(0.035, 0.3, 0, -0.17);
    g.renderOrder = 4;
    return g;
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.fx.setScale(h * this.renderer.getPixelRatio(), FOV);
  }

  // ── public API ────────────────────────────────────────────────────────
  setMode(mode) {
    this.mode = mode;
  }

  /** "own" | "enemy" | "overview" */
  focus(name) {
    this.focusName = name;
  }

  setPlacing(on) {
    this.placing = on;
  }

  isBusy() {
    return this.busy;
  }

  /** Forget the previous game: ships, marks, fires, queued shots. */
  reset() {
    this.queue.length = 0;
    this.cur = null;
    this.timers.length = 0;
    this.clearShell();
    this.fx.clear();
    for (const b of Object.values(this.boards)) {
      for (const s of b.ships.values()) b.shipsGroup.remove(s.root);
      b.ships.clear();
      for (const m of b.marks) b.decals.remove(m.mesh);
      b.marks.length = 0;
    }
    this.removeGhost();
    this.reticle.visible = false;
    this.synced = false;
    this.gameKey = null;
    this.shown = { own: 0, enemy: 0 };
    this.cumShots = { own: [], enemy: [] };
    this.pendingReveal = null;
    this.setBusy(false);
  }

  setBusy(v) {
    if (v !== this.busy) {
      this.busy = v;
      this.onBusy?.(v);
    }
  }

  /** The player's own fleet (a placement draft, or the placed fleet). */
  setOwnFleet(ships, { quiet = false } = {}) {
    const b = this.boards.own;
    for (const [kind, rec] of [...b.ships]) {
      const want = ships.find((s) => s.kind === kind);
      if (!want || !samePose(want, rec.data)) {
        b.shipsGroup.remove(rec.root);
        b.ships.delete(kind);
      }
    }
    for (const s of ships) {
      if (b.ships.has(s.kind)) continue;
      this.addShip(b, s, { drop: !quiet, wreck: false });
    }
  }

  addShip(board, data, { drop = false, wreck = false }) {
    const root = buildShip(data.kind, board.own ? "own" : "enemy");
    const pose = shipPose(data);
    root.position.set(pose.cx - SIZE / 2, 0, pose.cy - SIZE / 2);
    root.rotation.y = pose.yaw;
    board.shipsGroup.add(root);
    const rec = {
      kind: data.kind,
      data,
      root,
      body: root.userData.body,
      pose,
      sink: wreck ? 1 : 0,
      sinking: false,
      drop: drop ? 1 : 0,
      phase: Math.random() * 6.28,
      rollSign: Math.random() < 0.5 ? -1 : 1,
      fires: [],
    };
    board.ships.set(data.kind, rec);
    if (drop) audio.play("place");
    if (wreck) this.wreckFire(board, rec);
    return rec;
  }

  wreckFire(board, rec) {
    const cells = cellsOf(rec.data);
    for (const c of cells.filter((_, i) => i % 2 === 0)) {
      const p = board.cellPos(c.x, c.y, 0.28);
      rec.fires.push(this.fx.addFire(p, { intense: 0.7, burnFor: 5 }));
    }
  }

  setGhost(ship, valid) {
    if (!ship) return this.removeGhost();
    const key = `${ship.kind}:${ship.horizontal}`;
    if (!this.ghost || this.ghost.key !== key) {
      this.removeGhost();
      const root = buildGhost(ship.kind, valid);
      this.boards.own.shipsGroup.add(root);
      this.ghost = { key, root, valid };
    }
    if (this.ghost.valid !== valid) {
      setGhostValid(this.ghost.root, valid);
      this.ghost.valid = valid;
    }
    const pose = shipPose(ship);
    this.ghost.root.position.set(pose.cx - SIZE / 2, 0.2, pose.cy - SIZE / 2);
    this.ghost.root.rotation.y = pose.yaw;
  }

  removeGhost() {
    if (this.ghost) this.boards.own.shipsGroup.remove(this.ghost.root);
    this.ghost = null;
  }

  /** Show the aiming square on a cell. kind: "ok" | "bad" | "lock" | "place" */
  setReticle(boardName, x, y, kind = "ok") {
    if (boardName == null) {
      this.reticle.visible = false;
      this.reticleState = null;
      return;
    }
    const b = this.boards[boardName];
    const p = b.cellPos(x, y, 0.27);
    this.reticle.position.set(p[0], p[1], p[2]);
    this.reticle.visible = true;
    this.reticleState = kind;
    this.reticleMat.color.set({ ok: 0xff5a3c, bad: 0x8a8f94, lock: 0xffd34a, place: 0x59d8ff }[kind]);
  }

  /** Which board cell is under the pointer: { board, x, y } or null. */
  pick(clientX, clientY) {
    if (!this.ok) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hit = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(this.plane, hit)) return null;
    for (const b of Object.values(this.boards)) {
      const lx = hit.x - b.center.x + SIZE / 2;
      const ly = hit.z - b.center.z + SIZE / 2;
      if (lx >= 0 && ly >= 0 && lx < SIZE && ly < SIZE) return { board: b.name, x: Math.floor(lx), y: Math.floor(ly) };
    }
    return null;
  }

  // ── syncing with the game ─────────────────────────────────────────────
  /**
   * @param g     a normalized view (fleet.js `normalizeView`)
   * @param key   identifies the game; a new key resets the scene
   * @param over  true on the debrief: the enemy fleet is revealed
   */
  setGame(g, key, { over = false } = {}) {
    if (!this.ok) return;
    if (key !== this.gameKey) {
      this.reset();
      this.gameKey = key;
    }
    if (g.you.ships.length) this.setOwnFleet(g.you.ships, { quiet: !this.synced });
    const first = !this.synced;
    this.synced = true;
    const own = this.boards.own;
    const enemy = this.boards.enemy;

    // the enemy ships we may see: the sunk ones (all of them once over)
    const enemyShips = g.opp.ships;
    const sinks = (ships, shots, upto, cell) =>
      ships.find((s) => {
        const cs = cellsOf(s);
        return hasCell(cs, cell) && cs.every((c) => hasCell(shots.slice(0, upto + 1), c));
      }) ?? null;

    const newEvents = [];
    for (let i = this.shown.enemy; i < g.opp.shots.length; i++) {
      const m = g.opp.shots[i];
      newEvents.push({ board: "enemy", x: m.x, y: m.y, hit: m.hit, sunk: m.hit ? sinks(enemyShips, g.opp.shots, i, m) : null });
    }
    for (let i = this.shown.own; i < g.you.shots.length; i++) {
      const m = g.you.shots[i];
      newEvents.push({ board: "own", x: m.x, y: m.y, hit: m.hit, sunk: m.hit ? sinks(g.you.ships, g.you.shots, i, m) : null });
    }
    this.shown.enemy = g.opp.shots.length;
    this.shown.own = g.you.shots.length;

    if (first) {
      // joining mid-game: show the position at once, no animation
      for (const ev of newEvents) {
        const b = this.boards[ev.board];
        this.addMark(b, ev, { instant: true });
        if (ev.sunk) this.sinkNow(b, ev.sunk);
      }
    } else {
      this.queue.push(...newEvents);
    }
    if (over) this.pendingReveal = enemyShips;
    this.tryReveal();
    void own;
    void enemy;
  }

  tryReveal() {
    if (!this.pendingReveal || this.queue.length || this.cur) return;
    const b = this.boards.enemy;
    for (const s of this.pendingReveal) {
      if (b.ships.has(s.kind)) continue;
      const sunk = cellsOf(s).every((c) => b.markAt(c.x, c.y)?.hit);
      this.addShip(b, s, { drop: !sunk, wreck: sunk });
    }
    this.pendingReveal = null;
  }

  sinkNow(board, shipData) {
    let rec = board.ships.get(shipData.kind);
    if (!rec) rec = this.addShip(board, shipData, { wreck: true });
    else {
      rec.sink = 1;
      rec.sinking = false;
      this.wreckFire(board, rec);
    }
  }

  // ── marks ─────────────────────────────────────────────────────────────
  addMark(board, ev, { instant = false } = {}) {
    if (board.markAt(ev.x, ev.y)) return;
    const mesh = new THREE.Group();
    const p = board.cellPos(ev.x, ev.y, 0).map((v, i) => v - [board.center.x, 0, board.center.z][i]);
    mesh.position.set(p[0], 0.23, p[2]);
    const mark = { x: ev.x, y: ev.y, hit: ev.hit, mesh, fire: null, born: this.t };
    if (ev.hit) {
      const d = new THREE.Mesh(
        new THREE.CircleGeometry(0.34, 24).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xff3a1a, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      mesh.add(d);
      const w = board.cellPos(ev.x, ev.y, 0.3);
      mark.fire = this.fx.addFire(w, { intense: board.own ? 1 : 0.9, burnFor: instant ? 8 : 40 });
    } else {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.2, 0.28, 28).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xeaf6ff, transparent: true, opacity: 0.8, depthWrite: false }),
      );
      const dot = new THREE.Mesh(
        new THREE.CircleGeometry(0.11, 16).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false }),
      );
      mesh.add(ring, dot);
      mark.ring = ring;
    }
    board.decals.add(mesh);
    board.marks.push(mark);
  }

  // ── the shot queue ────────────────────────────────────────────────────
  clearShell() {
    if (this.shell) this.scene.remove(this.shell.mesh);
    this.shell = null;
  }

  startEvent(ev) {
    const b = this.boards[ev.board];
    const target = new THREE.Vector3(...b.cellPos(ev.x, ev.y, 0.3));
    const from = ev.board === "enemy" ? new THREE.Vector3(-16, 8, 24) : new THREE.Vector3(18, 10, -22);
    const origin = target.clone().add(from);
    const mesh = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffe0a0 }));
    core.scale.set(1, 1, 1.9);
    mesh.add(core);
    this.scene.add(mesh);
    this.shell = { mesh, origin, target, arc: 9 + Math.random() * 3 };
    this.cur = { ev, t: 0, stage: "flight", end: FLIGHT };
    this.focus(ev.board);
    this.setBusy(true);
    audio.play("cannon");
    setTimeout(() => audio.play("whistle", FLIGHT * 0.9), 120);
    // muzzle flash where the shell leaves
    const f = origin.toArray();
    this.fx.add.emit({ pos: f, life: 0.3, size0: 2.2, size1: 3.4, c0: [1, 0.9, 0.6], c1: [1, 0.4, 0.1], a0: 1, a1: 0 });
  }

  impact(ev) {
    const b = this.boards[ev.board];
    const w = b.cellPos(ev.x, ev.y, ev.hit ? 0.3 : 0.12);
    this.addMark(b, ev);
    if (ev.hit) {
      this.fx.explosion(w, ev.sunk ? 1.4 : 1);
      audio.play("explosion");
    } else {
      this.fx.splash(w);
      audio.play("splash");
    }
    this.onImpact?.(ev);
    if (ev.sunk) {
      let rec = b.ships.get(ev.sunk.kind);
      if (!rec) rec = this.addShip(b, ev.sunk, { drop: false });
      rec.sinking = true;
      for (const [i, c] of cellsOf(ev.sunk).entries()) {
        this.timers.push({
          at: this.t + 0.25 + i * 0.28,
          run: () => {
            this.fx.explosion(b.cellPos(c.x, c.y, 0.35), 0.8);
            if (i % 2 === 0) audio.play("explosion");
          },
        });
      }
      this.timers.push({ at: this.t + 0.6, run: () => audio.play("sink") });
      this.cur.stage = "sink";
      this.cur.t = 0;
      this.cur.end = SINK;
      this.cur.rec = rec;
      this.cur.board = b;
      this.onSunk?.(ev);
    } else {
      this.cur.stage = "linger";
      this.cur.t = 0;
      this.cur.end = ev.hit ? 1.1 : 0.7;
    }
  }

  tickQueue(dt) {
    if (!this.cur) {
      if (!this.queue.length) {
        this.tryReveal();
        if (!this.queue.length && !this.cur) this.setBusy(false);
        return;
      }
      this.startEvent(this.queue.shift());
    }
    const speed = 1 + 0.6 * Math.min(this.queue.length, 3);
    const c = this.cur;
    c.t += dt * speed;
    if (c.stage === "flight") {
      const u = cl(c.t / c.end, 0, 1);
      const s = this.shell;
      s.mesh.position.lerpVectors(s.origin, s.target, u);
      s.mesh.position.y += s.arc * 4 * u * (1 - u) * (1 - u * 0.2);
      s.mesh.lookAt(s.target);
      // glowing trail
      const p = s.mesh.position;
      this.fx.add.emit({ pos: [p.x, p.y, p.z], life: 0.35, size0: 0.35, size1: 0.1, c0: [1, 0.7, 0.3], c1: [1, 0.2, 0.05], a0: 0.8, a1: 0 });
      this.fx.smoke.emit({ pos: [p.x, p.y, p.z], vel: [0, 0.2, 0], life: 1.1, size0: 0.25, size1: 0.8, c0: [0.5, 0.5, 0.52], c1: [0.3, 0.3, 0.32], a0: 0.35, a1: 0, rotV: 0.5 });
      if (u >= 1) {
        this.clearShell();
        this.impact(c.ev);
      }
    } else if (c.stage === "sink") {
      c.rec.sink = ease(cl(c.t / c.end, 0, 1));
      // bubbles and oil smoke while she goes down
      const p = c.board.cellPos(c.rec.data.x, c.rec.data.y, 0.1);
      const cells = cellsOf(c.rec.data);
      const cell = cells[Math.floor(Math.random() * cells.length)];
      const q = c.board.cellPos(cell.x, cell.y, 0.15);
      void p;
      if (Math.random() < 0.7) {
        this.fx.smoke.emit({ pos: q, vel: [0, 1.4, 0], life: 1.2, size0: 0.12, size1: 0.3, c0: [0.8, 0.9, 1], a0: 0.5, a1: 0, grav: -0.5 });
      }
      if (c.t >= c.end) {
        c.rec.sinking = false;
        c.rec.sink = 1;
        this.wreckFire(c.board, c.rec);
        this.cur = null;
      }
    } else if (c.t >= c.end) {
      this.cur = null;
    }
  }

  // ── per-frame ─────────────────────────────────────────────────────────
  update(dt) {
    this.t += dt;
    const t = this.t;
    this.sea.userData.tick(t, this.flash);
    this.sky.material.uniforms.uTime.value = t;
    this.sky.material.uniforms.uFlash.value = this.flash;

    // lightning
    this.nextLightning -= dt;
    if (this.nextLightning < 0) {
      this.nextLightning = 14 + Math.random() * 18;
      this.flash = 1;
      setTimeout(() => (this.flash = 0.8), 140);
      setTimeout(() => audio.play("thunder"), 700 + Math.random() * 1200);
    }
    this.flash = Math.max(0, this.flash - dt * 3.2);

    for (let i = this.timers.length - 1; i >= 0; i--) {
      if (this.timers[i].at <= t) this.timers.splice(i, 1)[0].run();
    }
    this.tickQueue(dt);
    this.fx.update(dt, t);

    for (const b of Object.values(this.boards)) {
      b.grid.material.uniforms.uTime.value = t;
      for (const rec of b.ships.values()) this.poseShip(b, rec, t, dt);
      for (const m of b.marks) {
        if (m.ring) {
          const k = 1 + 0.18 * Math.sin(t * 2 + m.x * 1.7 + m.y);
          m.ring.scale.set(k, 1, k);
        }
        if (m.hit && m.mesh.children[0]) m.mesh.children[0].material.opacity = 0.3 + 0.25 * Math.sin(t * 7 + m.x * 3 + m.y);
      }
    }
    // the reticle breathes
    if (this.reticle.visible) {
      const k = this.reticleState === "lock" ? 1 + 0.12 * Math.sin(t * 14) : 1 + 0.05 * Math.sin(t * 6);
      this.reticle.scale.set(k, 1, k);
      this.reticle.rotation.y = this.reticleState === "lock" ? t * 1.5 : 0;
    }
    this.updateMenuFleet(t);
    this.updateCamera(dt, t);
  }

  poseShip(b, rec, t, dt) {
    const wx = b.center.x + rec.pose.cx - SIZE / 2;
    const wz = b.center.z + rec.pose.cy - SIZE / 2;
    const h = waveH(wx, wz, t);
    const s = rec.sink;
    if (rec.drop > 0) rec.drop = Math.max(0, rec.drop - dt * 3.2);
    const body = rec.body;
    const bob = Math.sin(t * 1.1 + rec.phase);
    body.position.y = h * 0.9 + rec.drop * 1.6 - 0.42 * s;
    body.rotation.x = 0.035 * bob + rec.rollSign * 0.62 * s;
    body.rotation.z = 0.03 * Math.sin(t * 0.9 + rec.phase * 2) - 0.13 * s;
  }

  updateMenuFleet(t) {
    const show = this.mode === "menu";
    this.menuFleet.visible = show;
    if (!show) return;
    for (const m of this.menuShips) {
      const a = m.a + t * m.v;
      m.s.position.set(Math.cos(a) * m.r, waveH(Math.cos(a) * m.r, Math.sin(a) * m.r, t) * 0.9, Math.sin(a) * m.r - 6);
      m.s.rotation.y = -a + (m.v > 0 ? -Math.PI / 2 : Math.PI / 2);
      m.s.userData.body.rotation.x = 0.03 * Math.sin(t + m.a);
    }
  }

  updateCamera(dt, t) {
    const aspect = this.camera.aspect;
    const tanH = Math.tan((FOV * Math.PI) / 360);
    const fit = (needW, base) => Math.max(1, needW / (2 * tanH * aspect * base));
    let pos;
    let look;
    if (this.mode === "menu") {
      const a = t * 0.045;
      pos = new THREE.Vector3(Math.sin(a) * 22, 4.2 + Math.sin(t * 0.13) * 0.6, 30 + Math.cos(a) * 6);
      look = new THREE.Vector3(Math.sin(a * 0.7) * 6, 2.4, -8);
    } else if (this.focusName === "overview") {
      const k = fit(36, 28);
      const base = new THREE.Vector3(0, 21, 24);
      pos = base.multiplyScalar(k);
      look = new THREE.Vector3(0, 0, 1);
    } else {
      const b = this.boards[this.focusName];
      const k = fit(this.placing ? 13.2 : 15, 16.3);
      const base = this.placing ? new THREE.Vector3(0, 15, 7.5) : new THREE.Vector3(0, 11.5, 12.5);
      pos = b.center.clone().add(base.multiplyScalar(k));
      look = b.center.clone().add(new THREE.Vector3(0, 0, this.placing ? 0.5 : -0.6));
    }
    const kPos = 1 - Math.exp(-dt * 1.9);
    this.camPos.lerp(pos, kPos);
    this.camLook.lerp(look, kPos * 1.2);
    this.parallax.lerp(this.parallaxT, 1 - Math.exp(-dt * 2));
    const sh = this.fx.shake;
    this.camera.position.set(
      this.camPos.x + this.parallax.x * 0.9 + (Math.random() - 0.5) * sh * 0.5,
      this.camPos.y - this.parallax.y * 0.5 + (Math.random() - 0.5) * sh * 0.5,
      this.camPos.z + (Math.random() - 0.5) * sh * 0.5,
    );
    this.camera.lookAt(this.camLook);
    this.sky.position.copy(this.camera.position);
  }

  /** Cells (as seen on screen) of the last event, for HUD hints. */
  lastCell() {
    return this.cur?.ev ?? null;
  }
}

export { sameCell };
