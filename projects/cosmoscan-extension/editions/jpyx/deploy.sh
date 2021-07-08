#!/bin/bash
cd ~/jpyx-cosmoscan
docker-compose down
docker pull lcnem/cosmoscan:latest
docker pull lcnem/cosmoscan-jpyx:latest
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/editions/jpyx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/cosmoscan-extension/editions/jpyx/config.js
docker-compose up -d
