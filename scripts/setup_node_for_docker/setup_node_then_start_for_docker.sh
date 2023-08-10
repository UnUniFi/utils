#!/bin/bash

# if exists dir ~/.ununifi, then remove it
if [ -d ~/.ununifi/config ]; then
  echo "remove ~/.ununifi"
  rm -rf ~/.ununifi/config
  rm -rf ~/.ununifi/data
  rm -rf ~/.ununifi/keyring-test
  rm -rf ~/.ununifi/wasm
  rm -rf ~/.ununifi/cosmovisor/upgrades

  # if exists symbol ~/.ununifi/cosmovisor/current, then remove it
  rm ~/.ununifi/cosmovisor/current
  # if [ -f ~/.ununifi/cosmovisor/current ]; then
  # fi
fi

SCRIPT_DIR=$(cd $(dirname $0); pwd)
VAL_MNEMONIC_1="figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance"
FAUCET_MNEMONIC_1="chimney diesel tone pipe mouse detect vibrant video first jewel vacuum winter grant almost trim crystal similar giraffe dizzy hybrid trigger muffin awake leader"
USER_MNEMONIC_1="supply release type ostrich rib inflict increase bench wealth course enter pond spare neutral exact retire thing update inquiry atom health number lava taste"
VAL1=val
FAUCET=faucet
USER1=user1

MONIKER=my_machine
$DAEMON_NAME init --chain-id $CHAIN_ID "$MONIKER";

# wget https://raw.githubusercontent.com/UnUniFi/network/main/test/genesis-mainnet-mock.json  -O  ~/.ununifi/config/genesis.json;
# sed -i "s/ununifi-upgrade-test-v1/$CHAIN_ID/" ~/.ununifi/config/genesis.json;

echo $VAL_MNEMONIC_1    | $DAEMON_NAME keys add $VAL1  --recover --keyring-backend=test
echo $FAUCET_MNEMONIC_1 | $DAEMON_NAME keys add $FAUCET --recover --keyring-backend=test
echo $USER_MNEMONIC_1   | $DAEMON_NAME keys add $USER1 --recover --keyring-backend=test

sed -i '/\[api\]/,+3 s/enable = false/enable = true/' ~/.ununifi/config/app.toml;
sed -i '/\[api\]/,+24 s/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' ~/.ununifi/config/app.toml;
sed -i 's/stake/uguu/g' ~/.ununifi/config/genesis.json;
sed -i 's/minimum-gas-prices = ""/minimum-gas-prices = "0uguu"/' ~/.ununifi/config/app.toml;
sed -i 's/mode = "full"/mode = "validator"/' ~/.ununifi/config/config.toml;
sed -i 's/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' ~/.ununifi/config/app.toml;

jq ".app_state.cdp.params.collateral_params =[{ \"auction_size\": \"50000000000\", \"conversion_factor\": \"6\", \"debt_limit\": { \"amount\": \"20000000000000\", \"denom\": \"jpu\" }, \"denom\": \"ubtc\", \"liquidation_market_id\": \"ubtc:jpy:30\", \"liquidation_penalty\": \"0.075000000000000000\", \"liquidation_ratio\": \"1.500000000000000000\", \"prefix\": 0, \"spot_market_id\": \"ubtc:jpy\", \"stability_fee\": \"1.000000001547125958\", \"type\": \"ubtc-a\", \"check_collateralization_index_count\": \"1000\", \"keeper_reward_percentage\": \"0.000001\" },{\"auction_size\": \"50000000000\", \"conversion_factor\": \"6\",\"debt_limit\": {\"amount\":\"20000000000000\",\"denom\": \"euu\" },\"denom\": \"ubtc\", \"liquidation_market_id\": \"ubtc:eur:30\",  \"liquidation_penalty\": \"0.075000000000000000\",  \"liquidation_ratio\": \"1.500000000000000000\",  \"prefix\": 1,  \"spot_market_id\": \"ubtc:eur\",  \"stability_fee\": \"1.000000001547125958\",  \"type\": \"ubtc-b\",  \"check_collateralization_index_count\": \"1000\", \"keeper_reward_percentage\": \"0.000001\"}]"  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.cdp.params.debt_params[0].global_debt_limit.amount = \"200000000000000\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.cdp.params.debt_params[1].global_debt_limit.amount = \"200000000000000\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.gov.voting_params.voting_period = \"30s\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.gov.params.voting_period = \"30s\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.pricefeed.params.markets = [{ \"market_id\": \"ubtc:jpy\", \"base_asset\": \"ubtc\", \"quote_asset\": \"jpy\", \"oracles\": [ \"`$DAEMON_NAME keys show $VAL1 --keyring-backend test -a`\" ], \"active\": true }, { \"market_id\": \"ubtc:jpy:30\", \"base_asset\": \"ubtc\", \"quote_asset\": \"jpy\", \"oracles\": [ \"`$DAEMON_NAME keys show $VAL1 --keyring-backend test -a`\" ], \"active\": true }, { \"market_id\": \"ubtc:eur\", \"base_asset\": \"ubtc\", \"quote_asset\": \"eur\", \"oracles\": [ \"`$DAEMON_NAME keys show $VAL1 --keyring-backend test -a`\" ], \"active\": true }, { \"market_id\": \"ubtc:eur:30\", \"base_asset\": \"ubtc\", \"quote_asset\": \"eur\", \"oracles\": [ \"`$DAEMON_NAME keys show $VAL1 --keyring-backend test -a`\" ], \"active\": true }]"  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.bank.params.default_send_enabled = false' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.wasm.params.code_upload_access.permission = \"Nobody\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.wasm.params.instantiate_default_permission = \"Nobody\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;

# for stakeibc
jq '.app_state.stakeibc.params.deposit_interval = "1"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.delegate_interval = "1"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.rewards_interval = "1"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.redemption_rate_interval = "1"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.ununifi_commission = "1"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.reinvest_interval = "1"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.validator_rebalancing_threshold = "100"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.ica_timeout_nanos = "600000000000"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.buffer_size = "5"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.ibc_timeout_blocks = "300"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.fee_transfer_timeout_nanos = "1800000000000"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.max_stake_ica_calls_per_epoch = "100"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.safety_min_redemption_rate_threshold = "90"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.safety_max_redemption_rate_threshold = "150"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.stakeibc.params.ibc_transfer_timeout_nanos = "1800000000000"' ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;

$SCRIPT_DIR/../utils/chain_init_gen_command.sh exec-docker;
cosmovisor start

