// Procedural sound for IC Battleship: slow, epic, ambient battle music and
// every effect are synthesised with the Web Audio API — no audio files.
// The context starts on the first user gesture (browser autoplay rules).

const STORE_KEY = "ic-battleship-muted";

// D minor, slow: pad chords as MIDI notes, in a 4-chord loop.
const CHORDS = [
  [38, 45, 50, 53, 57], // Dm
  [34, 41, 46, 50, 53], // Bb
  [31, 38, 43, 46, 50], // Gm
  [33, 40, 45, 49, 52], // A
];
const MOTIF = [62, 65, 69, 67, 65, 62, 64, 57, 60, 62, 65, 69, 72, 69, 67, 65]; // sparse horn line
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

let ctx = null;
let master = null;
let musicBus = null;
let sfxBus = null;
let reverb = null;
let muted = false;
let started = false;
let intensity = 0; // 0 lobby/placement, 1 battle
let chordIdx = 0;
let nextChordAt = 0;
let nextDrumAt = 0;
let drumStep = 0;
let motifIdx = 0;
let nextMotifAt = 0;
let timer = null;
let noiseBuf = null;

try {
  muted = localStorage.getItem(STORE_KEY) === "1";
} catch {
  /* storage can be unavailable */
}

function makeNoise(seconds) {
  const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
  const d = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < d.length; i++) {
    const white = Math.random() * 2 - 1;
    // cheap pink-ish noise
    b0 = 0.99765 * b0 + white * 0.099046;
    b1 = 0.963 * b1 + white * 0.2965164;
    b2 = 0.57 * b2 + white * 1.0526913;
    d[i] = (b0 + b1 + b2 + white * 0.1848) * 0.2;
  }
  return buf;
}

function makeImpulse(seconds, decay) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = buf.getChannelData(c);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return buf;
}

function init() {
  if (ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = muted ? 0 : 0.9;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -16;
  comp.ratio.value = 4;
  master.connect(comp).connect(ctx.destination);

  reverb = ctx.createConvolver();
  reverb.buffer = makeImpulse(4.2, 2.6);
  const wet = ctx.createGain();
  wet.gain.value = 0.55;
  reverb.connect(wet).connect(master);

  musicBus = ctx.createGain();
  musicBus.gain.value = 0.55;
  musicBus.connect(master);
  musicBus.connect(reverb);

  sfxBus = ctx.createGain();
  sfxBus.gain.value = 0.9;
  sfxBus.connect(master);
  const sfxSend = ctx.createGain();
  sfxSend.gain.value = 0.35;
  sfxBus.connect(sfxSend).connect(reverb);

  noiseBuf = makeNoise(4);
  startSea();
  nextChordAt = ctx.currentTime + 0.2;
  nextDrumAt = ctx.currentTime + 2;
  nextMotifAt = ctx.currentTime + 7;
  timer = setInterval(schedule, 250);
}

// The sea: looping noise through a slowly breathing low-pass.
function startSea() {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  src.loop = true;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 420;
  const g = ctx.createGain();
  g.gain.value = 0.35;
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.11;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 220;
  lfo.connect(lfoGain).connect(lp.frequency);
  const lfo2 = ctx.createOscillator();
  lfo2.frequency.value = 0.07;
  const lfo2Gain = ctx.createGain();
  lfo2Gain.gain.value = 0.15;
  lfo2.connect(lfo2Gain).connect(g.gain);
  src.connect(lp).connect(g).connect(musicBus);
  src.start();
  lfo.start();
  lfo2.start();
}

function pad(notes, t, dur) {
  const f = ctx.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.setValueAtTime(380 + 700 * intensity, t);
  f.frequency.linearRampToValueAtTime(900 + 1400 * intensity, t + dur * 0.5);
  f.frequency.linearRampToValueAtTime(380 + 700 * intensity, t + dur);
  f.Q.value = 0.7;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.09, t + dur * 0.35);
  g.gain.linearRampToValueAtTime(0.0001, t + dur + 2.5);
  f.connect(g).connect(musicBus);
  for (const n of notes) {
    for (const det of [-7, 7]) {
      const o = ctx.createOscillator();
      o.type = n < 45 ? "sawtooth" : "triangle";
      o.frequency.value = midi(n);
      o.detune.value = det;
      o.connect(f);
      o.start(t);
      o.stop(t + dur + 2.7);
    }
  }
}

function drum(t, vel) {
  const o = ctx.createOscillator();
  o.type = "sine";
  o.frequency.setValueAtTime(110, t);
  o.frequency.exponentialRampToValueAtTime(42, t + 0.35);
  const g = ctx.createGain();
  g.gain.setValueAtTime(vel, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
  o.connect(g).connect(musicBus);
  o.start(t);
  o.stop(t + 1.2);
  const n = ctx.createBufferSource();
  n.buffer = noiseBuf;
  const nf = ctx.createBiquadFilter();
  nf.type = "lowpass";
  nf.frequency.value = 500;
  const ng = ctx.createGain();
  ng.gain.setValueAtTime(vel * 0.7, t);
  ng.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
  n.connect(nf).connect(ng).connect(musicBus);
  n.start(t, Math.random() * 2);
  n.stop(t + 0.3);
}

function horn(note, t, dur) {
  const f = ctx.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.setValueAtTime(500, t);
  f.frequency.linearRampToValueAtTime(1500, t + dur * 0.4);
  f.frequency.linearRampToValueAtTime(500, t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.1, t + 0.9);
  g.gain.linearRampToValueAtTime(0.0001, t + dur);
  f.connect(g).connect(musicBus);
  for (const det of [-5, 5]) {
    const o = ctx.createOscillator();
    o.type = "sawtooth";
    o.frequency.value = midi(note);
    o.detune.value = det;
    o.connect(f);
    o.start(t);
    o.stop(t + dur + 0.1);
  }
}

function schedule() {
  if (!ctx || ctx.state !== "running") return;
  const now = ctx.currentTime;
  while (nextChordAt < now + 1.5) {
    pad(CHORDS[chordIdx % CHORDS.length], nextChordAt, 8);
    chordIdx++;
    nextChordAt += 8;
  }
  // A slow march: a heavy hit every 4 s, an echo on the third beat in battle.
  while (nextDrumAt < now + 1.5) {
    const beat = drumStep % 4;
    if (beat === 0) drum(nextDrumAt, 0.5 + 0.3 * intensity);
    else if (beat === 2 && intensity > 0.3) drum(nextDrumAt, 0.25 + 0.2 * intensity);
    else if (beat === 3 && intensity > 0.7) drum(nextDrumAt, 0.14);
    drumStep++;
    nextDrumAt += 2;
  }
  while (nextMotifAt < now + 1.5) {
    horn(MOTIF[motifIdx % MOTIF.length], nextMotifAt, 6);
    motifIdx++;
    nextMotifAt += 8 * (motifIdx % 2 ? 1 : 2);
  }
}

// ── effects ─────────────────────────────────────────────────────────────
function noiseBurst({ t, dur, f0, f1, type = "lowpass", gain, q = 0.7 }) {
  const n = ctx.createBufferSource();
  n.buffer = noiseBuf;
  const f = ctx.createBiquadFilter();
  f.type = type;
  f.Q.value = q;
  f.frequency.setValueAtTime(f0, t);
  f.frequency.exponentialRampToValueAtTime(Math.max(f1, 20), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  n.connect(f).connect(g).connect(sfxBus);
  n.start(t, Math.random() * 2);
  n.stop(t + dur + 0.05);
}

function tone({ t, dur, f0, f1, type = "sine", gain }) {
  const o = ctx.createOscillator();
  o.type = type;
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(Math.max(f1, 20), t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(sfxBus);
  o.start(t);
  o.stop(t + dur + 0.05);
}

const fx = {
  cannon() {
    const t = ctx.currentTime;
    tone({ t, dur: 0.7, f0: 130, f1: 35, gain: 0.9 });
    noiseBurst({ t, dur: 0.9, f0: 2400, f1: 80, gain: 0.8 });
  },
  whistle(dur = 1) {
    const t = ctx.currentTime;
    tone({ t, dur, f0: 2200, f1: 650, type: "triangle", gain: 0.05 });
  },
  splash() {
    const t = ctx.currentTime;
    noiseBurst({ t, dur: 0.9, f0: 3000, f1: 500, type: "bandpass", gain: 0.7, q: 0.5 });
    tone({ t, dur: 0.35, f0: 220, f1: 70, gain: 0.35 });
  },
  explosion() {
    const t = ctx.currentTime;
    noiseBurst({ t, dur: 1.6, f0: 3200, f1: 60, gain: 1.0 });
    tone({ t, dur: 1.2, f0: 90, f1: 28, gain: 1.0 });
    noiseBurst({ t: t + 0.12, dur: 0.9, f0: 1200, f1: 100, type: "bandpass", gain: 0.4, q: 0.4 });
  },
  sink() {
    const t = ctx.currentTime;
    tone({ t, dur: 3.4, f0: 220, f1: 32, type: "sawtooth", gain: 0.22 });
    noiseBurst({ t, dur: 3.2, f0: 1600, f1: 80, gain: 0.5 });
    for (let i = 0; i < 9; i++) {
      tone({ t: t + 0.3 + i * 0.28, dur: 0.12, f0: 500 + Math.random() * 700, f1: 160, gain: 0.08 });
    }
  },
  thunder() {
    const t = ctx.currentTime;
    noiseBurst({ t, dur: 3.6, f0: 380, f1: 40, gain: 0.55 });
    tone({ t, dur: 2.8, f0: 60, f1: 26, gain: 0.35 });
  },
  place() {
    const t = ctx.currentTime;
    tone({ t, dur: 0.18, f0: 260, f1: 90, type: "triangle", gain: 0.5 });
    noiseBurst({ t, dur: 0.1, f0: 4000, f1: 800, gain: 0.25 });
  },
  tick() {
    tone({ t: ctx.currentTime, dur: 0.08, f0: 880, f1: 660, type: "square", gain: 0.05 });
  },
  lock() {
    const t = ctx.currentTime;
    tone({ t, dur: 0.12, f0: 740, f1: 740, type: "square", gain: 0.06 });
    tone({ t: t + 0.12, dur: 0.18, f0: 1100, f1: 1100, type: "square", gain: 0.06 });
  },
  victory() {
    const t = ctx.currentTime;
    [50, 57, 62, 66, 69, 74].forEach((n, i) => {
      const o = ctx.createOscillator();
      o.type = "sawtooth";
      o.frequency.value = midi(n);
      const f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = 1800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.18);
      g.gain.linearRampToValueAtTime(0.12, t + i * 0.18 + 0.4);
      g.gain.exponentialRampToValueAtTime(0.001, t + 6);
      o.connect(f).connect(g).connect(sfxBus);
      o.start(t + i * 0.18);
      o.stop(t + 6.2);
    });
  },
  defeat() {
    const t = ctx.currentTime;
    [50, 53, 57].forEach((n, i) => {
      const o = ctx.createOscillator();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(midi(n), t);
      o.frequency.exponentialRampToValueAtTime(midi(n - 5), t + 5);
      const f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = 500;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.3);
      g.gain.linearRampToValueAtTime(0.14, t + i * 0.3 + 0.6);
      g.gain.exponentialRampToValueAtTime(0.001, t + 6);
      o.connect(f).connect(g).connect(sfxBus);
      o.start(t + i * 0.3);
      o.stop(t + 6.2);
    });
    drum(t, 0.7);
  },
};

export const audio = {
  /** Call from a user gesture; safe to call repeatedly. */
  start() {
    try {
      init();
      if (ctx && ctx.state === "suspended") ctx.resume();
      started = true;
    } catch (e) {
      console.warn("audio unavailable", e);
    }
  },
  /** 0 = calm (lobby, placing) … 1 = battle. */
  setIntensity(v) {
    intensity = v;
  },
  play(name, ...args) {
    if (!started || !ctx || ctx.state !== "running" || muted) return;
    try {
      fx[name]?.(...args);
    } catch (e) {
      console.warn("sfx failed", name, e);
    }
  },
  get muted() {
    return muted;
  },
  setMuted(m) {
    muted = m;
    try {
      localStorage.setItem(STORE_KEY, m ? "1" : "0");
    } catch {
      /* ignore */
    }
    if (master) master.gain.setTargetAtTime(m ? 0 : 0.9, ctx.currentTime, 0.1);
  },
};

if (typeof window !== "undefined") {
  const unlock = () => audio.start();
  window.addEventListener("pointerdown", unlock, { passive: true });
  window.addEventListener("keydown", unlock);
}
