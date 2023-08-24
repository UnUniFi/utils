# Faucet for UnUniFi v3.2.2

## Docker

Edit .ununifi home directory

```dockerfile
      # - ~/.ununifi:/root/.ununifi
      - ~/.ununifi:/mnt/blockstorage/.ununifi
```

Edit faucet command

- denom
- port
- credit-amount
- max-credit

Set Faucet account

```bash
ununifid keys add faucet --recover --keyring-backend test
# enter the mnemonic
```

Launch

```bash
docker-compose build
docker-compose up -d
```

## nohup (NOT recommend)

Download Faucet

```bash
wget https://github.com/tendermint/faucet/releases/download/v0.0.3/faucet_0.0.3_linux_amd64.tar.gz
tar -xvf ./faucet_0.0.3_linux_amd64.tar.gz
```

Add nginx config

```nginx
  server {
    listen 8000;
    listen [::]:8000;
    server_name localhost;
    charset UTF-8;

    location / {
      proxy_http_version 1.1;
      proxy_pass http://localhost:7000;

      if ($request_method = 'OPTIONS') {
        add_header Access-Control-Allow-Origin '*';
        add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE';
        add_header Access-Control-Allow-Headers 'Origin, Authorization, Accept, Content-Type';
        # add_header Access-Control-Max-Age 3600;
        add_header Content-Type 'text/plain charset=UTF-8';
        add_header Content-Length 0;
        return 204;
      }
    }
  }

  server {
    listen 8002;
    listen [::]:8002;
    server_name localhost;
    charset UTF-8;

    location / {
      proxy_http_version 1.1;
      proxy_pass http://localhost:7002;

      if ($request_method = 'OPTIONS') {
        add_header Access-Control-Allow-Origin '*';
        add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE';
        add_header Access-Control-Allow-Headers 'Origin, Authorization, Accept, Content-Type';
        # add_header Access-Control-Max-Age 3600;
        add_header Content-Type 'text/plain charset=UTF-8';
        add_header Content-Length 0;
        return 204;
      }
    }
  }
```

Run via nohup
./run_bk.sh

```bash
#!/bin/bash
SCRIPT_DIR=$(cd $(dirname $0); pwd)
nohup $SCRIPT_DIR/faucet --cli-name ununifid --denoms ubtc --keyring-backend test --account-name faucet --port 7000 --credit-amount=100000 --max-credit=2000000 --home=/root/.ununifi > $SCRIPT_DIR/fauet1.log 2>&1 &
nohup $SCRIPT_DIR/faucet --cli-name ununifid --denoms uguu,uusdc --keyring-backend test --account-name faucet --port 7002 --credit-amount=20000000 --max-credit=2000000000 --home=/root/.ununifi > $SCRIPT_DIR/fauet2.log 2>&1 &
```
