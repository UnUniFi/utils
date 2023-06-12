#!/bin/bash
if [ -z $SETUP_SSL_NODE_CONFIG_ENV ]; then
  echo "-----------------"
  echo "not setup env"
  echo "-----------------"
  DOMEIN_CAUCHYE=a.private-test.ununifi.cauchye.net
  RUNNING_FRONT=TRUUE
fi

sudo apt-get install -y  certbot python3-certbot-nginx;
sudo apt show nginx;
sed -i 's/80/8090/g' /etc/nginx/sites-enabled/default;
sudo systemctl start nginx.service;

mkdir cert_util;
cp after.sh ./cert_util
cp pre.sh ./cert_util
cd cert_util;
sudo chmod 777 *.sh;
#normal
#ruunnig telescope case

#!/bin/bash
if [ -z $RUNNING_FRONT ]; then
    # front stop then get certfile then restart front
    sudo certbot --nginx certonly -d $DOMEIN_CAUCHYE --email info@cauchye.com --agree-tos --non-interactive --no-eff-email --verbose
else
    sudo certbot --nginx certonly --pre-hook ./pre.sh --post-hook ./after.sh -d $DOMEIN_CAUCHYE --email info@cauchye.com --agree-tos --non-interactive --no-eff-email --verbose

fi

echo "
#for rest api endpoint
server {
        listen 1318 ssl;
        server_name $DOMEIN_CAUCHYE;
        ssl_certificate /etc/letsencrypt/live/$DOMEIN_CAUCHYE/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/$DOMEIN_CAUCHYE/privkey.pem;


        # for redirct http to https
        # error_page 497 301 =307 https://$host:$server_port$request_uri;
        location / {
                proxy_pass http://127.0.0.1:1317;
                proxy_http_version 1.1;
                # for redirct http to https
                #proxy_redirect off;
                #proxy_set_header Host $host:$server_port;
                #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                #proxy_set_header X-Forwarded-Ssl on;
        }
}
" > /etc/nginx/conf.d/uniunifi.conf


if [ -z $RUNNING_FAUCET ]; then
  echo "not use faucet"
else
  echo "faucet setup ssl port"
echo "
#for faucet
server {
        listen 8001 ssl;
        server_name $DOMEIN_CAUCHYE;
        ssl_certificate /etc/letsencrypt/live/$DOMEIN_CAUCHYE/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/$DOMEIN_CAUCHYE/privkey.pem;


        # for redirct http to https
        # error_page 497 301 =307 https://$host:$server_port$request_uri;
        location / {
                proxy_pass http://127.0.0.1:8000;
                proxy_http_version 1.1;
                # for redirct http to https
                #proxy_redirect off;
                #proxy_set_header Host $host:$server_port;
                #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                #proxy_set_header X-Forwarded-Ssl on;
        }
}

server {
        listen 8003 ssl;
        server_name $DOMEIN_CAUCHYE;
        ssl_certificate /etc/letsencrypt/live/$DOMEIN_CAUCHYE/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/$DOMEIN_CAUCHYE/privkey.pem;


        # for redirct http to https
        # error_page 497 301 =307 https://$host:$server_port$request_uri;
        location / {
                proxy_pass http://127.0.0.1:8002;
                proxy_http_version 1.1;
                # for redirct http to https
                #proxy_redirect off;
                #proxy_set_header Host $host:$server_port;
                #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                #proxy_set_header X-Forwarded-Ssl on;
        }
}
" >> /etc/nginx/conf.d/ununifi.conf
fi

# Open tendermint-rpc port
echo "
#for rpc endpoint
server {
        listen 443 ssl;
        server_name $DOMEIN_CAUCHYE;
        ssl_certificate /etc/letsencrypt/live/$DOMEIN_CAUCHYE/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/$DOMEIN_CAUCHYE/privkey.pem;


        # for redirct http to https
        # error_page 497 301 =307 https://$host:$server_port$request_uri;
        location / {
                proxy_pass http://127.0.0.1:26657;
                proxy_http_version 1.1;
                # for redirct http to https
                #proxy_redirect off;
                #proxy_set_header Host $host:$server_port;
                #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                #proxy_set_header X-Forwarded-Ssl on;
        }
}
" > /etc/nginx/conf.d/uniunifi.conf

# Open tendermint-rpc port
echo "
#for grpc endpoint
server {
        listen 9092 ssl;
        server_name $DOMEIN_CAUCHYE;
        ssl_certificate /etc/letsencrypt/live/$DOMEIN_CAUCHYE/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/$DOMEIN_CAUCHYE/privkey.pem;


        # for redirct http to https
        # error_page 497 301 =307 https://$host:$server_port$request_uri;
        location / {
                proxy_pass http://127.0.0.1:9090;
                proxy_http_version 1.1;
                # for redirct http to https
                #proxy_redirect off;
                #proxy_set_header Host $host:$server_port;
                #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                #proxy_set_header X-Forwarded-Ssl on;
        }
}
" > /etc/nginx/conf.d/uniunifi.conf

sudo systemctl restart nginx.service
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 1318
sudo ufw allow 26657
sudo ufw allow 443
sudo ufw allow 9090
sudo ufw allow 9092
sudo ufw reload

SCRIPT_DIR=$(cd $(dirname $0); pwd)
#毎月1日、15日1時に証明書を更新する

if [ -z $RUNNING_FRONT ]; then
    # front stop then get certfile then restart front
  echo "00 01 1,15 * * root sudo certbot renew" > /etc/cron.d/letsencrypt
else
  echo "00 01 1,15 * * root sudo certbot renew --pre-hook $SCRIPT_DIR/pre.sh --post-hook $SCRIPT_DIR/after.sh" > /etc/cron.d/letsencrypt
fi

