// Sky dome, shader sea and the tactical grid overlay. The wave function
// exists twice — in GLSL for the sea and in JS (`waveH`) for ships bobbing
// on it — generated from one table so that they always agree.

import * as THREE from "three";

export const BOARD_X = 9; // boards sit at x = -BOARD_X (own) and +BOARD_X (enemy)
export const SUN_DIR = new THREE.Vector3(-0.55, 0.16, -0.82).normalize();

const WAVES = [
  { dx: 1.0, dz: 0.3, a: 0.1, k: 0.55, s: 0.9 },
  { dx: -0.4, dz: 1.0, a: 0.07, k: 0.9, s: 1.1 },
  { dx: 0.7, dz: -0.7, a: 0.04, k: 1.7, s: 1.6 },
  { dx: -0.9, dz: -0.3, a: 0.025, k: 3.1, s: 2.0 },
].map((w) => {
  const n = Math.hypot(w.dx, w.dz);
  return { ...w, dx: w.dx / n, dz: w.dz / n };
});

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// Calmer water around the boards so the grid reads clearly.
function calm(x, z) {
  const d = Math.min(
    Math.max(Math.abs(x + BOARD_X), Math.abs(z)),
    Math.max(Math.abs(x - BOARD_X), Math.abs(z)),
  );
  return 0.35 + 0.65 * smooth(6.5, 10, d);
}

/** Sea surface height at world (x, z), time t seconds. */
export function waveH(x, z, t) {
  let h = 0;
  for (const w of WAVES) h += w.a * Math.sin(w.k * (w.dx * x + w.dz * z) + w.s * t);
  return h * calm(x, z);
}

const f = (n) => n.toFixed(5);
const GLSL_WAVES = WAVES.map(
  (w) => `h += ${f(w.a)} * sin(${f(w.k)} * (${f(w.dx)} * p.x + ${f(w.dz)} * p.y) + ${f(w.s)} * t);`,
).join("\n  ");

const GLSL_COMMON = /* glsl */ `
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1,0)), f.x), mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
}
float fbm(vec2 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return s;
}
uniform vec3 uSunDir;
// Dusk sky without clouds: also what the sea reflects.
vec3 skyBase(vec3 d){
  float e = clamp(d.y, -0.2, 1.0);
  float sunAmt = max(dot(d, uSunDir), 0.0);
  vec3 zenith = vec3(0.012, 0.03, 0.07);
  vec3 mid = vec3(0.12, 0.13, 0.2);
  vec3 horizon = vec3(0.55, 0.26, 0.17);
  vec3 col = mix(horizon, mid, smoothstep(0.0, 0.22, e));
  col = mix(col, zenith, smoothstep(0.15, 0.85, e));
  col += vec3(1.0, 0.42, 0.14) * pow(sunAmt, 6.0) * 0.55;
  col += vec3(1.0, 0.7, 0.4) * pow(sunAmt, 60.0) * 0.9;
  return col;
}
`;

// ── sky ────────────────────────────────────────────────────────────────
export function makeSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { uTime: { value: 0 }, uSunDir: { value: SUN_DIR }, uFlash: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * p;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vDir;
      uniform float uTime;
      uniform float uFlash;
      ${GLSL_COMMON}
      void main(){
        vec3 d = normalize(vDir);
        vec3 col = skyBase(d);
        float sunAmt = max(dot(d, uSunDir), 0.0);
        col += vec3(1.0, 0.85, 0.6) * smoothstep(0.9993, 0.9999, sunAmt) * 4.0;
        // layered storm clouds on a projected plane
        if (d.y > 0.0){
          vec2 uv = d.xz / (d.y + 0.18) * 0.7 + vec2(uTime * 0.012, uTime * 0.006);
          float c = fbm(uv * 1.3);
          float c2 = fbm(uv * 2.8 + 4.0);
          float cover = smoothstep(0.38, 0.78, c * 0.75 + c2 * 0.35);
          float lit = pow(sunAmt, 3.0);
          vec3 cloud = mix(vec3(0.05, 0.06, 0.1), vec3(0.28, 0.2, 0.2), c2);
          cloud += vec3(1.0, 0.45, 0.15) * lit * (1.0 - c * 0.6) * 1.1;
          cloud += vec3(0.5, 0.6, 1.0) * uFlash * (0.4 + c);
          col = mix(col, cloud, cover * smoothstep(0.0, 0.18, d.y) * 0.9);
        }
        col += vec3(0.5, 0.6, 1.0) * uFlash * 0.25;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), mat);
  mesh.renderOrder = -10;
  mesh.frustumCulled = false;
  return mesh;
}

// ── sea ────────────────────────────────────────────────────────────────
export function makeSea() {
  const uniforms = {
    uTime: { value: 0 },
    uSunDir: { value: SUN_DIR },
    uBoards: { value: [new THREE.Vector2(-BOARD_X, 0), new THREE.Vector2(BOARD_X, 0)] },
    uFlat: { value: 0 },
    uFlash: { value: 0 },
  };
  const vertexShader = /* glsl */ `
    uniform float uTime;
    uniform float uFlat;
    uniform vec2 uBoards[2];
    varying vec3 vWorld;
    varying vec3 vN;
    varying float vH;
    float calm(vec2 p){
      float d = min(max(abs(p.x - uBoards[0].x), abs(p.y - uBoards[0].y)),
                    max(abs(p.x - uBoards[1].x), abs(p.y - uBoards[1].y)));
      return 0.35 + 0.65 * smoothstep(6.5, 10.0, d);
    }
    float height(vec2 p, float t){
      float h = 0.0;
      ${GLSL_WAVES}
      float edge = 1.0 - smoothstep(30.0, 42.0, length(p));
      return h * calm(p) * edge * (1.0 - uFlat);
    }
    void main(){
      vec4 w = modelMatrix * vec4(position, 1.0);
      vec2 p = w.xz;
      float t = uTime;
      float h0 = height(p, t);
      float e = 0.12;
      float hx = height(p + vec2(e, 0.0), t);
      float hz = height(p + vec2(0.0, e), t);
      w.y += h0;
      vWorld = w.xyz;
      vH = h0;
      vN = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
      gl_Position = projectionMatrix * viewMatrix * w;
    }`;
  const fragmentShader = /* glsl */ `
    uniform float uTime;
    uniform float uFlash;
    varying vec3 vWorld;
    varying vec3 vN;
    varying float vH;
    ${GLSL_COMMON}
    void main(){
      vec3 V = normalize(cameraPosition - vWorld);
      // fine ripples: two scrolling noise octaves bend the normal
      vec2 q = vWorld.xz;
      float n1 = fbm(q * 1.7 + vec2(uTime * 0.25, uTime * 0.18));
      float n2 = fbm(q * 3.9 - vec2(uTime * 0.31, uTime * 0.12));
      vec3 N = normalize(vN + vec3(n1 - 0.5, 0.0, n2 - 0.5) * 0.35);
      float ndv = max(dot(N, V), 0.0);
      float fres = 0.03 + 0.97 * pow(1.0 - ndv, 4.2);
      vec3 R = reflect(-V, N);
      R.y = abs(R.y);
      vec3 refl = skyBase(R);
      vec3 deep = vec3(0.004, 0.025, 0.04);
      vec3 shallow = vec3(0.02, 0.12, 0.15);
      vec3 body = mix(deep, shallow, smoothstep(-0.12, 0.2, vH) * 0.8 + n1 * 0.2);
      vec3 col = mix(body, refl, clamp(fres, 0.0, 1.0));
      vec3 H = normalize(uSunDir + V);
      col += vec3(1.0, 0.55, 0.25) * pow(max(dot(N, H), 0.0), 400.0) * 3.0;
      float foam = smoothstep(0.1, 0.19, vH + (n2 - 0.5) * 0.05);
      col = mix(col, vec3(0.65, 0.7, 0.75), foam * 0.35);
      col += vec3(0.4, 0.5, 0.9) * uFlash * 0.2;
      // distance fog towards the horizon colour
      float dist = length(cameraPosition - vWorld);
      vec3 fogCol = skyBase(normalize(vec3(V.x * -1.0, 0.0, V.z * -1.0)));
      float fog = 1.0 - exp(-pow(dist * 0.012, 1.7));
      col = mix(col, fogCol, clamp(fog, 0.0, 1.0));
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`;
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
  const farMat = mat.clone();
  farMat.uniforms = THREE.UniformsUtils.clone(uniforms);
  farMat.uniforms.uSunDir = uniforms.uSunDir;
  farMat.uniforms.uFlat.value = 1;

  const group = new THREE.Group();
  const near = new THREE.Mesh(new THREE.PlaneGeometry(90, 90, 360, 360).rotateX(-Math.PI / 2), mat);
  near.frustumCulled = false;
  const far = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200, 1, 1).rotateX(-Math.PI / 2), farMat);
  far.position.y = -0.06;
  far.frustumCulled = false;
  group.add(far, near);
  group.userData.tick = (t, flash) => {
    mat.uniforms.uTime.value = t;
    farMat.uniforms.uTime.value = t;
    mat.uniforms.uFlash.value = flash;
    farMat.uniforms.uFlash.value = flash;
  };
  return group;
}

// ── tactical grid ──────────────────────────────────────────────────────
function gridLabels() {
  const c = document.createElement("canvas");
  c.width = c.height = 1024;
  const g = c.getContext("2d");
  g.clearRect(0, 0, 1024, 1024);
  g.fillStyle = "#e9d9a8";
  g.font = "bold 44px 'Trebuchet MS', Verdana, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  const u = 1024 / 12;
  for (let i = 0; i < 10; i++) {
    g.fillText("ABCDEFGHIJ"[i], (i + 1.5) * u, u * 0.5);
    g.fillText("ABCDEFGHIJ"[i], (i + 1.5) * u, u * 11.5);
    g.fillText(String(i + 1), u * 0.5, (i + 1.5) * u);
    g.fillText(String(i + 1), u * 11.5, (i + 1.5) * u);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

let labelTex = null;

/** A 12x12 plane (10x10 cells plus a labelled margin); `own` tints it blue, else red. */
export function makeGrid(own) {
  labelTex ??= gridLabels();
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTex: { value: labelTex },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(own ? 0x58c8ff : 0xff6a4a) },
      uActive: { value: 1 },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv;
      uniform sampler2D uTex;
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uActive;
      void main(){
        vec2 g = vUv * 12.0 - 1.0;            // 0..10 across the 10x10 field
        vec2 gc = g - 5.0;
        bool inside = g.x > 0.0 && g.y > 0.0 && g.x < 10.0 && g.y < 10.0;
        vec2 fw = fwidth(g);
        vec2 d = abs(fract(g - 0.5) - 0.5) / max(fw, vec2(1e-4));
        float line = 1.0 - min(min(d.x, d.y), 1.0);
        vec2 b = min(g, 10.0 - g) / max(fw, vec2(1e-4));
        float border = 1.0 - clamp(min(b.x, b.y) - 1.0, 0.0, 1.0);
        float ang = atan(gc.y, gc.x);
        float sweep = pow(max(0.0, cos(ang - uTime * 0.9)), 24.0) * smoothstep(8.0, 1.0, length(gc));
        float a = 0.0;
        vec3 col = uColor;
        if (inside){
          a = 0.07 + line * 0.34 + border * 0.5 + sweep * 0.22 * uActive;
          col = mix(col, vec3(1.0), border * 0.3);
        }
        vec4 lab = texture2D(uTex, vUv);
        col = mix(col, lab.rgb, lab.a);
        a = max(a, lab.a * 0.85);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(12, 12).rotateX(-Math.PI / 2), mat);
  mesh.renderOrder = 2;
  return mesh;
}
