
if [ -z $SETUP_NODE_ENV ]; then
  echo "-----------------"
  echo "not setup env"
  echo "-----------------"
fi

cd $HOME
sudo apt update -y; sudo apt upgrade -y
sudo apt install -y jq git build-essential
# go install
wget https://go.dev/dl/go1.19.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
echo 'PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
echo 'PATH=$PATH:~/go/bin' >> ~/.bashrc
source ~/.bashrc

# node install
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && sudo apt-get install -y nodejs
