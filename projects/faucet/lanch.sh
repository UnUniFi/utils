#!/bin/bash
wget https://github.com/tendermint/faucet/releases/download/v0.0.3/faucet_0.0.3_linux_amd64.tar.gz
tar -xvf ./faucet_0.0.3_linux_amd64.tar.gz
./faucet --cli-name ununifid --denoms ubtc --keyring-backend test --account-name faucet --port 7000 --credit-amount=100 --max-credit=100 --home=/root/.ununifi &
./faucet --cli-name ununifid --denoms uguu --keyring-backend test --account-name faucet --port 7002 --credit-amount=100 --max-credit=100 --home=/root/.ununifi &
echo "
  server {
    listen 8000;
    listen [::]:8000;
    server_name localhost;
    charset UTF-8;

    location / {
      proxy_http_version 1.1;
      proxy_pass http://localhost:7000;

      if (\$request_method = 'OPTIONS') {
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

      if (\$request_method = 'OPTIONS') {
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

" >> /etc/nginx/conf.d/uniunifi.conf
