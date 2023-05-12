#!/bin/bash
set -xe
source ./env.sh
./setup_lib.sh
./chain_install.sh
./setup_cosmovisor.sh
./setup_node_then_start.sh
