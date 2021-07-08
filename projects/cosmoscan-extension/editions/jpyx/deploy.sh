#!/bin/bash
cd /root/jpyx-cosmoscan
docker-compose down
docker pull lcnem/cosmoscan
docker pull lcnem/cosmoscan-jpyx
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/editions/jpyx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/editions/jpyx/config.js
docker-compose up -d
