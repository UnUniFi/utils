#!/bin/bash
if [ -z $SETUP_NODE_CONFIG_ENV ]; then
  echo "-----------------"
  echo "not setup env"
  echo "-----------------"
  CHAIN_ID=https://github.com/UnUniFi/chain
  MONIKER=ununifid_mnicker
  SEEDS=8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a@34.87.86.195:26656,543e0cab9c3016a0e99775443a17bcf163038912@34.150.156.78:26656;
  PEERS=98823087b61d442a4ab86998709c77b2e517ee78@35.240.152.216:26656,3ea84babead3d6bc488810a0f2cf0744cf5c68fe@34.86.22.251:26656,48f26a2c8d238b01124d49818c3bddba826c4356@136.243.5.247:58856,d047cfabdfd5e244af530d6d2101d07c45ff7424@165.22.167.234:41656,1a4af7cbd3db94a3881dc35cfa261ec2ac788f8f@91.246.64.247:26656,c1b93580023f12891683431e25fb05d6e4372bef@188.34.207.243:26656,2f62588be3cf41a019289097c2068c4e65aa5e37@95.217.213.135:26656,58ce8a2bd441057c0b18d0812f692b2d8af55af7@168.119.61.205:26656,570787c6484fb5aef9182f032dbd54042d93b93c@35.82.85.220:26656,cb777d12ec515884f9f8153e2bbe1844079323a4@44.234.200.116:26656,cacb630ef586ffefccf103d442c02bdbc187f996@3.37.82.201:26656,39d45dae55f36db42ef3997376efbbf725666f75@51.38.53.4:30656,70c542ec2e1aebb385f7e93d1c55f1a4073cdcb7@54.38.46.124:30656,d7e04f00e2701cb9b2c62a78b2e7bb3cdb165dfb@51.91.67.48:30656,96b1e7c754ef5a8f80be569a30de21f9675589c9@13.232.162.252:26656
  GENESIS_FILE_URL=https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json;
fi


$DAEMON_NAME init --chain-id $CHAIN_ID "$MONIKER";

if [ -z $SETUP_NODE_MASTER ]; then
# 
  echo "-----------------"
  echo "slave node setup env"
  echo "-----------------"

  sed -E -i "s/seeds = \".*\"/seeds = \"$SEEDS\"/" $DAEMON_HOME/config/config.toml;
  sed -E -i "s/persistent_peers = \".*\"/persistent_peers = \"$PEERS\"/" $DAEMON_HOME/config/config.toml;
  wget $GENESIS_FILE_URL -O $DAEMON_HOME/config/genesis.json;
else
  echo "-----------------"
  echo "master node setup env"
  echo "-----------------"

  $DAEMON_NAME keys mnemonic 2> mnt.txt
  $DAEMON_NAME keys mnemonic 2> faucet_mnt.txt
  $DAEMON_NAME keys add my_validator --recover < mnt.txt;
  $DAEMON_NAME keys add faucet --recover < faucet_mnt.txt;

  sed -i '/\[api\]/,+3 s/enable = false/enable = true/' ~/.ununifi/config/app.toml;
  sed -i '/\[api\]/,+24 s/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' ~/.ununifi/config/app.toml;
  sed -i 's/stake/uguu/g' ~/.ununifi/config/genesis.json;
  sed -i 's/minimum-gas-prices = ""/minimum-gas-prices = "0uguu"/' ~/.ununifi/config/app.toml;
  sed -i 's/mode = "full"/mode = "validator"/' ~/.ununifi/config/config.toml;
  sed -i 's/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' ~/.ununifi/config/app.toml;

  jq ".app_state.cdp.params.collateral_params =[{ \"auction_size\": \"50000000000\", \"conversion_factor\": \"6\", \"debt_limit\": { \"amount\": \"20000000000000\", \"denom\": \"jpu\" }, \"denom\": \"ubtc\", \"liquidation_market_id\": \"ubtc:jpy:30\", \"liquidation_penalty\": \"0.075000000000000000\", \"liquidation_ratio\": \"1.500000000000000000\", \"prefix\": 0, \"spot_market_id\": \"ubtc:jpy\", \"stability_fee\": \"1.000000001547125958\", \"type\": \"ubtc-a\", \"check_collateralization_index_count\": \"1000\", \"keeper_reward_percentage\": \"0.000001\" },{\"auction_size\": \"50000000000\", \"conversion_factor\": \"6\",\"debt_limit\": {\"amount\":\"20000000000000\",\"denom\": \"euu\" },\"denom\": \"ubtc\", \"liquidation_market_id\": \"ubtc:eur:30\",  \"liquidation_penalty\": \"0.075000000000000000\",  \"liquidation_ratio\": \"1.500000000000000000\",  \"prefix\": 1,  \"spot_market_id\": \"ubtc:eur\",  \"stability_fee\": \"1.000000001547125958\",  \"type\": \"ubtc-b\",  \"check_collateralization_index_count\": \"1000\", \"keeper_reward_percentage\": \"0.000001\"}]"  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
  jq ".app_state.cdp.params.debt_params[0].global_debt_limit.amount = \"200000000000000\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
  jq ".app_state.cdp.params.debt_params[1].global_debt_limit.amount = \"200000000000000\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
  jq ".app_state.pricefeed.params.markets = [{ \"market_id\": \"ubtc:jpy\", \"base_asset\": \"ubtc\", \"quote_asset\": \"jpy\", \"oracles\": [ \"`$DAEMON_NAME keys show my_validator -a`\" ], \"active\": true }, { \"market_id\": \"ubtc:jpy:30\", \"base_asset\": \"ubtc\", \"quote_asset\": \"jpy\", \"oracles\": [ \"`$DAEMON_NAME keys show my_validator -a`\" ], \"active\": true }, { \"market_id\": \"ubtc:eur\", \"base_asset\": \"ubtc\", \"quote_asset\": \"eur\", \"oracles\": [ \"`$DAEMON_NAME keys show my_validator -a`\" ], \"active\": true }, { \"market_id\": \"ubtc:eur:30\", \"base_asset\": \"ubtc\", \"quote_asset\": \"eur\", \"oracles\": [ \"`$DAEMON_NAME keys show my_validator -a`\" ], \"active\": true }]"  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
  jq ".app_state.gov.voting_params.voting_period = \"20s\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;

  $DAEMON_NAME add-genesis-account my_validator 100000000000uguu,100000000000ubtc;
  $DAEMON_NAME add-genesis-account faucet 500000000000uguu,5000000000ubtc,50000000000ueth;
  $DAEMON_NAME gentx my_validator 100000000uguu --chain-id $CHAIN_ID --keyring-backend test;
  $DAEMON_NAME collect-gentxs;
  # rm mnt.txt
fi


sudo systemctl enable cosmovisor
sudo systemctl start cosmovisor

