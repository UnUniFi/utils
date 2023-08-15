
#!/bin/bash
SCRIPT_DIR=$(cd $(dirname $0); pwd)
nohup $SCRIPT_DIR/faucet --cli-name ununifid --denoms ubtc --keyring-backend test --account-name faucet --port 7000 --credit-amount=100000 --max-credit=2000000 --home=/root/.ununifi > $SCRIPT_DIR/fauet1.log 2>&1 &
nohup $SCRIPT_DIR/faucet --cli-name ununifid --denoms uguu,uusdc --keyring-backend test --account-name faucet --port 7002 --credit-amount=20000000 --max-credit=2000000000 --home=/root/.ununifi > $SCRIPT_DIR/fauet2.log 2>&1 &
