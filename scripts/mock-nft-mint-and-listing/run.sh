#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)
. $SCRIPT_DIR/var.sh

for ipfscid in ${ipfscids[@]}; do
  baseuri="ipfs://${ipfscid}/"
  classuri="${baseuri}/class"
  ununifid tx nftmint create-class example_s${ucounter} $baseuri 4 0 --symbol unexs${ucounter} --class-uri $classuri --description="this is example nft collection for ununifi" --chain-id=$chainid --from=my_validator --keyring-backend=test --gas=300000 -y --broadcast-mode=block | jq .
  classid=$(ununifid q nftmint class-ids-by-owner  $(ununifid keys show -a my_validator) --output json |jq .owning_class_id_list.class_id[$ucounter] |sed -e 's/\"//g')
  ununifid q nftmint class-attributes $classid;
  ununifid tx nftmint mint-nft $classid a01 $user1 --chain-id=$chainid --from=my_validator --keyring-backend=test --gas=300000 -y --broadcast-mode=block;
  ununifid tx nftmint mint-nft $classid a02 $user2 --chain-id=$chainid --from=my_validator --keyring-backend=test --gas=300000 -y --broadcast-mode=block;
  ununifid tx nftmint mint-nft $classid a03 $user3 --chain-id=$chainid --from=my_validator --keyring-backend=test --gas=300000 -y --broadcast-mode=block;
  ununifid tx nftmint mint-nft $classid a04 $user4 --chain-id=$chainid --from=my_validator --keyring-backend=test --gas=300000 -y --broadcast-mode=block;
  ununifid q nft nfts --owner $user1;


  ununifid tx nftmarket listing $classid a01 --chain-id  $chainid --from user1 --keyring-backend test --gas 300000 -y;
  ununifid tx nftmarket listing $classid a02 --chain-id  $chainid --from user2 --keyring-backend test --gas 300000 -y;
  ununifid tx nftmarket listing $classid a03 --chain-id  $chainid --from user3 --keyring-backend test --gas 300000 -y;
  #ununifid tx nftmarket listing $classid a04 --chain-id  $chainid --from user4 --keyring-backend test --gas 300000 -y;
  ucounter=`expr $ucounter + 1`
done


