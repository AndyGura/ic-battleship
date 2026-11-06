# IC Battleship

A 2-player game on duel-game-core
(https://github.com/research-ag/duel-core): `src/BattleshipRules.mo`
holds the rules, `src/Host.mo` the host actor, `frontend/` the page.
Read `.claude/skills/duel-game-core/SKILL.md` before changing anything;
for a change to the live game, its `references/changing-a-live-game.md`.

## Live

Deployed through hosty.live (`.claude/skills/duel-game-core/references/going-live.md`).
The mainnet canisters are the live game; every approved change upgrades them
(`snapshotBeforeUpgrade` for the backend), never the preview copies.

| Canister | Id | Runs |
| -------- | -- | ---- |
| backend  | `7fkij-maaaa-aaaau-ahipq-cai` | the game (mainnet); the module store has it, verified |
| frontend | `2zrsm-hiaaa-aaaau-ahiqa-cai` | https://2zrsm-hiaaa-aaaau-ahiqa-cai.icp0.io/ (mainnet) |

Unlisted on the Duel dashboard until the owner registers the frontend there.

Preview copies on hosty.live's free cloud engine (not the live game; hosty.live may delete
them, and they can be deleted once the live game is registered): backend
`hw4b5-haaaa-aaacl-aaaea-cai`, frontend `hr5hj-kyaaa-aaacl-aaaeq-cai`.

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
