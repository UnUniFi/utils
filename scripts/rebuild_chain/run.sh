#!/bin/bash
set -xe

sudo systemctl stop cosmovisor
cd ~/chain_repo
make install
rm ~/.ununifi/cosmovisor/genesis/bin/ununifi
cp ~/go/bin/ununifi $DAEMON_HOME/cosmovisor/genesis/bin
SCRIPT_DIR=$(cd $(dirname $0); pwd)
$SCRIPT_DIR/../reset_debug_node/run.sh
