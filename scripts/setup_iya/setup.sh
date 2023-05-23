#!/bin/bash
NODE_HOME=$HOME/.ununifi

jq '.app_state.stakeibc.params.deposit_interval = "1"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.delegate_interval = "1"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.rewards_interval = "1"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.redemption_rate_interval = "1"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.stride_commission = "10"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.reinvest_interval = "1"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.validator_rebalancing_threshold = "100"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.ica_timeout_nanos = "600000000000"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.buffer_size = "5"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.ibc_timeout_blocks = "300"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.fee_transfer_timeout_nanos = "1800000000000"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.max_stake_ica_calls_per_epoch = "100"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.safety_min_redemption_rate_threshold = "90"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.safety_max_redemption_rate_threshold = "150"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.stakeibc.params.ibc_transfer_timeout_nanos = "1800000000000"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
