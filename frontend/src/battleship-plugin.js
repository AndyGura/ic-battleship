// GamePlugin for IC Battleship — the only game-specific protocol code.
// Action/View/Options mirror ../../src/BattleshipRules.mo exactly.
// The page itself is a 3D scene (scene.js, game-ui.js) over the headless
// client; this plugin stays free of DOM and three.js so that
// play-test.mjs can run it in Node.

import { esc } from "@research-ag/duel-game-core/render.js";
import {
  KINDS,
  LENGTH,
  SIZE,
  checkFleet,
  hasCell,
  normalizeView,
  randomFleet,
  shipToWire,
} from "./fleet.js";

const SEAT_NAME = { p1: "Admiral One", p2: "Admiral Two" };

export const plugin = {
  idlTypes({ IDL }) {
    const Seat = IDL.Variant({ p1: IDL.Null, p2: IDL.Null });
    const ShipKind = IDL.Variant({
      carrier: IDL.Null,
      battleship: IDL.Null,
      cruiser: IDL.Null,
      submarine: IDL.Null,
      destroyer: IDL.Null,
    });
    const Ship = IDL.Record({ kind: ShipKind, x: IDL.Nat, y: IDL.Nat, horizontal: IDL.Bool });
    const Mark = IDL.Record({ x: IDL.Nat, y: IDL.Nat, hit: IDL.Bool });
    const SideView = IDL.Record({
      placed: IDL.Bool,
      ships: IDL.Vec(Ship),
      shots: IDL.Vec(Mark),
      sunk: IDL.Nat,
    });
    const Shot = IDL.Record({
      by: Seat,
      x: IDL.Nat,
      y: IDL.Nat,
      hit: IDL.Bool,
      sunk: IDL.Opt(Ship),
    });
    const Action = IDL.Variant({
      place: IDL.Vec(Ship),
      fire: IDL.Record({ x: IDL.Nat, y: IDL.Nat }),
    });
    const View = IDL.Record({
      phase: IDL.Variant({ placing: IDL.Null, battle: IDL.Null }),
      toMove: Seat,
      you: SideView,
      opp: SideView,
      last: IDL.Opt(Shot),
    });
    const Options = IDL.Record({});
    return { Action, View, Options };
  },

  seatLabel(seat) {
    return SEAT_NAME[seat];
  },

  // The default in-game chrome puts this under the 3D view: a one-line
  // tally. The scene itself marks the last shot, live and in the debrief.
  renderBoard(gameState, mySeat) {
    const g = normalizeView(gameState);
    const mine = g.opp.shots; // my shots at the enemy
    const hits = mine.filter((m) => m.hit).length;
    const acc = mine.length ? Math.round((100 * hits) / mine.length) : 0;
    return `<div class="tally" data-seat="${esc(mySeat)}">
      <span>Your fleet <b>${KINDS.length - g.you.sunk}/${KINDS.length}</b></span>
      <span>Enemy fleet <b>${KINDS.length - g.opp.sunk}/${KINDS.length}</b></span>
      <span>Shots <b>${mine.length}</b> · hits <b>${hits}</b> · ${acc}%</span>
    </div>`;
  },

  // All moves are made in the 3D scene, never from buttons.
  renderActions() {
    return "";
  },

  // Cosmetic mirror of `move`: the view once mySeat's move has landed.
  // A fleet placed by #p1 hands the turn to #p2; every other outcome (the
  // coin toss after #p2's fleet, a shot's hit or miss) is the server's.
  applyLocal(gameState, mySeat, move) {
    if ("place" in move && mySeat === "p1" && "placing" in gameState.phase) {
      return {
        ...gameState,
        toMove: { p2: null },
        you: { ...gameState.you, placed: true, ships: move.place },
      };
    }
    return null;
  },

  // Every move the seat could make right now, for play-test.mjs: `enabled`
  // ones the rules must accept, `disabled` ones they must refuse.
  legalMoves(gameState, seat) {
    const g = normalizeView(gameState);
    if (g.toMove !== seat) return { enabled: [], disabled: [] };
    if (g.phase === "placing") {
      const overlapping = randomFleet().map((s) => ({ ...s, x: 0, y: 0, horizontal: true }));
      return {
        enabled: [{ place: randomFleet().map(shipToWire) }, { place: randomFleet().map(shipToWire) }],
        disabled: [{ place: overlapping.map(shipToWire) }],
      };
    }
    const enabled = [];
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        if (!hasCell(g.opp.shots, { x, y })) enabled.push({ fire: { x: BigInt(x), y: BigInt(y) } });
      }
    }
    const disabled = [{ fire: { x: BigInt(SIZE), y: 0n } }];
    if (g.opp.shots.length) disabled.push({ fire: { x: BigInt(g.opp.shots[0].x), y: BigInt(g.opp.shots[0].y) } });
    return { enabled, disabled };
  },
};

export { LENGTH, checkFleet };
