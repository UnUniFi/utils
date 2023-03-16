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
if [ -z $DL_CHAIN_BIN ]; then
  echo "-----------------"
  echo "chain build"
  echo "-----------------"
  git clone $CHAIN_REPO chain_repo
  cd chain_repo
  git checkout $CHAIN_REPO_BRANCHE
  make install
else
  echo "-----------------"
  echo "chain download"
  echo "-----------------"
  mkdir chain_dl
  cd chain_dl
  wget $DL_CHAIN_BIN -O $TARGET
  sudo chmod 777 $TARGET
  if [ ! -d ~/go/bin ]; then
    mkdir ~/go/bin
  fi
  mv $TARGET ~/go/bin 
fi

