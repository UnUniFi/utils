#!/bin/bash

# if not passing arguments to this script, execute init command
if [ $# -lt 1 ]; then
  execute_command="init"
else
  execute_command=$1
fi

echo "Executing $execute_command command..."

version=$($DAEMON_NAME version --long | grep cosmos_sdk_version | awk -F: '{print $2}' | tr -d '[:space:]')

# バージョン番号の "v" を削除
version=${version#v}

# バージョン番号を "." で分割
IFS='.' read -ra VERSION_PARTS <<< "$version"

# メジャーバージョンとマイナーバージョンを取得
major_version=${VERSION_PARTS[0]}
minor_version=${VERSION_PARTS[1]}


# check execute_command
if [ "$execute_command" = "init" ]; then
  if (( major_version > 0 || minor_version >= 47 )); then
    echo "This is version 0.47 or later."
    $DAEMON_NAME genesis add-genesis-account my_validator 100000000000uguu,100000000000ubtc;
    $DAEMON_NAME genesis add-genesis-account faucet 500000000000uguu,5000000000ubtc,50000000000ueth;
    $DAEMON_NAME genesis gentx my_validator 100000000uguu --chain-id $CHAIN_ID --keyring-backend test;
    $DAEMON_NAME genesis collect-gentxs;
  else
    echo "This is before version 0.47."
    $DAEMON_NAME add-genesis-account my_validator 100000000000uguu,100000000000ubtc;
    $DAEMON_NAME add-genesis-account faucet 500000000000uguu,5000000000ubtc,50000000000ueth;
    $DAEMON_NAME gentx my_validator 100000000uguu --chain-id $CHAIN_ID --keyring-backend test;
    $DAEMON_NAME collect-gentxs;
  fi
  exit 0;
elif [ "$execute_command" = "reset-node" ]; then
  VAL=my_validator
  FAUCET=faucet
  USER1=user1
  USER2=user2
  USER3=user3
  USER4=user4
  PRICEFEED=pricefeed
  if (( major_version > 0 || minor_version >= 47 )); then
    echo "This is version 0.47 or later."
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $VAL --keyring-backend test -a) 1000000000000uguu,100000000000ubtc;
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $USER1 --keyring-backend test -a) 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $USER2 --keyring-backend test -a) 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $USER3 --keyring-backend test -a) 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $USER4 --keyring-backend test -a) 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $FAUCET --keyring-backend test -a) 50000000000000uguu,500000000000ubtc,50000000000ueth,50000000000000uusdc;
    $DAEMON_NAME genesis add-genesis-account $($DAEMON_NAME keys show $PRICEFEED --keyring-backend test -a) 100000000000uguu,100000000000000ubtc,100000000000000uusdc;
    $DAEMON_NAME genesis gentx $VAL 1000000000uguu --chain-id $CHAIN_ID --keyring-backend test;
    $DAEMON_NAME genesis collect-gentxs;
  else
    echo "This is before version 0.47."
    $DAEMON_NAME add-genesis-account my_validator 1000000000000uguu,100000000000ubtc;
    $DAEMON_NAME add-genesis-account user1 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME add-genesis-account user2 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME add-genesis-account user3 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME add-genesis-account user4 100000000000uguu,100000000000ubtc,50000000000uusdc;
    $DAEMON_NAME add-genesis-account faucet 50000000000000uguu,500000000000ubtc,50000000000ueth,50000000000000uusdc;
    $DAEMON_NAME add-genesis-account $PRICEFEED 100000000000uguu,100000000000000ubtc,100000000000000uusdc;
    $DAEMON_NAME gentx my_validator 1000000000uguu --chain-id $CHAIN_ID --keyring-backend test;
    $DAEMON_NAME collect-gentxs;
  fi
  exit 0;
fi
