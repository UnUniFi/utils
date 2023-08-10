#!/bin/bash

~/.ununifi/cosmovisor/current/bin/ununifid q bank denom-metadata
~/.ununifi/cosmovisor/current/bin/ununifid q params subspace wasm uploadAccess
~/.ununifi/cosmovisor/current/bin/ununifid q params subspace wasm instantiateAccess
# ~/.ununifi/cosmovisor/current/bin/ununifid export --modules-to-export wasm|jq .
