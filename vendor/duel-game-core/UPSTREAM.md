Vendored copy of the Motoko package in https://github.com/research-ag/duel-core
(directory `backend/`, commit cd3f16374f3613b5486a464ed18a3ee57c9606aa, main after "sweep timer reviving logic (#57)"), Apache-2.0, unchanged.
It is vendored because the package is not on mops.one yet; once it is,
replace the path dependency in ../../mops.toml by `mops add duel-game-core`
and delete this directory.
