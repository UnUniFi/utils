#!/bin/bash
# mkdir ~/faucet
# cd ~/faucet
# curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/faucet/deploy.sh
docker-compose down
docker system prune -a -f
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/faucet/docker-compose.yml
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/faucet/nginx.conf
docker cp $(docker ps -qf "name=ununifid"):/usr/bin/ununifid ~/faucet/ununifid
docker cp $(docker ps -qf "name=ununifid"):/usr/lib/libwasmvm.so ~/faucet/libwasmvm.so
docker cp $(docker ps -qf "name=ununifid"):/lib/ld-musl-x86_64.so.1 ~/faucet/ld-musl-x86_64.so.1
docker cp $(docker ps -qf "name=ununifid"):/usr/lib/libgcc_s.so.1 ~/faucet/libgcc_s.so.1
docker cp $(docker ps -qf "name=ununifid"):/usr/lib/ld-linux-x86-64.so.2 ~/faucet/ld-linux-x86-64.so.2

docker-compose up -d
