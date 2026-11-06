// A small CPU particle system drawn as point sprites: additive for fire,
// flashes and sparks, alpha-blended for smoke and spray.

import * as THREE from "three";

function softTexture(kind) {
  const s = 256;
  const k = s / 128;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d");
  if (kind === "smoke") {
    // a few overlapping blobs, so a rotating sprite looks like a puff
    const rnd = (a) => (Math.sin(a * 91.7) * 43758.5453) % 1;
    for (let i = 0; i < 9; i++) {
      const x = s / 2 + (rnd(i + 1) - 0.3) * 26 * k;
      const y = s / 2 + (rnd(i + 11) - 0.3) * 26 * k;
      const r = (20 + Math.abs(rnd(i + 21)) * 14) * k;
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, "rgba(255,255,255,0.55)");
      gr.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = gr;
      g.fillRect(0, 0, s, s);
    }
    // fade to nothing before the edge, so a big sprite never shows a square
    g.globalCompositeOperation = "destination-in";
    const mask = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    mask.addColorStop(0, "rgba(0,0,0,1)");
    mask.addColorStop(0.7, "rgba(0,0,0,1)");
    mask.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = mask;
    g.fillRect(0, 0, s, s);
    g.globalCompositeOperation = "source-over";
  } else {
    const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    gr.addColorStop(0, "rgba(255,255,255,1)");
    gr.addColorStop(0.35, "rgba(255,255,255,0.55)");
    gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr;
    g.fillRect(0, 0, s, s);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

class ParticleSystem {
  constructor(capacity, { additive, texture }) {
    this.cap = capacity;
    this.n = 0;
    const F = (k) => new Float32Array(capacity * k);
    this.pos = F(3);
    this.vel = F(3);
    this.age = F(1);
    this.life = F(1);
    this.s0 = F(1);
    this.s1 = F(1);
    this.c0 = F(3);
    this.c1 = F(3);
    this.a0 = F(1);
    this.a1 = F(1);
    this.drag = F(1);
    this.grav = F(1);
    this.rot = F(1);
    this.rotV = F(1);
    this.oPos = new Float32Array(capacity * 3);
    this.oCol = new Float32Array(capacity * 4);
    this.oSize = new Float32Array(capacity);
    this.oRot = new Float32Array(capacity);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(this.oPos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute("aColor", new THREE.BufferAttribute(this.oCol, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute("aSize", new THREE.BufferAttribute(this.oSize, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute("aRot", new THREE.BufferAttribute(this.oRot, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);
    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { uTex: { value: texture }, uScale: { value: 600 } },
      vertexShader: /* glsl */ `
        attribute vec4 aColor; attribute float aSize; attribute float aRot;
        varying vec4 vColor; varying float vRot;
        uniform float uScale;
        void main(){
          vColor = aColor; vRot = aRot;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(-mv.z, 0.1);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uTex;
        varying vec4 vColor; varying float vRot;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float cs = cos(vRot), sn = sin(vRot);
          vec2 q = vec2(cs * p.x - sn * p.y, sn * p.x + cs * p.y) + 0.5;
          vec4 t = texture2D(uTex, q);
          gl_FragColor = vec4(vColor.rgb, vColor.a * t.a);
        }`,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 6 : 5;
  }

  emit(o) {
    if (this.n >= this.cap) return;
    const i = this.n++;
    const p = o.pos;
    const v = o.vel ?? [0, 0, 0];
    this.pos.set([p[0], p[1], p[2]], i * 3);
    this.vel.set([v[0], v[1], v[2]], i * 3);
    this.age[i] = 0;
    this.life[i] = o.life;
    this.s0[i] = o.size0;
    this.s1[i] = o.size1 ?? o.size0;
    this.c0.set(o.c0, i * 3);
    this.c1.set(o.c1 ?? o.c0, i * 3);
    this.a0[i] = o.a0 ?? 1;
    this.a1[i] = o.a1 ?? 0;
    this.drag[i] = o.drag ?? 0;
    this.grav[i] = o.grav ?? 0;
    this.rot[i] = o.rot ?? Math.random() * 6.28;
    this.rotV[i] = o.rotV ?? 0;
  }

  update(dt) {
    let i = 0;
    while (i < this.n) {
      this.age[i] += dt;
      if (this.age[i] >= this.life[i]) {
        // swap-remove
        const j = --this.n;
        if (i !== j) {
          this.pos.copyWithin(i * 3, j * 3, j * 3 + 3);
          this.vel.copyWithin(i * 3, j * 3, j * 3 + 3);
          this.c0.copyWithin(i * 3, j * 3, j * 3 + 3);
          this.c1.copyWithin(i * 3, j * 3, j * 3 + 3);
          for (const a of [this.age, this.life, this.s0, this.s1, this.a0, this.a1, this.drag, this.grav, this.rot, this.rotV]) a[i] = a[j];
        }
        continue;
      }
      const k = Math.exp(-this.drag[i] * dt);
      this.vel[i * 3] *= k;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * k - this.grav[i] * dt;
      this.vel[i * 3 + 2] *= k;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.rot[i] += this.rotV[i] * dt;
      i++;
    }
    for (let q = 0; q < this.n; q++) {
      const t = this.age[q] / this.life[q];
      this.oPos[q * 3] = this.pos[q * 3];
      this.oPos[q * 3 + 1] = this.pos[q * 3 + 1];
      this.oPos[q * 3 + 2] = this.pos[q * 3 + 2];
      this.oCol[q * 4] = this.c0[q * 3] + (this.c1[q * 3] - this.c0[q * 3]) * t;
      this.oCol[q * 4 + 1] = this.c0[q * 3 + 1] + (this.c1[q * 3 + 1] - this.c0[q * 3 + 1]) * t;
      this.oCol[q * 4 + 2] = this.c0[q * 3 + 2] + (this.c1[q * 3 + 2] - this.c0[q * 3 + 2]) * t;
      // fade in over the first 10% so puffs do not pop
      const fadeIn = Math.min(1, t * 10);
      this.oCol[q * 4 + 3] = (this.a0[q] + (this.a1[q] - this.a0[q]) * t) * fadeIn;
      this.oSize[q] = this.s0[q] + (this.s1[q] - this.s0[q]) * t;
      this.oRot[q] = this.rot[q];
    }
    const g = this.points.geometry;
    g.setDrawRange(0, this.n);
    g.attributes.position.needsUpdate = true;
    g.attributes.aColor.needsUpdate = true;
    g.attributes.aSize.needsUpdate = true;
    g.attributes.aRot.needsUpdate = true;
  }
}

const rnd = (a, b) => a + Math.random() * (b - a);

/** All effect emitters, drawn by two particle systems. */
export class Effects {
  constructor(scene) {
    this.add = new ParticleSystem(7000, { additive: true, texture: softTexture("soft") });
    this.smoke = new ParticleSystem(7000, { additive: false, texture: softTexture("smoke") });
    scene.add(this.smoke.points, this.add.points);
    this.fires = new Set();
    this.rings = [];
    this.ringGeo = new THREE.RingGeometry(0.82, 1, 48).rotateX(-Math.PI / 2);
    this.scene = scene;
    this.shake = 0;
    this.flash = 0; // sky/sea lightning flash
    // pooled point lights for explosions
    this.lights = [0, 1].map(() => {
      const l = new THREE.PointLight(0xff8a3a, 0, 14, 1.6);
      scene.add(l);
      return { light: l, t: 99, peak: 0 };
    });
  }

  setScale(pixelHeight, fovDeg) {
    const s = pixelHeight / (2 * Math.tan((fovDeg * Math.PI) / 360));
    this.add.material.uniforms.uScale.value = s;
    this.smoke.material.uniforms.uScale.value = s;
  }

  ring(pos, { color = 0xffffff, size = 1.6, dur = 1.3, opacity = 0.7 } = {}) {
    const m = new THREE.Mesh(
      this.ringGeo,
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
    );
    m.position.set(pos[0], pos[1], pos[2]);
    m.scale.setScalar(0.1);
    m.renderOrder = 3;
    this.scene.add(m);
    this.rings.push({ m, t: 0, dur, size, opacity });
  }

  lightFlash(pos, peak = 9) {
    const slot = this.lights.reduce((a, b) => (a.t > b.t ? a : b));
    slot.light.position.set(pos[0], pos[1] + 1.2, pos[2]);
    slot.t = 0;
    slot.peak = peak;
  }

  /** Water column and spray where a shell lands in the sea. */
  splash(pos) {
    const [x, y, z] = pos;
    this.ring([x, y + 0.02, z], { size: 1.7, dur: 1.5 });
    this.ring([x, y + 0.02, z], { size: 0.9, dur: 0.9, opacity: 0.9 });
    for (let i = 0; i < 46; i++) {
      const a = Math.random() * 6.283;
      const sp = rnd(0.2, 1.1);
      this.smoke.emit({
        pos: [x + Math.cos(a) * 0.08, y, z + Math.sin(a) * 0.08],
        vel: [Math.cos(a) * sp, rnd(2.0, 4.6), Math.sin(a) * sp],
        life: rnd(0.9, 1.6),
        size0: rnd(0.22, 0.4),
        size1: rnd(0.5, 0.9),
        c0: [0.95, 0.98, 1],
        c1: [0.7, 0.8, 0.9],
        a0: 0.8,
        a1: 0,
        drag: 0.6,
        grav: 6.5,
      });
    }
    for (let i = 0; i < 16; i++) {
      this.add.emit({
        pos: [x, y + 0.1, z],
        vel: [rnd(-1, 1), rnd(2, 5), rnd(-1, 1)],
        life: rnd(0.5, 0.9),
        size0: 0.07,
        size1: 0.03,
        c0: [0.9, 0.95, 1],
        a0: 0.8,
        a1: 0,
        grav: 9,
      });
    }
  }

  /** A shell striking a ship: flash, fireball, sparks, smoke, shockwave. */
  explosion(pos, big = 1) {
    const [x, y, z] = pos;
    this.shake = Math.max(this.shake, 0.5 * big);
    this.lightFlash(pos, 10 * big);
    this.ring([x, 0.05, z], { color: 0xffc080, size: 2.4 * big, dur: 0.9, opacity: 0.8 });
    this.add.emit({ pos: [x, y + 0.2, z], life: 0.35, size0: 3.4 * big, size1: 5.2 * big, c0: [1, 0.9, 0.7], c1: [1, 0.5, 0.2], a0: 1, a1: 0 });
    for (let i = 0; i < 40 * big; i++) {
      const a = Math.random() * 6.283;
      const sp = rnd(0.2, 1.6) * big;
      this.add.emit({
        pos: [x, y + 0.15, z],
        vel: [Math.cos(a) * sp, rnd(0.8, 3.2), Math.sin(a) * sp],
        life: rnd(0.5, 1.2),
        size0: rnd(0.5, 1.0) * big,
        size1: rnd(1.0, 1.9) * big,
        c0: [1, 0.78, 0.35],
        c1: [0.75, 0.12, 0.02],
        a0: 0.95,
        a1: 0,
        drag: 1.6,
      });
    }
    for (let i = 0; i < 36 * big; i++) {
      const a = Math.random() * 6.283;
      const sp = rnd(1.5, 6);
      this.add.emit({
        pos: [x, y + 0.2, z],
        vel: [Math.cos(a) * sp, rnd(2, 7), Math.sin(a) * sp],
        life: rnd(0.6, 1.5),
        size0: rnd(0.06, 0.12),
        size1: 0.02,
        c0: [1, 0.85, 0.45],
        c1: [1, 0.3, 0.05],
        a0: 1,
        a1: 0,
        grav: 9,
      });
    }
    for (let i = 0; i < 26 * big; i++) {
      const a = Math.random() * 6.283;
      const sp = rnd(0.2, 1.2);
      this.smoke.emit({
        pos: [x, y + 0.2, z],
        vel: [Math.cos(a) * sp, rnd(0.8, 2.4), Math.sin(a) * sp],
        life: rnd(2.5, 4.5),
        size0: rnd(0.8, 1.3) * big,
        size1: rnd(2.6, 4.0) * big,
        c0: [0.08, 0.075, 0.07],
        c1: [0.2, 0.19, 0.18],
        a0: 0.8,
        a1: 0,
        drag: 0.5,
        rotV: rnd(-0.6, 0.6),
      });
    }
  }

  /** A burning wreck/hit: flames and smoke until `until` (then smoke only). */
  addFire(pos, { intense = 1, burnFor = 40 } = {}) {
    const f = { pos, age: 0, acc: 0, accS: 0, intense, burnFor };
    this.fires.add(f);
    return f;
  }

  removeFire(f) {
    this.fires.delete(f);
  }

  clear() {
    for (const f of this.fires) f.dead = true;
    this.fires.clear();
    this.add.n = 0;
    this.smoke.n = 0;
    for (const r of this.rings) this.scene.remove(r.m);
    this.rings.length = 0;
  }

  update(dt, t) {
    for (const f of this.fires) {
      f.age += dt;
      const burning = f.age < f.burnFor ? 1 - (f.age / f.burnFor) * 0.7 : 0.18;
      f.acc += dt * 26 * f.intense * burning;
      f.accS += dt * 7 * f.intense * (f.age < f.burnFor ? 1 : 0.7);
      const [x, y, z] = f.pos;
      while (f.acc >= 1) {
        f.acc -= 1;
        this.add.emit({
          pos: [x + rnd(-0.12, 0.12), y + rnd(0, 0.06), z + rnd(-0.12, 0.12)],
          vel: [rnd(-0.12, 0.12), rnd(0.6, 1.4), rnd(-0.12, 0.12)],
          life: rnd(0.45, 0.95),
          size0: rnd(0.34, 0.52) * (0.6 + 0.4 * burning),
          size1: rnd(0.08, 0.2),
          c0: [1, 0.62, 0.18],
          c1: [0.9, 0.12, 0.02],
          a0: 0.9,
          a1: 0,
          drag: 0.6,
        });
      }
      while (f.accS >= 1) {
        f.accS -= 1;
        this.smoke.emit({
          pos: [x + rnd(-0.1, 0.1), y + 0.35, z + rnd(-0.1, 0.1)],
          vel: [rnd(0.1, 0.45), rnd(0.7, 1.3), rnd(-0.2, 0.2)],
          life: rnd(3.2, 5.2),
          size0: rnd(0.4, 0.6),
          size1: rnd(1.8, 2.8),
          c0: [0.05, 0.05, 0.05],
          c1: [0.22, 0.21, 0.21],
          a0: 0.62,
          a1: 0,
          drag: 0.25,
          rotV: rnd(-0.4, 0.4),
        });
      }
    }
    // shockwave rings
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t += dt;
      const u = r.t / r.dur;
      if (u >= 1) {
        this.scene.remove(r.m);
        r.m.material.dispose();
        this.rings.splice(i, 1);
        continue;
      }
      r.m.scale.setScalar(0.1 + r.size * (1 - Math.pow(1 - u, 2.2)));
      r.m.material.opacity = r.opacity * (1 - u);
    }
    for (const s of this.lights) {
      s.t += dt;
      s.light.intensity = Math.max(0, s.peak * Math.exp(-s.t * 5.5));
    }
    this.shake = Math.max(0, this.shake - dt * 1.4);
    this.add.update(dt);
    this.smoke.update(dt);
  }
}
