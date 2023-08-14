#!/bin/bash

cd /chain_repo2
git config --global --add safe.directory /chain_repo2
# git pull
# git checkout feature/prepare_upg_v1
make build -B
mkdir -p ~/.ununifi/cosmovisor/upgrades/v3/bin
# if exists ununifid, remove it
if [ -f ~/.ununifi/cosmovisor/upgrades/v3/bin/ununifid ]; then
    rm ~/.ununifi/cosmovisor/upgrades/v3/bin/ununifid
fi
cp ./build/ununifid ~/.ununifi/cosmovisor/upgrades/v3/bin
rm -rf ./build
