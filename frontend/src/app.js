// Bootstrap for IC Battleship: build the actor and transport, hand
// off to duel-game-core's generic wiring. Bundled by esbuild (../build.js)
// into dist/app.js, so every import resolves from node_modules at build
// time. The lines marked BOTS or LEADERBOARD go with the Host's lines of
// the same name, and index.html's.

import { Actor, HttpAgent } from "@icp-sdk/core/agent";
import { safeGetCanisterEnv } from "@icp-sdk/core/agent/canister-env";
import { makeIdlFactory } from "@research-ag/duel-game-core/idl.js";
import { start } from "@research-ag/duel-game-core/app.js";
// import { botPlayer, mountBotChallenge, mountLeaderboard } from "@research-ag/duel-game-core/bots.js"; // BOTS, LEADERBOARD
import { connectTransport } from "@research-ag/duel-game-core/transport.js";
import { resolveAnonymousIdentity } from "@research-ag/duel-game-core/anon-identity.js";
import { deriveHost } from "@research-ag/duel-game-core/ic-env.js";
import { plugin } from "./battleship-plugin.js";
import { BattleScene } from "./scene.js";
import { mountBattleUI } from "./game-ui.js";

const env = safeGetCanisterEnv();
const canisterId = env?.["PUBLIC_CANISTER_ID:backend"];
if (!canisterId) {
  document.body.innerHTML =
    "<p style='color:#ff7b72;padding:2rem'>Could not find " +
    "<code>PUBLIC_CANISTER_ID:backend</code> in the <code>ic_env</code> " +
    "cookie. Serve this page from its frontend canister, with that " +
    "canister environment variable set to the backend's id.</p>";
  throw new Error("missing canister id");
}

const host = deriveHost();
// The same identity must build the agent and sign the transport calls;
// the backend checks the two match on every request.
const session = resolveAnonymousIdentity();
const agent = await HttpAgent.create({
  host,
  identity: session.identity,
  rootKey: env.IC_ROOT_KEY,
});
const idlFactory = makeIdlFactory(plugin.idlTypes);
const actor = Actor.createActor(idlFactory, { agent, canisterId });

const transport = connectTransport({ actor, gameIdlTypes: plugin.idlTypes });

// The 3D battlefield lives behind the page chrome for the whole visit: the
// sea is the lobby's backdrop, then the board of every game.
const scene = new BattleScene(document.body);
if (!scene.ok) {
  const err = document.getElementById("error");
  err.hidden = false;
  err.textContent = "This game needs WebGL, which your browser or device has turned off.";
}

const client = start({ plugin, transport, session });
const ui = mountBattleUI({ client, plugin, scene });
// handle for browser tests and debugging
window.__battleship = { scene, client, ui };

// BOTS: "Add Bot" on the waiting screen and the "🤖 Bots" dialog.
// const bots = mountBotChallenge({ client, actor, plugin, play: botPlayer(agent, canisterId) });
// LEADERBOARD: the 🏆 overlay, one line of the two.
// mountLeaderboard({ actor, plugin, sid: session.sid, onChallenge: bots.pick }); // with BOTS
// mountLeaderboard({ actor, plugin, sid: session.sid }); // without
