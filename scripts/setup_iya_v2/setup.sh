#!/bin/bash

# Create 4 instances
## iya-v2-node-1 - ubuntu - t2.large - 200GB - iya-v2 $NODE1
## iya-v2-node-2 - ubuntu - t2.large - 200GB - iya-v2 $NODE2
## iya-v2-node-3 - ubuntu - t2.large - 200GB - iya-v2 $NODE3
## iya-node-4 - ubuntu - t3.2xlarge - 500GB - iya-v2 $NODE4

# Setup inbound rules to Anywhere (26656,26657,9090 ports especially)

# setup Osmosis testnet (client node) to setup Go and osmosisd on all the nodes
## reference https://docs.osmosis.zone/networks/join-testnet/
curl -sL https://get.osmosis.zone/install > i.py && python3 i.py
source ~/.bashrc # (to use go)

# prepare testnet locally for 4 node testnet
ununifid testnet --v 4 --output-dir ./iya-v2 --starting-ip-address 192.168.10.2 --chain-id=ununifi-testnet-iya

# update ip address on config.yml files of 4 node directories
# 192.168.10.2 => $NODE1
# 192.168.10.3 => $NODE2
# 192.168.10.4 => $NODE3
# 192.168.10.5 => $NODE4

# update 26756 port to 26656 for p2p connection

# Update voting period to 180s
## "voting_period": "180s"

# zip output directory into iya-v2.zip
iya-v2.zip

# copy node directories to all the servers
scp -i iya-v2.pem iya-v2.zip ubuntu@$NODE1:/home/ubuntu
scp -i iya-v2.pem iya-v2.zip ubuntu@$NODE2:/home/ubuntu
scp -i iya-v2.pem iya-v2.zip ubuntu@$NODE3:/home/ubuntu
scp -i iya-v2.pem iya-v2.zip ubuntu@$NODE4:/home/ubuntu

# execute unzip on all the nodes
sudo apt install unzip
unzip iya-v2.zip 

# setup home directory for each node
## NODE1
mv iya-v2/node0/ ./ununifihome
## NODE2
mv iya-v2/node1/ ./ununifihome 
## NODE3
mv iya-v2/node2/ ./ununifihome 
## NODE4
mv iya-v2/node3/ ./ununifihome 

# setup ununifi daemon on all nodes
git clone https://github.com/UnUniFi/chain/
cd chain/
git checkout feat/iya_v2_sdk_v045
go install ./cmd/ununifid

# start daemon
ununifid start --home=./ununifihome/ununifid
ununifid start --home=./ununifihome/ununifid &> ununifi-daemon.log &
tail -f ununifi-daemon.log 

# check daemon statuses on local computer
ununifid status --node=tcp://$NODE1:26657
ununifid status --node=tcp://$NODE2:26657
ununifid status --node=tcp://$NODE3:26657
ununifid status --node=tcp://$NODE4:26657

# install hermes on node4
# install go-relayer on node4

# start osmosis testnet locally from snapshot
cd osmosis
git checkout v15.0.0-rc4
make install

# setup data directory from snapshot
URL=https://dl2.quicksync.io/osmotestnet-4-pruned.20230321.1210.tar.lz4
wget -O - $URL | lz4 -d | tar -xvf -

# fetch address book 
wget https://snapshots.polkachu.com/testnet-addrbook/osmosis/addrbook.json
# fetch genesis file
wget https://snapshots.polkachu.com/testnet-genesis/osmosis/genesis.json

# update port of osmosis home directory to avoid conflict with ununifi daemon
sed -i -e 's#"tcp://0.0.0.0:26656"#"tcp://0.0.0.0:16656"#g' $HOME/.osmosisd/config/config.toml
sed -i -e 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:16657"#g' $HOME/.osmosisd/config/config.toml
sed -i -e 's#"tcp://0.0.0.0:1317"#"tcp://0.0.0.0:1316"#g' $HOME/.osmosisd/config/app.toml
sed -i -e 's#":8080"#":8081"#g' $HOME/.osmosisd/config/app.toml
sed -i -e 's#"0.0.0.0:9090"#"0.0.0.0:9092"#g' $HOME/.osmosisd/config/app.toml
sed -i -e 's#"0.0.0.0:9091"#"0.0.0.0:9093"#g' $HOME/.osmosisd/config/app.toml

# start osmosis daemon
osmosisd start &> osmosis-daemon.log &
tail -f osmosis-daemon.log 

# setup connection between osmosis and ununifi
nano network/hermes/config.toml
```
# The global section has parameters that apply globally to the relayer operation.
[global]

# Specify the verbosity for the relayer logging output. Default: 'info'
# Valid options are 'error', 'warn', 'info', 'debug', 'trace'.
log_level = 'trace'


# Specify the mode to be used by the relayer. [Required]
[mode]

# Specify the client mode.
[mode.clients]

# Whether or not to enable the client workers. [Required]
enabled = true

# Whether or not to enable periodic refresh of clients. [Default: true]
# Note: Even if this is disabled, clients will be refreshed automatically if
#      there is activity on a connection or channel they are involved with.
refresh = true

# Whether or not to enable misbehaviour detection for clients. [Default: false]
misbehaviour = true

# Specify the connections mode.
[mode.connections]

# Whether or not to enable the connection workers for handshake completion. [Required]
enabled = true

# Specify the channels mode.
[mode.channels]

# Whether or not to enable the channel workers for handshake completion. [Required]
enabled = true

# Specify the packets mode.
[mode.packets]

# Whether or not to enable the packet workers. [Required]
enabled = true

# Parametrize the periodic packet clearing feature.
# Interval (in number of blocks) at which pending packets
# should be eagerly cleared. A value of '0' will disable
# periodic packet clearing. [Default: 100]
clear_interval = 100

# Whether or not to clear packets on start. [Default: false]
clear_on_start = true

# Toggle the transaction confirmation mechanism.
# The tx confirmation mechanism periodically queries the `/tx_search` RPC
# endpoint to check that previously-submitted transactions
# (to any chain in this config file) have delivered successfully.
# Experimental feature. Affects telemetry if set to false.
# [Default: true]
tx_confirmation = true

# The REST section defines parameters for Hermes' built-in RESTful API.
# https://hermes.informal.systems/rest.html
[rest]

# Whether or not to enable the REST service. Default: false
enabled = true

# Specify the IPv4/6 host over which the built-in HTTP server will serve the RESTful
# API requests. Default: 127.0.0.1
host = '127.0.0.1'

# Specify the port over which the built-in HTTP server will serve the restful API
# requests. Default: 3000
port = 3000


# The telemetry section defines parameters for Hermes' built-in telemetry capabilities.
# https://hermes.informal.systems/telemetry.html
[telemetry]

# Whether or not to enable the telemetry service. Default: false
enabled = false

# Specify the IPv4/6 host over which the built-in HTTP server will serve the metrics
# gathered by the telemetry service. Default: 127.0.0.1
host = '127.0.0.1'

# Specify the port over which the built-in HTTP server will serve the metrics gathered
# by the telemetry service. Default: 3001
port = 3001

[[chains]]
id = 'osmo-test-4'
rpc_addr = 'http://127.0.0.1:16657'
grpc_addr = 'http://127.0.0.1:9092'
websocket_addr = 'ws://127.0.0.1:16657/websocket'
rpc_timeout = '10s'
account_prefix = 'osmo'
key_name = 'testkey'
store_prefix = 'ibc'
default_gas = 100000
max_gas = 3000000
gas_price = { price = 0.005, denom = 'uosmo' }
gas_adjustment = 0.1
max_msg_num = 30
max_tx_size = 2097152
clock_drift = '5s'
max_block_time = '10s'
trusting_period = '13days'
trust_threshold = { numerator = '1', denominator = '3' }
address_type = { derivation = 'cosmos' }

[[chains]]
id = 'ununifi-testnet-iya'
rpc_addr = 'http://127.0.0.1:26657'
grpc_addr = 'http://127.0.0.1:9090'
websocket_addr = 'ws://127.0.0.1:26657/websocket'
rpc_timeout = '10s'
account_prefix = 'ununifi'
key_name = 'ununifi'
store_prefix = 'ibc'
default_gas = 100000
max_gas = 3000000
gas_price = { price = 0.001, denom = 'stake' }
gas_adjustment = 0.1
max_msg_num = 30
max_tx_size = 2097152
clock_drift = '5s'
max_block_time = '10s'
trusting_period = '13days'
trust_threshold = { numerator = '1', denominator = '3' }
address_type = { derivation = 'cosmos' }
```

# osmo122mr943pqs6wkh3vphh8mu4urjaljhucyhkphm
hermes -c ./network/hermes/config.toml keys restore osmo-test-4 -m $HERMES_MNEMONIC_1
sleep 5s

# ununifi1v273yww3gk08ym80dw2agxnt8xhhyvg0jq2nxt
hermes -c ./network/hermes/config.toml keys restore ununifi-testnet-iya -m $HERMES_MNEMONIC_2
sleep 5s

# send coins to relayer accounts $HERMES_RELAYER_1 and $HERMES_RELAYER_2

# create connection
hermes -c ./network/hermes/config.toml create connection osmo-test-4 ununifi-testnet-iya
# start hermes
hermes -c ./network/hermes/config.toml start &> hermes-daemon.log &

# setup transfer channel between Osmosis and iya testnet
hermes -c ./network/hermes/config.toml create channel osmo-test-4 ununifi-testnet-iya --port-a transfer --port-b transfer ;

# query channel ids with osmosis and ununifi
ununifid q ibc channel channels;
# ununifi side - channel-id: channel-0
# osmosis side - channel-id: $OSMOSIS_TRANSFER_CHANNEL


osmosisd tx ibc-transfer transfer transfer $OSMOSIS_TRANSFER_CHANNEL $NODE4_ADDR 1000000uosmo --fees=1000uosmo --chain-id=osmo-test-4 --from=demowallet1 --keyring-backend=test -y --broadcast-mode=block --node=http://localhost:16657
ununifid query bank balances $NODE4_ADDR 

# add admin account
ununifid keys add stakeibc_admin --keyring-backend=test --recover

# register host-zone
ununifid tx stakeibc register-host-zone $CONNECTION $HOST_DENOM $ADDRESS_PREFIX $IBC_DENOM $CHANNEL 1 \
    --gas=1000000 --from=stakeibc_admin --chain-id=ununifi-testnet-iya -y --keyring-backend=test;

# register validator for the hostzone to delegate to
ununifid tx stakeibc add-validator osmo-test-4 NextNet.Works $OSMOSIS_ACTIVE_VALIDATOR 10 100 \
    --gas=1000000 --from=stakeibc_admin --chain-id=ununifi-testnet-iya -y --keyring-backend=test;

# configure go-relayer
nano network/relayer/config/config.yaml
```
global:
  api-listen-addr: :5183
  timeout: 10s
  memo: ""
  light-cache-size: 20
chains:
  osmosis:
    type: cosmos
    value:
      key: rly1
      chain-id: osmo-test-4
      rpc-addr: http://127.0.0.1:16657
      account-prefix: osmo
      keyring-backend: test
      gas-adjustment: 1.2
      gas-prices: 0.01uosmo
      min-gas-amount: 0
      debug: false
      timeout: 20s
      output-format: json
      sign-mode: direct
  ununifi:
    type: cosmos
    value:
      key: rly2
      chain-id: ununifi-testnet-iya
      rpc-addr: http://127.0.0.1:26657
      account-prefix: ununifi
      keyring-backend: test
      gas-adjustment: 1.2
      gas-prices: 0.01stake
      min-gas-amount: 0
      debug: false
      timeout: 20s
      output-format: json
      sign-mode: direct
paths:
  ununifi-osmosis:
    src:
      chain-id: ununifi-testnet-iya
      client-id: 07-tendermint-1
      connection-id: connection-1
    dst:
      chain-id: osmo-test-4
      client-id: 07-tendermint-3778
      connection-id: connection-3241
    src-channel-filter:
      rule: ""
      channel-list: []
```

RELAYER_DIR="./network/relayer"

# send tokens to relayer accountss
# echo "Restoring accounts..."
rly keys restore osmosis rly1 "$MNEMONIC_1" --home $RELAYER_DIR
rly keys restore ununifi rly2 "$MNEMONIC_2" --home $RELAYER_DIR

# start go-relayer on daemon mode
rly start ununifi-osmosis --home $RELAYER_DIR &> relayer-daemon.log &
tail -f relayer-daemon.log

# queries
ununifid query yieldaggregator list-strategy $IBC_DENOM
ununifid query yieldaggregator list-vault
ununifid query yieldaggregator params

# proposal txs
ununifid tx yieldaggregator proposal-add-strategy --title="title" --description="description" --deposit=10000000stake \
--denom="$IBC_DENOM" --contract-addr="x/ibc-staking" --name="Osmosis Liquid Staking" \
--from=node4 \
--chain-id=ununifi-testnet-iya --keyring-backend=test \
--gas=300000 -y --broadcast-mode=block

ununifid query gov proposals
ununifid tx gov vote 1 yes --from=node1 --chain-id=ununifi-testnet-iya --keyring-backend=test --gas=300000 -y --broadcast-mode=block
ununifid tx gov vote 1 yes --from=node2 --chain-id=ununifi-testnet-iya --keyring-backend=test --gas=300000 -y --broadcast-mode=block
ununifid tx gov vote 1 yes --from=node3 --chain-id=ununifi-testnet-iya --keyring-backend=test --gas=300000 -y --broadcast-mode=block
ununifid tx gov vote 1 yes --from=node4 --chain-id=ununifi-testnet-iya --keyring-backend=test --gas=300000 -y --broadcast-mode=block

# create vault
ununifid tx yieldaggregator create-vault "$IBC_DENOM" \
"0.01" 10000stake 10000stake "0:1" \
--from=node4 \
--chain-id=ununifi-testnet-iya --keyring-backend=test \
--gas=300000 -y --broadcast-mode=block

# deposit/withdraw txs
ununifid tx yieldaggregator deposit-to-vault 0 2000$IBC_DENOM \
--from=node4 \
--chain-id=ununifi-testnet-iya --keyring-backend=test \
--gas=300000 -y --broadcast-mode=block

# withdraw 
ununifid tx yieldaggregator withdraw-from-vault 0 10yield-aggregator/vaults/0 \
--from=node4 \
--chain-id=ununifi-testnet-iya --keyring-backend=test \
--gas=300000 -y --broadcast-mode=block
