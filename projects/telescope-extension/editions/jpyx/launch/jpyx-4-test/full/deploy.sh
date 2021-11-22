#!/bin/bash
cd ~/jpyx-telescope
docker-compose down
docker pull lcnem/telescope:latest
docker pull lcnem/telescope-jpyx:latest
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/jpyx/docker-compose.yml
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/lcnem/botany/main/projects/telescope-extension/editions/jpyx/launch/jpyx-4-test/full/config.js
docker-compose up -d
