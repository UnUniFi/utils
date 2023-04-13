#!/bin/bash
set -xe
SCRIPT_DIR=$(cd $(dirname $0); pwd)
# restrt pricefeed
process=$(ps aux | grep "node --inspect=5859 -r ts-node/register ./src/index.ts" | grep -v "grep")

if [ -n "$process" ]; then
  pid=$(echo $process | awk '{print $2}')

  echo "既存のプロセスを終了します。 PID: $pid"
  kill $pid

  while kill -0 $pid 2> /dev/null; do
    sleep 1
  done
fi

# execuute pricefeed
# todo move
cd $SCRIPT_DIR/../../projects/pricefeed
nohup npm run start:dev > output.log 2>&1 &


# restart faucet
process=$(ps aux | grep "faucet" | grep -v "grep")

if [ -n "$process" ]; then
  echo "kill faucet"
  killall faucet
  sleep 1
fi

# todo restrt faucet
$SCRIPT_DIR/../../projects/faucet/run_bk.sh


process=$(ps aux | grep "node index.js" | grep -v "grep")

if [ -n "$process" ]; then
  pid=$(echo $process | awk '{print $2}')

  echo "既存のプロセスを終了します。 PID: $pid"
  kill $pid

  while kill -0 $pid 2> /dev/null; do
    sleep 1
  done
fi

# execuute CI/CD server
cd ~/simple_kick_script-_nodejs_server
git pull
nohup npm run start:serve > output.log 2>&1 &
