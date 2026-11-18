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
  `@research-ag/duel-game-core` 0.5.1 (npm; invite links come from it). The vendored Motoko
  package is duel-core `main` at cd3f163 (lazy sweep timer, invite clocks): see `vendor/duel-game-core/UPSTREAM.md`.
- Host `env` carries `sweeper = Transport.sweeper()` (transient): the sweep timer runs only while a
  table or a waiting player exists. After a deploy, `canister_version` in `/metrics` stays flat while
  nobody plays. Keep the backend above 1 TC: with 256 MiB of memory its timer stalls near 0.48 TC.

## Deploying without the upload token

`hosty_prepare_*` + curl needs the proxy's hosty.live token to be valid; if it answers `401 Invalid or
revoked API token`, install without it: commit the built module (and `frontend/dist` as `deploy/dist`)
under `deploy/`, then `hosty_install_wasm_url` (raw GitHub URL pinned to the commit; `mode: upgrade`,
`snapshotBeforeUpgrade: true`) for the backend and `hosty_deploy_url` (the commit's archive, `pureAssets`,
`outputDir: ic-battleship-<sha>/deploy/dist`) for the page; remove `deploy/` afterwards. If the page deploy
reports FAILED with "Canister 6aeum-… is out of cycles" (hosty's own bookkeeping), check the live
`app.js` hash before retrying: the assets may already be live. The frontend canister's builder access
may need `hosty_setup_frontend_canister` first (it wipes nothing on an asset canister).

## Working here

- `mops test`; `cd frontend && npm run build && node play-test.mjs [<backend-id> [--ic]]`.
- If `icp network start` cannot fetch its launcher (github.com blocked):
  `icp build backend && node scripts/local-replica.mjs` (README).
- `icp build` needs `ic-wasm` on the PATH: `npm install -g @icp-sdk/ic-wasm`.
- Before upgrading the backend: `cd frontend && node check-upgrade.mjs <backend-id>` must exit 0
  (its wasm section reader is our own: Node's `WebAssembly.Module` rejects the module). If it fails, ask the owner first.
- A change to `View`, `Action`, `Options` or the rules updates `SEMANTICS` in the same
  change, and `idlTypes` in `frontend/src/battleship-plugin.js`.
- The 3D scene is `frontend/src/scene.js` (+ `water.js`, `ships3d.js`, `fx.js`); the page
  exposes `window.__battleship = { scene, client, ui }` for browser tests.
