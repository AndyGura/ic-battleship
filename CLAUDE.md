# IC Battleship

A 2-player game on duel-game-core
(https://github.com/research-ag/duel-core): `src/BattleshipRules.mo`
holds the rules, `src/Host.mo` the host actor, `frontend/` the page.
Read `.claude/skills/duel-game-core/SKILL.md` before changing anything;
for a change to the live game, its `references/changing-a-live-game.md`.

## Live

**Nothing is deployed yet.** hosty.live's MCP server did not connect in the session
that built this (`.mcp.json` is in place; see the README, "Canisters"). When canisters
exist, list them here: backend, frontend, and whether each is the live game (mainnet)
or a free cloud engine test copy that hosty.live may delete.

## What the game runs

- Mode: `#turnBased` (setup is one `#place` action per seat, #p1 then #p2; a hit keeps the turn).
- Bot support (BOTS lines): none. Leaderboard: none. No bot canister.
- Setup time limit: 45 s countdown in the page (`PLACEMENT_SECONDS` in
  `frontend/src/game-ui.js`) that auto-places the fleet; server backstop is
  the claim-win window (`60_000_000_000` ns in `src/Host.mo`). Rules are pure: no clock.
- duel-game-core: vendored in `vendor/duel-game-core` (mops path dependency) and
  `@research-ag/duel-game-core` 0.4.1 (npm).

## Working here

- `mops test`; `cd frontend && npm run build && node play-test.mjs [<backend-id> [--ic]]`.
- If `icp network start` cannot fetch its launcher (github.com blocked):
  `icp build backend && node scripts/local-replica.mjs` (README).
- `icp build` needs `ic-wasm` on the PATH: `npm install -g @icp-sdk/ic-wasm`.
- Before upgrading the backend: `cd frontend && node check-upgrade.mjs <backend-id>` must exit 0.
- A change to `View`, `Action`, `Options` or the rules updates `SEMANTICS` in the same
  change, and `idlTypes` in `frontend/src/battleship-plugin.js`.
- The 3D scene is `frontend/src/scene.js` (+ `water.js`, `ships3d.js`, `fx.js`); the page
  exposes `window.__battleship = { scene, client, ui }` for browser tests.
