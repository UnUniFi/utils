#!/bin/bash
set -xe

sudo systemctl stop cosmovisor
cd ~/chain_repo
git pull
make install
# check file is exist rm file
if [ -f ~/.ununifi/cosmovisor/genesis/bin/ununifid ]; then
  rm ~/.ununifi/cosmovisor/genesis/bin/ununifid
fi
cp ~/go/bin/ununifid $DAEMON_HOME/cosmovisor/genesis/bin
SCRIPT_DIR=$(cd $(dirname $0); pwd)
# $SCRIPT_DIR/../reset_debug_node/run.sh

sudo systemctl start cosmovisor
