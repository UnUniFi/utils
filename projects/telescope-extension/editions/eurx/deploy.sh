#!/bin/bash
cd ~/eurx-telescope
docker-compose down
docker pull lcnem/telescope:latest
docker pull lcnem/telescope-eurx:latest
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/eurx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/eurx/config.js
docker-compose up -d
