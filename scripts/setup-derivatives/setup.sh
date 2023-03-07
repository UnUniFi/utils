#!/bin/bash
# repalce it
NODE_HOME=$HOME/.ununifi
PRICEFEED_ADDRESS=$PRICEFEED_ADDRESS


jq '.app_state.pricefeed.params.markets = [
  { "market_id": "ubtc:usd", "base_asset": "ubtc", "quote_asset": "usd", "oracles": [ "'$PRICEFEED_ADDRESS'" ], "active": true },
  { "market_id": "ubtc:usd:30", "base_asset": "ubtc", "quote_asset": "usd", "oracles": [ "'$PRICEFEED_ADDRESS'" ], "active": true },
  { "market_id": "uusdc:usd", "base_asset": "uusdc", "quote_asset": "usd", "oracles": [ "'$PRICEFEED_ADDRESS'" ], "active": true },
  { "market_id": "uusdc:usd:30", "base_asset": "uusdc", "quote_asset": "usd", "oracles": [ "'$PRICEFEED_ADDRESS'" ], "active": true },
  { "market_id": "ubtc:uusdc", "base_asset":"ubtc", "quote_asset":"uusdc", "oracles": ["'$PRICEFEED_ADDRESS'"], "active": true},
  { "market_id": "ubtc:uusdc:30", "base_asset":"ubtc", "quote_asset":"uusdc", "oracles": ["'$PRICEFEED_ADDRESS'"], "active": true}
  ]'  $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.pool_params.quote_ticker = "usd"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.pool_params.base_lpt_mint_fee = "0.001"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.pool_params.base_lpt_redeem_fee = "0.001"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.pool_params.report_liquidation_reward_rate = "0.001"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.pool_params.report_levy_period_reward_rate = "0.001"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.pool_params.accepted_assets = [{"denom":"ubtc", "target_weight": "0.6"}, {"denom":"uusdc", "target_weight":"0.4"}]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.perpetual_futures.commission_rate = "0.001"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.perpetual_futures.margin_maintenance_rate = "0.5"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.perpetual_futures.imaginary_funding_rate_proportional_coefficient = "0.0005"' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.derivatives.params.perpetual_futures.markets = [{"base_denom": "ubtc", "quote_denom": "uusdc" }]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.bank.denom_metadata = [
  {"base" : "ubtc" , "symbol": "ubtc"},
  {"base" : "uusdc", "symbol": "uusdc"}
  ]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.pricefeed.posted_prices = [
  {"expiry": "2024-02-20T12:02:01Z","market_id": "ubtc:usd","oracle_address": "'$PRICEFEED_ADDRESS'","price": "0.024508410211260500"},
  {"expiry": "2024-02-20T12:02:47Z","market_id": "ubtc:usd:30","oracle_address": "'$PRICEFEED_ADDRESS'","price": "0.005779087260702010"},
  {"expiry": "2024-02-20T12:03:30Z","market_id": "uusdc:usd","oracle_address": "'$PRICEFEED_ADDRESS'","price": "0.000001001479651825"},
  {"expiry": "2024-02-20T12:04:11Z","market_id": "uusdc:usd:30","oracle_address": "'$PRICEFEED_ADDRESS'","price": "0.000001002011358752"},
  {"expiry": "2024-02-20T12:00:38Z","market_id": "ubtc:uusdc","oracle_address": "'$PRICEFEED_ADDRESS'","price": "24528.185864015486004064"},
  {"expiry": "2024-02-20T12:00:38Z","market_id": "ubtc:uusdc:30","oracle_address": "'$PRICEFEED_ADDRESS'","price": "24528.185864015486004064"}
]'  $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
