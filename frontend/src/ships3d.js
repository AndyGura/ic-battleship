// Procedural warships built from primitives. Local frame: the bow points
// +x, the ship spans x in [-L/2, L/2] (L cells), the waterline is y = 0.

import * as THREE from "three";
import { LENGTH } from "./fleet.js";

const PALETTES = {
  own: { hull: 0x6a819a, belt: 0x7a3a30, deck: 0x8d9296, super: 0xb4bec8, dark: 0x2a3036, accent: 0xd4a24c },
  enemy: { hull: 0x86605c, belt: 0x3a2a28, deck: 0x8a7e7c, super: 0xb59f9b, dark: 0x2a2222, accent: 0xc7473a },
};

const matCache = new Map();
function mat(color, rough = 0.62, metal = 0.35) {
  const key = `${color}:${rough}:${metal}`;
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal }));
  }
  return matCache.get(key);
}

const box = (w, h, d, x, y, z, m) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  return mesh;
};
const cyl = (rt, rb, h, x, y, z, m, seg = 12) => {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  mesh.position.set(x, y, z);
  return mesh;
};

/** A hull from a pointed-bow outline, extruded upward. */
function hullGeo(L, W, h, bowFrac = 0.28, sternRound = 0.06) {
  const hw = W / 2;
  const s = new THREE.Shape();
  const x0 = -L / 2;
  const x1 = L / 2;
  const bx = x1 - L * bowFrac;
  s.moveTo(x0 + sternRound, -hw);
  s.lineTo(bx, -hw);
  s.quadraticCurveTo(x1 - L * 0.06, -hw * 0.85, x1, 0);
  s.quadraticCurveTo(x1 - L * 0.06, hw * 0.85, bx, hw);
  s.lineTo(x0 + sternRound, hw);
  s.quadraticCurveTo(x0, hw, x0, hw - sternRound);
  s.lineTo(x0, -hw + sternRound);
  s.quadraticCurveTo(x0, -hw, x0 + sternRound, -hw);
  const g = new THREE.ExtrudeGeometry(s, {
    depth: h,
    bevelEnabled: true,
    bevelThickness: 0.025,
    bevelSize: 0.025,
    bevelSegments: 2,
    curveSegments: 10,
  });
  g.rotateX(-Math.PI / 2); // extrusion becomes "up"
  return g;
}

function turret(x, y, z, scale, pal, barrels = 2, dir = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.add(cyl(0.15 * scale, 0.17 * scale, 0.08 * scale, 0, 0.04 * scale, 0, mat(pal.super, 0.5, 0.5), 14));
  g.add(box(0.26 * scale, 0.09 * scale, 0.24 * scale, 0.02 * dir * scale, 0.11 * scale, 0, mat(pal.hull, 0.5, 0.5)));
  const off = barrels === 3 ? [-0.075, 0, 0.075] : barrels === 2 ? [-0.05, 0.05] : [0];
  for (const o of off) {
    const b = cyl(0.016 * scale, 0.02 * scale, 0.42 * scale, 0.3 * dir * scale, 0.115 * scale, o * scale, mat(pal.dark, 0.4, 0.7), 8);
    b.rotation.z = Math.PI / 2;
    g.add(b);
  }
  return g;
}

function funnel(x, y, z, r, h, pal) {
  const g = new THREE.Group();
  const body = cyl(r * 0.85, r, h, x, y + h / 2, z, mat(pal.dark, 0.7, 0.2), 12);
  body.scale.z = 1.2;
  g.add(body);
  g.add(cyl(r * 0.9, r * 0.9, h * 0.14, x, y + h * 0.78, z, mat(pal.accent, 0.5, 0.3), 12));
  return g;
}

function mast(x, y, z, h, pal) {
  const g = new THREE.Group();
  g.add(cyl(0.012, 0.018, h, x, y + h / 2, z, mat(pal.dark, 0.5, 0.6), 6));
  g.add(box(0.015, 0.015, 0.24, x, y + h * 0.7, z, mat(pal.dark)));
  g.add(box(0.1, 0.012, 0.04, x - 0.02, y + h, z, mat(pal.super)));
  return g;
}

/**
 * @param {"carrier"|"battleship"|"cruiser"|"submarine"|"destroyer"} kind
 * @param {"own"|"enemy"} side
 */
export function buildShip(kind, side = "own") {
  const pal = PALETTES[side];
  const L = LENGTH[kind];
  const root = new THREE.Group();
  const body = new THREE.Group(); // rolls, pitches and sinks
  root.add(body);
  root.userData.body = body;

  if (kind === "submarine") {
    const sub = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.19, L - 0.62, 6, 16).rotateZ(Math.PI / 2),
      mat(pal.hull, 0.45, 0.5),
    );
    sub.scale.set(1, 0.9, 1);
    sub.position.y = -0.04;
    body.add(sub);
    body.add(box(L * 0.1, 0.02, 0.1, -0.1, 0.15, 0, mat(pal.dark)));
    const tower = box(0.46, 0.26, 0.17, 0.05, 0.14, 0, mat(pal.super, 0.5, 0.5));
    tower.geometry = new THREE.CapsuleGeometry(0.085, 0.3, 4, 10).rotateZ(Math.PI / 2);
    body.add(tower);
    body.add(cyl(0.012, 0.012, 0.3, 0.12, 0.38, 0, mat(pal.dark), 6));
    body.add(box(0.07, 0.025, 0.03, 0.15, 0.52, 0, mat(pal.dark)));
    body.add(box(0.2, 0.02, 0.36, -L / 2 + 0.28, 0.02, 0, mat(pal.dark))); // stern planes
    return root;
  }

  const widths = { carrier: 0.84, battleship: 0.7, cruiser: 0.6, destroyer: 0.46 };
  const W = widths[kind];
  const lower = new THREE.Mesh(hullGeo(L * 0.985, W * 0.97, 0.2, kind === "carrier" ? 0.14 : 0.28).translate(0, -0.22, 0), mat(pal.belt, 0.8, 0.2));
  const upper = new THREE.Mesh(hullGeo(L, W, 0.24, kind === "carrier" ? 0.14 : 0.28).translate(0, -0.02, 0), mat(pal.hull, 0.6, 0.4));
  body.add(lower, upper);
  const deckY = 0.22;

  if (kind === "carrier") {
    const deck = box(L * 0.97, 0.05, W * 1.12, 0.02, deckY + 0.06, 0, mat(pal.deck, 0.8, 0.15));
    body.add(deck);
    body.add(box(L * 0.84, 0.054, 0.026, 0, deckY + 0.063, 0, mat(0xe8e2c8, 0.9, 0)));
    body.add(box(L * 0.8, 0.054, 0.012, 0.0, deckY + 0.063, 0.2, mat(0xe8e2c8, 0.9, 0)));
    body.add(box(0.5, 0.42, 0.2, 0.55, deckY + 0.3, W * 0.5, mat(pal.super, 0.55, 0.4)));
    body.add(box(0.28, 0.22, 0.17, 0.55, deckY + 0.62, W * 0.5, mat(pal.super, 0.55, 0.4)));
    body.add(mast(0.62, deckY + 0.7, W * 0.5, 0.5, pal));
    for (const [px, pz, r] of [[-1.3, -0.12, 0.2], [-0.95, 0.2, -0.3], [-0.55, -0.24, 0.1], [-1.65, 0.18, 0.0]]) {
      const plane = new THREE.Group();
      plane.add(box(0.18, 0.025, 0.035, 0, 0, 0, mat(pal.dark)));
      plane.add(box(0.04, 0.012, 0.2, 0.01, 0, 0, mat(pal.dark)));
      plane.position.set(px, deckY + 0.105, pz);
      plane.rotation.y = r;
      body.add(plane);
    }
  } else if (kind === "battleship") {
    body.add(box(L * 0.8, 0.05, W * 0.86, 0, deckY + 0.02, 0, mat(pal.deck, 0.8, 0.15)));
    body.add(turret(1.25, deckY + 0.05, 0, 1.15, pal, 3));
    body.add(turret(0.66, deckY + 0.13, 0, 1.15, pal, 3));
    body.add(turret(-1.2, deckY + 0.05, 0, 1.15, pal, 3, -1));
    body.add(box(0.42, 0.22, 0.34, -0.12, deckY + 0.16, 0, mat(pal.super, 0.55, 0.4)));
    body.add(box(0.3, 0.2, 0.26, -0.12, deckY + 0.37, 0, mat(pal.super, 0.55, 0.4)));
    body.add(box(0.2, 0.16, 0.2, -0.12, deckY + 0.55, 0, mat(pal.super, 0.55, 0.4)));
    body.add(mast(-0.12, deckY + 0.6, 0, 0.55, pal));
    body.add(funnel(-0.55, deckY + 0.05, 0, 0.1, 0.38, pal));
    body.add(funnel(-0.82, deckY + 0.05, 0, 0.1, 0.34, pal));
  } else if (kind === "cruiser") {
    body.add(box(L * 0.78, 0.05, W * 0.84, 0, deckY + 0.02, 0, mat(pal.deck, 0.8, 0.15)));
    body.add(turret(0.78, deckY + 0.05, 0, 0.95, pal, 2));
    body.add(turret(-0.72, deckY + 0.05, 0, 0.95, pal, 2, -1));
    body.add(box(0.34, 0.2, 0.28, 0.12, deckY + 0.15, 0, mat(pal.super, 0.55, 0.4)));
    body.add(box(0.22, 0.16, 0.2, 0.12, deckY + 0.33, 0, mat(pal.super, 0.55, 0.4)));
    body.add(mast(0.12, deckY + 0.4, 0, 0.45, pal));
    body.add(funnel(-0.18, deckY + 0.05, 0, 0.09, 0.34, pal));
  } else {
    // destroyer
    body.add(box(L * 0.8, 0.045, W * 0.84, 0, deckY + 0.02, 0, mat(pal.deck, 0.8, 0.15)));
    body.add(turret(0.5, deckY + 0.05, 0, 0.7, pal, 1));
    body.add(box(0.26, 0.16, 0.2, 0.08, deckY + 0.13, 0, mat(pal.super, 0.55, 0.4)));
    body.add(mast(0.08, deckY + 0.2, 0, 0.36, pal));
    body.add(funnel(-0.22, deckY + 0.05, 0, 0.065, 0.24, pal));
    body.add(box(0.2, 0.05, 0.12, -0.55, deckY + 0.07, 0, mat(pal.dark)));
  }
  return root;
}

const ghostMats = {
  ok: new THREE.MeshBasicMaterial({ color: 0x59ff9c, transparent: true, opacity: 0.45, depthWrite: false }),
  bad: new THREE.MeshBasicMaterial({ color: 0xff4a3a, transparent: true, opacity: 0.45, depthWrite: false }),
};

/** A translucent ship for the placement preview. */
export function buildGhost(kind, valid) {
  const g = buildShip(kind, "own");
  g.traverse((o) => {
    if (o.isMesh) o.material = ghostMats[valid ? "ok" : "bad"];
  });
  return g;
}
export function setGhostValid(ghost, valid) {
  ghost.traverse((o) => {
    if (o.isMesh) o.material = ghostMats[valid ? "ok" : "bad"];
  });
}
