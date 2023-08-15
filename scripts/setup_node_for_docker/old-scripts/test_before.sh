#!/bin/bash

~/.ununifi/cosmovisor/current/bin/ununifid q bank denom-metadata
ununifid q params subspace wasm uploadAccess
ununifid q params subspace wasm instantiateAccess
