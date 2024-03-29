#!/bin/bash

VAL_MNEMONIC_1="figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance"
FAUCET_MNEMONIC_1="chimney diesel tone pipe mouse detect vibrant video first jewel vacuum winter grant almost trim crystal similar giraffe dizzy hybrid trigger muffin awake leader"
USER_MNEMONIC_1="supply release type ostrich rib inflict increase bench wealth course enter pond spare neutral exact retire thing update inquiry atom health number lava taste"
VAL1=val
FAUCET=faucet
USER1=user1

current_height=$(ununifid q block 2>&1 | jq . | grep height|head -n 1 | grep -o -E '[0-9]+')
echo "current_height: $current_height"

BIN_UNI=~/.ununifi/cosmovisor/current/bin/ununifid

$BIN_UNI tx gov submit-legacy-proposal param-change ./update_param.json \
--from $VAL1  \
--yes \
--gas 20000000 \
--keyring-backend test \
--chain-id $CHAIN_ID

sleep 5

$BIN_UNI query gov proposals

$BIN_UNI tx gov deposit 1 \
10000000000uguu --from val --yes \
--keyring-backend test \
--chain-id $CHAIN_ID

$BIN_UNI tx gov deposit 1 \
500000000000uguu --from faucet --yes \
--keyring-backend test \
--chain-id $CHAIN_ID

sleep 5

$BIN_UNI tx gov vote 1 \
yes --from val \
--keyring-backend test \
--yes --chain-id $CHAIN_ID

$BIN_UNI tx gov vote 1 \
yes --from faucet \
--keyring-backend test \
--yes --chain-id $CHAIN_ID

$BIN_UNI query gov proposals
$BIN_UNI query wasm params
