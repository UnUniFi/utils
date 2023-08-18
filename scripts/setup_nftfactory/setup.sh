#!/bin/bash
NODE_HOME=$HOME/.ununifi

jq '.app_state.nftfactory.params.class_creation_fee = []' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.nftfactory.params.fee_collector_address = "' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
