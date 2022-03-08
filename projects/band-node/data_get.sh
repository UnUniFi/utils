#!/bin/ash
set -eu
SYNC_FILES_URL=`curl https://quicksync.io/band.json|jq -r '.[] |select(.file=="laozi-mainnet-pruned")|.url'`
wget -O - $SYNC_FILES_URL | lz4 -d | tar -xvf -