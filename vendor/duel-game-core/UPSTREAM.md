Vendored copy of the Motoko package in https://github.com/research-ag/duel-core
(directory `backend/`, commit fb6bf28cca2104a7f3704ef6f16cf3ffdc984700), Apache-2.0, unchanged.
It is vendored because the package is not on mops.one yet; once it is,
replace the path dependency in ../../mops.toml by `mops add duel-game-core`
and delete this directory.
