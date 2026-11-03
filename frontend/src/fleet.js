// Pure fleet helpers shared by the plugin, the headless play-test and the
// 3D UI. No DOM, no three.js. Cosmetic mirrors of ../../src/BattleshipRules.mo:
// the canister's `validate` is the only real gate.

export const SIZE = 10;
export const KINDS = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
export const LENGTH = { carrier: 5, battleship: 4, cruiser: 3, submarine: 3, destroyer: 2 };
export const NAME = {
  carrier: "Carrier",
  battleship: "Battleship",
  cruiser: "Cruiser",
  submarine: "Submarine",
  destroyer: "Destroyer",
};

/** The variant's tag: `{ hit: null }` -> "hit". */
export const tagOf = (v) => Object.keys(v)[0];

/** A ship from its Candid shape (`kind` variant, bigint x/y) to plain JS. */
export const shipFromWire = (s) => ({
  kind: tagOf(s.kind),
  x: Number(s.x),
  y: Number(s.y),
  horizontal: s.horizontal,
});

/** ... and back, ready for `duel_submit`. */
export const shipToWire = (s) => ({
  kind: { [s.kind]: null },
  x: BigInt(s.x),
  y: BigInt(s.y),
  horizontal: s.horizontal,
});

/** A `View` from the canister as plain JS: tags as strings, numbers as numbers. */
export function normalizeView(g) {
  const side = (sv) => ({
    placed: sv.placed,
    ships: sv.ships.map(shipFromWire),
    shots: sv.shots.map((m) => ({ x: Number(m.x), y: Number(m.y), hit: m.hit })),
    sunk: Number(sv.sunk),
  });
  const last = g.last.length
    ? {
        by: tagOf(g.last[0].by),
        x: Number(g.last[0].x),
        y: Number(g.last[0].y),
        hit: g.last[0].hit,
        sunk: g.last[0].sunk.length ? shipFromWire(g.last[0].sunk[0]) : null,
      }
    : null;
  return {
    phase: tagOf(g.phase),
    toMove: tagOf(g.toMove),
    you: side(g.you),
    opp: side(g.opp),
    last,
  };
}

export function cellsOf(ship) {
  const out = [];
  for (let i = 0; i < LENGTH[ship.kind]; i++) {
    out.push(ship.horizontal ? { x: ship.x + i, y: ship.y } : { x: ship.x, y: ship.y + i });
  }
  return out;
}

export function onGrid(ship) {
  const len = LENGTH[ship.kind];
  return (
    ship.x >= 0 &&
    ship.y >= 0 &&
    ship.x < SIZE &&
    ship.y < SIZE &&
    (ship.horizontal ? ship.x + len <= SIZE : ship.y + len <= SIZE)
  );
}

export const sameCell = (a, b) => a.x === b.x && a.y === b.y;
export const hasCell = (cells, c) => cells.some((d) => sameCell(c, d));

/** True when `ship` fits the grid and overlaps none of `others`. */
export function fits(ship, others) {
  if (!onGrid(ship)) return false;
  const taken = others.flatMap(cellsOf);
  return cellsOf(ship).every((c) => !hasCell(taken, c));
}

/** null when `fleet` is a complete legal setup, else a reason. */
export function checkFleet(fleet) {
  if (fleet.length !== KINDS.length) return "Place all five ships.";
  for (const k of KINDS) if (fleet.filter((s) => s.kind === k).length !== 1) return "One ship of each kind.";
  for (let i = 0; i < fleet.length; i++) {
    if (!fits(fleet[i], fleet.filter((_, j) => j !== i))) return "A ship is off the grid or overlapping.";
  }
  return null;
}

/** The ship covering `cell`, or undefined. */
export const shipAt = (fleet, cell) => fleet.find((s) => hasCell(cellsOf(s), cell));

/**
 * A complete random fleet that keeps the ships of `keep` where they are.
 * `rand` is a () => [0,1) source (Math.random by default).
 */
export function randomFleet(keep = [], rand = Math.random) {
  for (let attempt = 0; attempt < 200; attempt++) {
    const fleet = [...keep];
    let ok = true;
    for (const kind of KINDS) {
      if (fleet.some((s) => s.kind === kind)) continue;
      let placed = false;
      for (let tries = 0; tries < 200 && !placed; tries++) {
        const horizontal = rand() < 0.5;
        const len = LENGTH[kind];
        const x = Math.floor(rand() * (horizontal ? SIZE - len + 1 : SIZE));
        const y = Math.floor(rand() * (horizontal ? SIZE : SIZE - len + 1));
        const ship = { kind, x, y, horizontal };
        if (fits(ship, fleet)) {
          fleet.push(ship);
          placed = true;
        }
      }
      if (!placed) {
        ok = false;
        break;
      }
    }
    if (ok) return KINDS.map((k) => fleet.find((s) => s.kind === k));
  }
  throw new Error("randomFleet: could not place the fleet");
}

export const cellLabel = (x, y) => `${"ABCDEFGHIJ"[x]}${y + 1}`;
