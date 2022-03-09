#!/bin/ash
set -eu
if [ -d $HOME/.band/config ]; then
  bandd start
else
  CHAIN_ID=laozi-mainnet
  WALLET_NAME=my_validator
  MONIKER=band_test1;
  SEEDS=8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a@34.87.86.195:26656,543e0cab9c3016a0e99775443a17bcf163038912@34.150.156.78:26656
  PEERS=98823087b61d442a4ab86998709c77b2e517ee78@35.240.152.216:26656,3ea84babead3d6bc488810a0f2cf0744cf5c68fe@34.86.22.251:26656,48f26a2c8d238b01124d49818c3bddba826c4356@136.243.5.247:58856,d047cfabdfd5e244af530d6d2101d07c45ff7424@165.22.167.234:41656,1a4af7cbd3db94a3881dc35cfa261ec2ac788f8f@91.246.64.247:26656,c1b93580023f12891683431e25fb05d6e4372bef@188.34.207.243:26656,2f62588be3cf41a019289097c2068c4e65aa5e37@95.217.213.135:26656,58ce8a2bd441057c0b18d0812f692b2d8af55af7@168.119.61.205:26656,570787c6484fb5aef9182f032dbd54042d93b93c@35.82.85.220:26656,cb777d12ec515884f9f8153e2bbe1844079323a4@44.234.200.116:26656,cacb630ef586ffefccf103d442c02bdbc187f996@3.37.82.201:26656,39d45dae55f36db42ef3997376efbbf725666f75@51.38.53.4:30656,70c542ec2e1aebb385f7e93d1c55f1a4073cdcb7@54.38.46.124:30656,d7e04f00e2701cb9b2c62a78b2e7bb3cdb165dfb@51.91.67.48:30656,96b1e7c754ef5a8f80be569a30de21f9675589c9@13.232.162.252:26656
  GENESIS_FILE_URL=https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json
  BIN_FILES_URL=https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/files.tar.gz

  bandd init --chain-id $CHAIN_ID "$MONIKER"
  sed -E -i "s/seeds = \".*\"/seeds = \"$SEEDS\"/" $HOME/.band/config/config.toml
  sed -i '/\[api\]/,+3 s/enable = false/enable = true/' $HOME/.band/config/app.toml
  sed -E -i "s/enabled-unsafe-cors = false/enabled-unsafe-cors = true/" $HOME/.band/config/app.toml
  wget $GENESIS_FILE_URL -O $HOME/.band/config/genesis.json
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
