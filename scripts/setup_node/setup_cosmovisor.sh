#!/bin/bash
if [ -z $SETUP_NODE_ENV ]; then
  echo "-----------------"
  echo "not setup env"
  echo "-----------------"
  CHAIN_REPO=https://github.com/UnUniFi/chain
  CHAIN_REPO_BRANCHE=develop
  TARGET=ununifid
  TARGET_HOME=.ununifi
fi

cd $HOME

#cosmovisor setup
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
echo "# Setup Cosmovisor" >> ~/.profile
echo "export DAEMON_NAME=$TARGET" >> ~/.profile
echo "export DAEMON_HOME=$HOME/$TARGET_HOME" >> ~/.profile
echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=true" >> ~/.profile
echo "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.profile
echo "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.profile
echo "export UNSAFE_SKIP_BACKUP=true" >> ~/.profile
source ~/.profile

mkdir -p $DAEMON_HOME/cosmovisor
mkdir -p $DAEMON_HOME/cosmovisor/genesis
mkdir -p $DAEMON_HOME/cosmovisor/genesis/bin
mkdir -p $DAEMON_HOME/cosmovisor/upgrades

cp ~/go/bin/$DAEMON_NAME $DAEMON_HOME/cosmovisor/genesis/bin

cd $HOME

echo "[Unit]
Description=Cosmovisor daemon
After=network-online.target
[Service]
Environment="DAEMON_NAME=$DAEMON_NAME"
Environment="DAEMON_HOME=$DAEMON_HOME"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"
Environment="DAEMON_LOG_BUFFER_SIZE=512"
Environment="UNSAFE_SKIP_BACKUP=true"
User=$USER
ExecStart=${HOME}/go/bin/cosmovisor start
Restart=always
RestartSec=3
LimitNOFILE=infinity
LimitNPROC=infinity
[Install]
WantedBy=multi-user.target
" >cosmovisor.service

sudo mv cosmovisor.service /lib/systemd/system/cosmovisor.service
sudo systemctl daemon-reload
sudo systemctl restart systemd-journald
# sudo systemctl start cosmovisor
