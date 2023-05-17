#!/bin/bash

VAL_MNEMONIC_1="figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance"
FAUCET_MNEMONIC_1="chimney diesel tone pipe mouse detect vibrant video first jewel vacuum winter grant almost trim crystal similar giraffe dizzy hybrid trigger muffin awake leader"
USER_MNEMONIC_1="supply release type ostrich rib inflict increase bench wealth course enter pond spare neutral exact retire thing update inquiry atom health number lava taste"
VAL1=val
FAUCET=faucet
USER1=user1

until  ununifid q block 2>&1 |grep "last_block_id" >/dev/null 2>&1 ; do
    printf 'waitting...'
    sleep 1
done


current_height=$(ununifid q block 2>&1 | jq . | grep height|head -n 1 | grep -o -E '[0-9]+')

echo "current_height: $current_height"
echo "current_height: $current_height"
echo "current_height: $current_height"
echo "current_height: $current_height"
echo "current_height: $current_height"
echo "current_height: $current_height"
UP_HEIGHT=$((current_height+7))
echo "up_height: $UP_HEIGHT"
echo "up_height: $UP_HEIGHT"
echo "up_height: $UP_HEIGHT"
echo "up_height: $UP_HEIGHT"

DAEMON_HASH="7720c705409396446c6c24ba17c7d702c6ef74213e3f3e14a67cecc2b12c2375"
# BIN_URL="https://objectstorage.ap-tokyo-1.oraclecloud.com/p/X8YsnNn4EiarBLllKI-Eg9ZMAb49XUTOBGe1MvkqwZ5_aZPBTKRvK1yPTIdSDcXp/n/nrqww3senroj/b/oracle.ac-data.info/o/7eb3fca8-843f-446f-805f-222cbee7d074/v1/ununifid"
BIN_URL="https://github.com/mkXultra/share_gen/releases/download/v0.0.3/ununifid"

$DAEMON_NAME tx gov submit-proposal software-upgrade v2 \
--title upgrade \
--description upgrade \
--upgrade-info "\"{\"binaries\":{\"linux/amd64\":\"$BIN_URL?checksum=sha256:$DAEMON_HASH\"}}\"" \
--upgrade-height $UP_HEIGHT \
--from val  \
--yes \
--chain-id $CHAIN_ID | jq .;

sleep 1

$DAEMON_NAME tx gov deposit 1 \
10000000000uguu --from val --yes \
--chain-id $CHAIN_ID|jq .;


$DAEMON_NAME tx gov deposit 1 \
500000000000uguu --from faucet --yes \
--chain-id $CHAIN_ID|jq .;

sleep 2

$DAEMON_NAME tx gov vote 1 \
yes --from val \
--yes --chain-id $CHAIN_ID|jq .;

$DAEMON_NAME tx gov vote 1 \
yes --from faucet \
--yes --chain-id $CHAIN_ID|jq .;

$DAEMON_NAME query gov proposals;
