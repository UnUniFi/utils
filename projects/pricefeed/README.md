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

## env parameter

| param                          | descriptoin                                                                                    | Available parameters | 
| ------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------- | 
| DATA_PROVIDER_TYPE             | Data provider to be used. Default is CCXT                                                      | [default,Band]       | 
| DATA_PROVIDER_URL              | The URL to specify in case of Band procol. default is the official endpoiint of band protocol. | any string           | 
| DATA_DATA_RETENTION_PERIOD_MIN | Data period to be stored. Unit is minutes.Default is 30 minutes.                               | any number           | 
| DATA_PROVIDER_STORE_TYPE       | Data type to be stored. Default is memory.                                                     | [memory, json]       | 
| DATA_PROVIDER_STORE_LOCATION   | Where to save the data if DATA_PROVIDER_STORE_TYPE is JSON. Default is . /price_data.json      | any string           | 

example
DATA_PROVIDER_TYPE=Band
DATA_PROVIDER_URL=https://laozi-testnet4.bandchain.org
DATA_DATA_RETENTION_PERIOD_MIN=5
DATA_PROVIDER_STORE_TYPE=json
DATA_PROVIDER_STORE_LOCATION=./example.json