#!/bin/bash
set -xe
SCRIPT_DIR=$(cd $(dirname $0); pwd)
# restrt pricefeed
process=$(ps aux | grep "npm run start:dev" | grep -v "grep")

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
cd $SCRIPT_DIR/../../project/pricefeed
nohup npm run start:dev > output.log 2>&1 &


# restart faucet
process=$(ps aux | grep "faucet" | grep -v "grep")

if [ -n "$process" ]; then
  killall faucet
  sleep 1
fi

# todo restrt faucet
$SCRIPT_DIR/../../project/faucet/run_bk.sh


process=$(ps aux | grep "npm run start:serve" | grep -v "grep")

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
cd ~/simple_kick_script-_nodejs_server
git pull
nohup npm run start:serve > output.log 2>&1 &
