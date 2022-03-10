#!/bin/ash
set -eu
if [ -d $HOME/.band/config ]; then
  bandd start
else
  CHAIN_ID=laozi-mainnet
  WALLET_NAME=my_validator
  MONIKER=band_test1;
  SEEDS=8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a@34.87.86.195:26656,543e0cab9c3016a0e99775443a17bcf163038912@34.150.156.78:26656
  GENESIS_FILE_URL=https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json
  BIN_FILES_URL=https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/files.tar.gz

  bandd init --chain-id $CHAIN_ID "$MONIKER"
  sed -E -i "s/seeds = \".*\"/seeds = \"$SEEDS\"/" $HOME/.band/config/config.toml
  sed -i '/\[api\]/,+3 s/enable = false/enable = true/' $HOME/.band/config/app.toml
  sed -E -i "s/enabled-unsafe-cors = false/enabled-unsafe-cors = true/" $HOME/.band/config/app.toml
  sed -E -i "s/pruning = \"default\"/pruning = \"everything\"/" $HOME/.band/config/app.toml
  wget $GENESIS_FILE_URL -O $HOME/.band/config/genesis.json
  wget -qO- $BIN_FILES_URL | tar xvz -C $HOME/.band/
  bandd keys add $WALLET_NAME --recover --keyring-backend test < mnt.txt

  # sync file setup
  # need 250GB disk space
  # cd $HOME/.band
  SYNC_FILES_URL=`curl https://quicksync.io/band.json|jq -r '.[] |select(.file=="laozi-mainnet-pruned")|.url'`
  wget -O - $SYNC_FILES_URL | lz4 -d | tar -xvf -
  cd $HOME/.band/config
  wget https://quicksync.io/addrbook.band.json
  bandd start
fi
