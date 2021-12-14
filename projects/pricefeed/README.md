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
