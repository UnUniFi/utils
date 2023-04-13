#!/bin/bash

# for debug
# set -xe

SCRIPT_DIR=$(cd $(dirname $0); pwd)
sudo systemctl stop cosmovisor
cd ~
# if ununifi.tar.gz exists, remove it
if [ -f ununifi.tar.gz ]; then
  rm ununifi.tar.gz
fi
tar -zcvf ununifi.tar.gz ./.ununifi

sudo systemctl start cosmovisor
