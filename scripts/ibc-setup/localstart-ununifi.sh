#!/bin/sh
rm -rf ~/.ununifi;
ununifid init alpha-node1 --chain-id ununifi-test-private-m1;

sed -i '/\[api\]/,+3 s/enable = false/enable = true/' ~/.ununifi/config/app.toml;
sed -i 's/minimum-gas-prices = ""/minimum-gas-prices = "0uguu"/' ~/.ununifi/config/app.toml;
sed -i 's/mode = "full"/mode = "validator"/' ~/.ununifi/config/config.toml;
sed -i 's/stake/uguu/g' ~/.ununifi/config/genesis.json;
jq '.app_state.cdp.params.collateral_params =[{ "auction_size": "50000000000", "conversion_factor": "6", "debt_limit": { "amount": "20000000000000", "denom": "jpu" }, "denom": "ubtc", "liquidation_market_id": "ubtc:jpy:30", "liquidation_penalty": "0.075000000000000000", "liquidation_ratio": "1.500000000000000000", "prefix": 0, "spot_market_id": "ubtc:jpy", "stability_fee": "1.000000001547125958", "type": "ubtc-a", "check_collateralization_index_count": "1000", "keeper_reward_percentage": "0.000001" },{"auction_size": "50000000000", "conversion_factor": "6","debt_limit": {"amount":"20000000000000","denom": "euu" },"denom": "ubtc", "liquidation_market_id": "ubtc:eur:30",  "liquidation_penalty": "0.075000000000000000",  "liquidation_ratio": "1.500000000000000000",  "prefix": 1,  "spot_market_id": "ubtc:eur",  "stability_fee": "1.000000001547125958",  "type": "ubtc-b",  "check_collateralization_index_count": "1000", "keeper_reward_percentage": "0.000001"}]'  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.cdp.params.debt_params[0].global_debt_limit.amount = "200000000000000"'  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.cdp.params.debt_params[1].global_debt_limit.amount = "200000000000000"'  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.pricefeed.params.markets = [{ "market_id": "ubtc:jpy", "base_asset": "ubtc", "quote_asset": "jpy", "oracles": [ "ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6" ], "active": true }, { "market_id": "ubtc:jpy:30", "base_asset": "ubtc", "quote_asset": "jpy", "oracles": [ "ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6" ], "active": true }, { "market_id": "ubtc:eur", "base_asset": "ubtc", "quote_asset": "eur", "oracles": [ "ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6" ], "active": true }, { "market_id": "ubtc:eur:30", "base_asset": "ubtc", "quote_asset": "eur", "oracles": [ "ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6" ], "active": true }]'  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;
jq '.app_state.gov.voting_params.voting_period = "20s"'  ~/.ununifi/config/genesis.json > temp.json ; mv temp.json ~/.ununifi/config/genesis.json;


sed -i 's/0.0.0.0:1318/0.0.0.0:1418/' ~/.ununifi/config/app.toml;
sed -i 's/0.0.0.0:1317/0.0.0.0:1417/' ~/.ununifi/config/app.toml;
sed -i 's/0.0.0.0:9090/0.0.0.0:9092/' ~/.ununifi/config/app.toml;
sed -i 's/0.0.0.0:9091/0.0.0.0:9093/' ~/.ununifi/config/app.toml;
sed -i 's/localhost:6060/localhost:6062/' ~/.ununifi/config/config.toml;
sed -i 's/:26657/:26757/' ~/.ununifi/config/config.toml;
sed -i 's/:26656/:26756/' ~/.ununifi/config/config.toml;

echo "figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance" > mnt.txt;

ununifid keys add my_validator --recover < mnt.txt;
ununifid genesis add-genesis-account my_validator 100000000000uguu,100000000000ubtc;
ununifid genesis gentx my_validator 100000000uguu --chain-id ununifi-test-private-m1 --keyring-backend test;
ununifid genesis collect-gentxs;
ununifid start;
