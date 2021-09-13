#!/bin/bash
docker cp $(docker ps -qf "name=jpyxd"):/usr/bin/jpyxd ~/jpyx-faucet/jpyxd
docker-compose up -d
