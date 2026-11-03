# IC Battleship

Classic 10x10 Battleship for two players on the Internet Computer, built on
[duel-game-core](https://github.com/research-ag/duel-core): a multi-table
lobby, seating, rematch, idle takeover and claim-win come from the framework;
this repository is the game on top of it.

- **Setup under the clock.** Each admiral deploys a fleet (carrier 5, battleship 4,
  cruiser 3, submarine 3, destroyer 2) on their own 10x10 grid, secretly. The page
  gives **45 seconds**; at zero it fills in the missing ships at random and sends the
  fleet. The server-side backstop is the engine's claim-win window (60 s): an admiral
  who has not deployed by then can have the win claimed against them. (The rules module
  is pure and cannot read a clock, so the limit cannot be stricter than that.)
- **Battle.** A coin toss picks who fires first. A miss passes the turn, **a hit
  keeps it**; a sunk ship is revealed. Sink all five enemy ships to win.
- **Style.** A 3D dusk storm at sea (Three.js): shader sea and sky, procedural ships,
  fire, smoke, shell flights, splashes, sinking wrecks, and slow ambient battle music
  with sound effects, all synthesised in the browser (no assets). 🔊 mutes it.

## Layout

| Path | What |
| --- | --- |
| `src/BattleshipRules.mo` | the rules: `State`, `Action`, `View`, `Options`, `spec` (`#turnBased`), `SEMANTICS` |
| `src/Host.mo` | the host actor (framework template; timeouts 90 s idle / 60 s claim) |
| `test/RulesUnit.test.mo` | unit tests of the rules |
| `frontend/src/battleship-plugin.js` | the `GamePlugin`: Candid types, `applyLocal`, `legalMoves` |
| `frontend/src/{scene,water,ships3d,fx}.js` | the 3D battlefield |
| `frontend/src/game-ui.js` | placement, firing, HUD over the headless duel client |
| `frontend/src/audio.js` | procedural music and effects |
| `frontend/play-test.mjs` | headless end-to-end test: two players play whole games |
| `frontend/check-upgrade.mjs` | checks an upgrade against the live backend before deploying it |
| `vendor/duel-game-core/` | the framework's Motoko package, vendored (not on mops.one yet) |
| `scripts/local-replica.mjs` | local replica fallback when `icp network start` cannot download its launcher |
| `.claude/skills/duel-game-core/` | the framework's skill: its `references/` describe every deploy route |

## Build and test

```bash
npm install -g @icp-sdk/icp-cli ic-mops @icp-sdk/ic-wasm   # once (icp build needs ic-wasm)
mops install && mops test                                  # rules tests
cd frontend && npm install && npm run build && cd ..       # frontend/dist
```

Local network and the end-to-end test:

```bash
icp network start -d
icp deploy                                  # backend and frontend, locally
cd frontend && node play-test.mjs           # whole games through the real client
```

`icp network start` downloads a network launcher from github.com. Where that is
blocked (some cloud sandboxes), use the PocketIC fallback instead:

```bash
icp build backend
(cd scripts && npm install)
node scripts/local-replica.mjs              # replica on :8000, prints the backend id
cd frontend && node play-test.mjs <backend-id>
```

## Update the game

1. Change the rules in `src/BattleshipRules.mo`; keep `SEMANTICS` in step with `View`,
   `Action` and `Options` (it is what third-party frontends are built from) and keep
   `frontend/src/battleship-plugin.js`'s `idlTypes` identical to the Candid shapes.
2. `mops test`, `npm run build`, `node play-test.mjs` as above.
3. Upgrading a running backend keeps its tables only if the stable types stay
   compatible: `cd frontend && node check-upgrade.mjs <backend-id>` must exit 0 first.
4. Install with a snapshot (`snapshotBeforeUpgrade`), upload the new `frontend/dist`.
   The canister ids never change; see `.claude/skills/duel-game-core/references/going-live.md`
   (hosty.live) or its icp-cli section.

## Putting it online

Everything on mainnet is created and installed through hosty.live (an Internet Identity
login and a balance, approved as a deploy session in the hosty.live web app); a Claude Code
cloud session never holds a key of its own. The free first look runs on hosty.live's
cloud engine, the live game on mainnet canisters (backend + frontend, about 2.5 TC).
The steps, with the exact tool calls, are in
`.claude/skills/duel-game-core/references/going-live.md`, section 3:

1. `icp build backend`, then install `.icp/cache/artifacts/backend` into the backend
   canister (`hosty_prepare_wasm_upload`).
2. `cd frontend && npm run build`, upload `dist` to the frontend canister with the
   canister variable `PUBLIC_CANISTER_ID:backend` set to the backend's id
   (`hosty_prepare_zip_upload`).
3. `cd frontend && node play-test.mjs <backend-id> --ic`.
4. List the frontend on the Duel dashboard (https://games.ic0.info/) when ready.

## Canisters

**Free test copies on hosty.live's cloud engine. Not the live game:** hosty.live may delete
them at its discretion, and the Duel dashboard will not list a game that runs on them.

| Canister | Id | Network |
| --- | --- | --- |
| backend | `hw4b5-haaaa-aaacl-aaaea-cai` | cloud engine (test) |
| frontend | `hr5hj-kyaaa-aaacl-aaaeq-cai` | cloud engine (test) |

Play: https://hr5hj-kyaaa-aaacl-aaaeq-cai.icp0.io/

Every change goes back into these canisters (backend upgrade with `snapshotBeforeUpgrade`,
page upload with `PUBLIC_CANISTER_ID:backend` set to the backend id). When the game goes
live, mainnet canisters are bought and their ids replace these and are marked as live.
