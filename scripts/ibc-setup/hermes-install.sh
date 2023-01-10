#!/bin/sh
sudo apt-get install pkg-config libssl-dev
sudo apt install librust-openssl-dev build-essentia
mkdir -p $HOME/hermes
git clone https://github.com/informalsystems/ibc-rs.git hermes
cd hermes
git checkout tags/v1.0.0
cargo install ibc-relayer-cli --bin hermes --locked
