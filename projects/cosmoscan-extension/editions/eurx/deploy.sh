#!/bin/bash
cd ~/eurx-cosmoscan
docker-compose down
docker pull lcnem/cosmoscan
docker pull lcnem/cosmoscan-eurx
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/editions/eurx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/editions/eurx/config.js
docker-compose up -d
