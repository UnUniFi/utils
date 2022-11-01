#!/bin/sh
rm -rf $HOME/.hermes;
mkdir -p $HOME/.hermes;
mkdir -p $HOME/.hermes/keys;
cp config.toml $HOME/.hermes;
echo "
[[chains]]
id = 'ununifi-test-private-m1'
rpc_addr = 'http://127.0.0.1:26757'
grpc_addr = 'http://127.0.0.1:9092'
websocket_addr = 'ws://127.0.0.1:26757/websocket'
rpc_timeout = '10s'
account_prefix = 'ununifi'
key_name = 'ununifi'
address_type = { derivation = 'cosmos' }
store_prefix = 'ibc'
default_gas = 2000000
max_gas = 10000000
gas_price = { price = 0.005, denom = 'uguu' }
gas_multiplier = 1.1
max_msg_num = 25
max_tx_size = 180000
clock_drift = '10s'
max_block_time = '10s'
trusting_period = '14days'
memo_prefix = ''
trust_threshold = { numerator = '1', denominator = '3' }
[chains.packet_filter]
policy = 'allow'
list = [
   ['transfer', 'channel-0'], # osmo-test
]

[[chains]]
id = 'osmo-test'
rpc_addr = 'http://127.0.0.1:26657'
grpc_addr = 'http://127.0.0.1:9090'
websocket_addr = 'ws://127.0.0.1:26657/websocket'
rpc_timeout = '10s'
account_prefix = 'osmo'
key_name = 'osmosis'
address_type = { derivation = 'cosmos' }
store_prefix = 'ibc'
default_gas = 5000000
max_gas = 15000000
gas_price = { price = 0.0026, denom = 'stake' }
gas_multiplier = 1.1
max_msg_num = 20
max_tx_size = 209715
clock_drift = '20s'
max_block_time = '10s'
trusting_period = '10days'
memo_prefix = 'Relayed by Czar'
trust_threshold = { numerator = '1', denominator = '3' }
[chains.packet_filter]
policy = 'allow'
list = [
  ['transfer', 'channel-0'], # ununif
]" >> ~/.hermes/config.toml


echo "figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance" > mnt.txt;
hermes keys add --chain ununifi-test-private-m1 --mnemonic-file mnt.txt;
hermes keys add --chain osmo-test --mnemonic-file mnt.txt;
hermes create channel --a-chain ununifi-test-private-m1 --b-chain osmo-test --a-port transfer --b-port transfer --new-client-connection --yes;
hermes start
