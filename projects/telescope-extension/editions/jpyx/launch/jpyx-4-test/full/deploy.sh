#!/bin/bash
cd ~/jpyx-telescope
docker-compose down
docker pull ghcr.io/CauchyE/telescope:latest
docker pull ghcr.io/UnUniFi/telescope-ununifi:latest
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/editions/jpyx/docker-compose.yml
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/nginx.conf
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/telescope-extension/editions/jpyx/launch/jpyx-4-test/full/config.js
docker-compose up -d
