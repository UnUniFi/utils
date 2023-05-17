#!/bin/bash

# execute background
./build_then_proposal.sh &
# execute foreground
./setup_node_then_start_for_docker.sh
