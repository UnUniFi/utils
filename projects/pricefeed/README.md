# pricefeed

## Install

```bash
mkdir pricefeed
cd pricefeed
curl -O https://raw.githubusercontent.com/ununifi/utils/main/projects/pricefeed/docker-compose.yml
curl -L https://raw.githubusercontent.com/ununifi/utils/main/projects/pricefeed/launch/[chain-id]/.env.example > .env
vi .env
docker-compose up -d
```

## env parameter for oracle

| param                          | description                                                                                    | Available parameters |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------- |
| DATA_PROVIDER_TYPE             | Data provider to be used. Default is CCXT                                                      | [default,Band]       |
| DATA_PROVIDER_URL              | The URL to specify in case of Band procol. default is the official endpoiint of band protocol. | any string           |
| DATA_DATA_RETENTION_PERIOD_MIN | Data period to be stored. Unit is minutes.Default is 30 minutes.                               | any number           |
| DATA_PROVIDER_STORE_TYPE       | Data type to be stored. Default is memory.                                                     | [memory, json]       |
| DATA_PROVIDER_STORE_LOCATION   | Where to save the data if DATA_PROVIDER_STORE_TYPE is JSON. Default is . /price_data.json      | any string           |
| MARKET_IDS                     | Currencies pairs split by ','                                                                  | any string           |

example
DATA_PROVIDER_TYPE=Band
DATA_PROVIDER_URL=https://laozi-testnet4.bandchain.org
DATA_DATA_RETENTION_PERIOD_MIN=5
DATA_PROVIDER_STORE_TYPE=json
DATA_PROVIDER_STORE_LOCATION=./example.json
MARKET_IDS=ubtc:usd,ubtc:usd:30,uusdc:usd,uusdc:usd:30

## env parameter for stargaze

| param            | description                                                                                    | Available parameters |
| ---------------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| STARGAZE_REST    | Stargaze REST Endpoint. Default is official endpoint of stargaze mainnet                       | any string           |
| MARKETPLACE_ADDR | The contract address of Stargaze marketplace. default is the address of mainnet's marketplace. | any string           |
| COLLECTION_IDS   | NFT Collection addresses split by ','                                                          | any string           |

example
STARGAZE_REST=https://rpc.stargaze-apis.com/
MARKETPLACE_ADDR=stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl
COLLECTION_IDS=stars19jq6mj84cnt9p7sagjxqf8hxtczwc8wlpuwe4sh62w45aheseues57n420:ustar,
