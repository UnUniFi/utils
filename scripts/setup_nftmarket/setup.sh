#!/bin/bash

#jq ".app_state.nftbackedloan.params.nft_listing_period_initial = \"86400\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.nftbackedloan.params.nft_listing_full_payment_period = \"86400\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq ".app_state.nftbackedloan.params.nft_listing_nft_delivery_period = \"86400\""  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
