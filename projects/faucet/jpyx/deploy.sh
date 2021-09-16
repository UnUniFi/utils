#!/bin/bash
docker-compose down
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/faucet/jpyx/docker-compose.yml
docker cp $(docker ps -qf "name=jpyxd"):/usr/bin/jpyxd ~/jpyx-faucet/jpyxd
docker-compose up -d
