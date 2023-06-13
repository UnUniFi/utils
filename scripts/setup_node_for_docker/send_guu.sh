#!/bin/bash

# Bank send

VAL_MNEMONIC_1="figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance"
FAUCET_MNEMONIC_1="chimney diesel tone pipe mouse detect vibrant video first jewel vacuum winter grant almost trim crystal similar giraffe dizzy hybrid trigger muffin awake leader"
USER_MNEMONIC_1="supply release type ostrich rib inflict increase bench wealth course enter pond spare neutral exact retire thing update inquiry atom health number lava taste"
VAL1=val
VAL1ADDR=ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6
FAUCET=faucet
USER1=user1
USER1ADDR=ununifi155u042u8wk3al32h3vzxu989jj76k4zcu44v6w

until  ununifid q block 2>&1 |grep "last_block_id" >/dev/null 2>&1 ; do
    printf 'waitting...'
    sleep 1
done

BIN_UNI=~/.ununifi/cosmovisor/current/bin/ununifid

$BIN_UNI tx bank send $VAL1ADDR $USER1ADDR 1000uguu \
--from val  \
--keyring-backend test \
--yes \
--chain-id $CHAIN_ID

$BIN_UNI tx bank send $USER1ADDR $VAL1ADDR 50uguu \
--from user1  \
--keyring-backend test \
--yes \
--chain-id $CHAIN_ID

sleep 5

$BIN_UNI q bank balances $VAL1ADDR
$BIN_UNI q bank balances $USER1ADDR
