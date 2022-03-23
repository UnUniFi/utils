#!/bin/bash
cd ~/monitor
docker-compose down
docker pull ghcr.io/cauchye/monitor:latest
# curl -L https://raw.githubusercontent.com/UnUniFi/utils/main/projects/monitor/config.json -o config.json
# vi config.json
curl -O https://raw.githubusercontent.com/UnUniFi/utils/main/projects/monitor/docker-compose.yml
docker-compose up -d
