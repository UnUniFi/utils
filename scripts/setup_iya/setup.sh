#!/bin/bash
NODE_HOME=$HOME/.ununifi
SCRIPT_DIR=$(cd $(dirname $0); pwd)

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


jq '.app_state.wasm.codes = [
  {
    "code_bytes": "",
    "code_id": "1",
    "code_info": {
      "code_hash": "VfURcnyxjkug9BOEddgx5PiUhefx7qp+G87ihceWjaw=",
      "creator": "'$USER_ADDRESS_1'",
      "instantiate_config": {
        "address": "",
        "addresses": [],
        "permission": "Everybody"
      }
    },
    "pinned": false
  }
]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
python3 $SCRIPT_DIR/rewrite.py $NODE_HOME/config/genesis.json $SCRIPT_DIR/tmp_code_bytes.txt $NODE_HOME/config/genesis.json

jq '.app_state.wasm.contracts = [
  {
    "contract_address": "'$CONTRACT_ADDRESS1'",
    "contract_code_history": [
      {
        "code_id": "1",
        "msg": {
          "deposit_denom": "uguu",
          "owner": "'$USER_ADDRESS_1'",
          "unbond_period": 1
        },
        "operation": "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT",
        "updated": {
          "block_height": "6",
          "tx_index": "0"
        }
      }
    ],
    "contract_info": {
      "admin": "",
      "code_id": "1",
      "created": {
        "block_height": "6",
        "tx_index": "0"
      },
      "creator": "'$USER_ADDRESS_1'",
      "extension": null,
      "ibc_port_id": "",
      "label": "BaseStrategy"
    },
    "contract_state": [
      {
        "key": "636F6E666967",
        "value": "eyJvd25lciI6InVudW5pZmkxYThqY3NtbGE2aGV1OTlsZHRhemMyN2RuYTRxY2Q0anlnc3RoeDYiLCJ1bmJvbmRfcGVyaW9kIjoxLCJkZXBvc2l0X2Rlbm9tIjoidWd1dSIsInJlZGVtcHRpb25fcmF0ZSI6IjEwMDAwMDAiLCJ0b3RhbF9kZXBvc2l0IjoiMCJ9"
      }
    ]
  }

]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;


jq '.app_state.wasm.sequences = [
  {
    "id_key": "BGxhc3RDb2RlSWQ=",
    "value": "2"
  },
  {
    "id_key": "BGxhc3RDb250cmFjdElk",
    "value": "2"
  }
]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;

jq ' .app_state.yieldaggregator.strategies = [
  {
    "contract_address": "'$CONTRACT_ADDRESS1'",
    "denom": "uguu",
    "git_url": "",
    "id": "0",
    "name": "Contract Staking"
  }
]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
