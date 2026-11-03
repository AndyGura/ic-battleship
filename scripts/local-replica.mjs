// Fallback for sessions where `icp network start` cannot download its
// network launcher (github.com blocked): runs a local replica with PocketIC
// (the engine inside that launcher) behind an HTTP gateway on :8000, creates
// the backend canister and installs the module `icp build backend` made.
//
//   cd scripts && npm install
//   (cd .. && icp build backend)
//   node local-replica.mjs            # prints the backend id, keeps running
//
// Then, in frontend/:  node play-test.mjs <backend-id>
// POCKET_IC_BIN defaults to the binary mops caches (installed on first run).

import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { PocketIc, PocketIcServer } from "@dfinity/pic";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
function findBin() {
  if (process.env.POCKET_IC_BIN) return process.env.POCKET_IC_BIN;
  const dir = resolve(homedir(), ".cache/mops/pocket-ic");
  if (!existsSync(dir)) {
    // installs the binary into the cache; undo the mops.toml pin it adds
    execSync("mops toolchain use pocket-ic 15.0.0 && git checkout mops.toml", { cwd: root, stdio: "inherit" });
  }
  const v = readdirSync(dir).sort().pop();
  return resolve(dir, v, "pocket-ic");
}
const binPath = findBin();
const wasm = resolve(root, ".icp/cache/artifacts/backend");
const port = Number(process.env.PORT ?? 8000);

const server = await PocketIcServer.start({ binPath, ttl: 24 * 3600 });
const pic = await PocketIc.create(server.getUrl());
await pic.makeLive({ httpGateway: { port } });
const canisterId = await pic.createCanister({ cycles: 100_000_000_000_000n });
await pic.installCode({ canisterId, wasm });
mkdirSync(resolve(root, ".icp"), { recursive: true });
writeFileSync(resolve(root, ".icp/local-backend-id"), canisterId.toText());
console.log(`replica on http://127.0.0.1:${port}`);
console.log(`backend ${canisterId.toText()}`);
process.on("SIGINT", async () => {
  await pic.tearDown();
  await server.stop();
  process.exit(0);
});
await new Promise(() => {});
