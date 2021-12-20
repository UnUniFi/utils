#!/bin/bash
cd ~/telescope
docker-compose down
docker pull ghcr.io/cauchye/telescope:latest
docker pull ghcr.io/ununifi/telescope-ununifi:latest
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/editions/ununifi/docker-compose.yml
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/editions/ununifi/launch/ununifi-6-test/light/config.js
docker-compose up -d
