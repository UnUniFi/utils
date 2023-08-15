#!/bin/bash

VAL_ADDRESS_1=ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6
FAUCET_ADDRESS_1=ununifi1d6zd6awgjxuwrf4y863c9stz9m0eec4ghfy24c
USER_ADDRESS_1=ununifi155u042u8wk3al32h3vzxu989jj76k4zcu44v6w
FAUCET=faucet
USER1=user1

echo "--before--"
~/.ununifi/cosmovisor/current/bin/ununifid q bank balances $VAL_ADDRESS_1
~/.ununifi/cosmovisor/current/bin/ununifid tx bank send $FAUCET_ADDRESS_1 $VAL_ADDRESS_1 10uguu --from $FAUCET --chain-id $CHAIN_ID --keyring-backend test -y
sleep 7
echo "\n"
echo "\n"
echo "\n"
echo "--after send from faucet--"
~/.ununifi/cosmovisor/current/bin/ununifid q bank balances $VAL_ADDRESS_1
~/.ununifi/cosmovisor/current/bin/ununifid tx bank send $USER_ADDRESS_1 $VAL_ADDRESS_1 10uguu --from $USER1 --chain-id $CHAIN_ID --keyring-backend test -y
sleep 7
echo "\n"
echo "\n"
echo "\n"
echo "--after send from user1--"
~/.ununifi/cosmovisor/current/bin/ununifid q bank balances $VAL_ADDRESS_1
