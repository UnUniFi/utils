#!/bin/bash

# for debug
# set -xe

sudo systemctl stop cosmovisor
SCRIPT_DIR=$(cd $(dirname $0); pwd)
#load env
source $SCRIPT_DIR/../setup_node/env.sh;
# update util repo
cd $SCRIPT_DIR
git pull
# killall node
# clenup
rm -rf ~/.ununifi/config/;
 rm -rf ~/.ununifi/data/;
 rm -rf ~/.ununifi/keyring-test/;
export VAL=my_validator;
export FAUCET=faucet;
export USER1=user1;
export USER2=user2;
export USER3=user3;
export USER4=user4;
export PRICEFEED=pricefeed;
export USER_MNEMONIC_1="supply release type ostrich rib inflict increase bench wealth course enter pond spare neutral exact retire thing update inquiry atom health number lava taste";
export USER_MNEMONIC_2="canyon second appear story film people resist slam waste again race rifle among room hip icon marriage sea quality prepare only liquid column click";
export USER_MNEMONIC_3="among follow tooth egg unhappy city road expire solution visit visa skate allow network tissue slogan rose toddler develop utility negative peasant ostrich toward";
export USER_MNEMONIC_4="charge split umbrella day gauge two orphan random human clerk buzz funny cabin purse fluid lecture blouse keen twist loud animal supply hat scare";
export PRICEFEED_MNEMONIC="jelly fortune hire delay impose daughter praise amazing patch gesture easy achieve intact genre swamp gossip aisle arrest item seek inherit cradle hover involve";
export USER_ADDRESS_1=ununifi155u042u8wk3al32h3vzxu989jj76k4zcu44v6w
export USER_ADDRESS_2=ununifi1v0h8j7x7kfys29kj4uwdudcc9y0nx6twwxahla
export USER_ADDRESS_3=ununifi1y3t7sp0nfe2nfda7r9gf628g6ym6e7d44evfv6
export USER_ADDRESS_4=ununifi1pp2ruuhs0k7ayaxjupwj4k5qmgh0d72wrdyjyu
export PRICEFEED_ADDRESS=ununifi1h7ulktk5p2gt7tnxwhqzlq0yegq47hum0fahcr
export CONTRACT_ADDRESS1=ununifi14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sm5z28e

$DAEMON_NAME init --chain-id $CHAIN_ID "$MONIKER";
# $DAEMON_NAME keys add my_validator --recover < $SCRIPT_DIR/../setup_node/mnt.txt;
# $DAEMON_NAME keys add faucet --recover < $SCRIPT_DIR/../setup_node/faucet_mnt.txt;
VAL_MNEMONIC=$(cat $SCRIPT_DIR/../setup_node/mnt.txt)
FAUCET_MNEMONIC=$(cat $SCRIPT_DIR/../setup_node/faucet_mnt.txt)

echo $VAL_MNEMONIC    | $DAEMON_NAME keys add $VAL    --recover --keyring-backend=test
echo $FAUCET_MNEMONIC | $DAEMON_NAME keys add $FAUCET --recover --keyring-backend=test
echo $USER_MNEMONIC_1    | $DAEMON_NAME keys add $USER1  --recover --keyring-backend=test
echo $USER_MNEMONIC_2    | $DAEMON_NAME keys add $USER2  --recover --keyring-backend=test
echo $USER_MNEMONIC_3    | $DAEMON_NAME keys add $USER3  --recover --keyring-backend=test
echo $USER_MNEMONIC_4    | $DAEMON_NAME keys add $USER4  --recover --keyring-backend=test
echo $PRICEFEED_MNEMONIC | $DAEMON_NAME keys add $PRICEFEED --recover --keyring-backend=test


sed -i '/\[api\]/,+3 s/enable = false/enable = true/' ~/.ununifi/config/app.toml;
sed -i -e 's/\bstake\b/uguu/g' ~/.ununifi/config/genesis.json
sed -i 's/minimum-gas-prices = ""/minimum-gas-prices = "0uguu"/' ~/.ununifi/config/app.toml;
sed -i 's/mode = "full"/mode = "validator"/' ~/.ununifi/config/config.toml;
sed -i 's/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' ~/.ununifi/config/app.toml;


jq ".app_state.gov.voting_params.voting_period = \"20s\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;


$SCRIPT_DIR/../utils/chain_init_gen_command.sh reset-node;

# setup modules genesis
$SCRIPT_DIR/../setup_derivatives/setup.sh;
$SCRIPT_DIR/../setup_nftmarket/setup.sh;
$SCRIPT_DIR/../setup_nftmint/setup.sh;
$SCRIPT_DIR/../setup_iya/setup.sh;
sudo systemctl start cosmovisor.service;

sleep 3

# restart faucet,pricefeed and CI server
$SCRIPT_DIR/../restart_utils/run.sh
