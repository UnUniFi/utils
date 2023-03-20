#!/bin/bash
set -xe
sudo systemctl stop cosmovisor
SCRIPT_DIR=$(cd $(dirname $0); pwd)
#load env
source $SCRIPT_DIR/../setup_node/env.sh;
# killall node
# clenup
rm -rf ~/.ununifi/config/;
 rm -rf ~/.ununifi/data/;
 rm -rf ~/.ununifi/keyring-test/;
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

$DAEMON_NAME init --chain-id $CHAIN_ID "$MONIKER";
$DAEMON_NAME keys add my_validator --recover < $SCRIPT_DIR/../setup_node/mnt.txt;
$DAEMON_NAME keys add faucet --recover < $SCRIPT_DIR/../setup_node/faucet_mnt.txt;

echo $USER_MNEMONIC_1    | $DAEMON_NAME keys add $USER1  --recover ;
echo $USER_MNEMONIC_2    | $DAEMON_NAME keys add $USER2  --recover ;
echo $USER_MNEMONIC_3    | $DAEMON_NAME keys add $USER3  --recover ;
echo $USER_MNEMONIC_4    | $DAEMON_NAME keys add $USER4  --recover;
echo $PRICEFEED_MNEMONIC | $DAEMON_NAME keys add $PRICEFEED --recover;


sed -i '/\[api\]/,+3 s/enable = false/enable = true/' ~/.ununifi/config/app.toml;
sed -i 's/stake/uguu/g' ~/.ununifi/config/genesis.json;
sed -i 's/minimum-gas-prices = ""/minimum-gas-prices = "0uguu"/' ~/.ununifi/config/app.toml;
sed -i 's/mode = "full"/mode = "validator"/' ~/.ununifi/config/config.toml;
sed -i 's/enabled-unsafe-cors = false/enabled-unsafe-cors = true/' ~/.ununifi/config/app.toml;


jq ".app_state.gov.voting_params.voting_period = \"20s\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;


  $DAEMON_NAME add-genesis-account my_validator 1000000000000uguu,100000000000ubtc;
  $DAEMON_NAME add-genesis-account user1 100000000000uguu,100000000000ubtc,50000000000uusdc;
  $DAEMON_NAME add-genesis-account user2 100000000000uguu,100000000000ubtc,50000000000uusdc;
  $DAEMON_NAME add-genesis-account user3 100000000000uguu,100000000000ubtc,50000000000uusdc;
  $DAEMON_NAME add-genesis-account user4 100000000000uguu,100000000000ubtc,50000000000uusdc;
  $DAEMON_NAME add-genesis-account faucet 50000000000000uguu,500000000000ubtc,50000000000ueth,50000000000000uusdc;
  $DAEMON_NAME add-genesis-account $PRICEFEED 100000000000uguu,100000000000000ubtc,100000000000000uusdc;
  $DAEMON_NAME gentx my_validator 1000000000uguu --chain-id $CHAIN_ID --keyring-backend test;
  $DAEMON_NAME collect-gentxs;


$SCRIPT_DIR/../setup_derivatives/setup.sh;
$SCRIPT_DIR/../setup_nftmarket/setup.sh;
$SCRIPT_DIR/../setup_nftmint/setup.sh;
sudo systemctl start cosmovisor.service;
