#!/bin/bash
cd ~/jpyx-telescope
docker-compose down
docker pull ghcr.io/cauchye/telescope:latest
docker pull ghcr.io/ununifi/telescope-ununifi:latest
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/editions/jpyx/docker-compose.yml
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/editions/jpyx/launch/jpyx-4-test/light/config.js
docker-compose up -d
