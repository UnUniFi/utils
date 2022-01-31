#!/bin/bash
cd ~/telescope
docker-compose down
docker pull ghcr.io/cauchye/telescope:test
docker pull ghcr.io/ununifi/telescope-ununifi:test
curl -O https://raw.githubusercontent.com/UnUniFi/utils/develop/projects/telescope-extension/editions/ununifi/launch/ununifi-7-private-test/docker-compose.yml
curl -O https://raw.githubusercontent.com/UnUniFi/utils/develop/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/UnUniFi/utils/develop/projects/telescope-extension/editions/ununifi/launch/ununifi-7-private-test/full/config.js
docker-compose up -d
