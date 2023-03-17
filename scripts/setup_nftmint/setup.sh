jq '.app_state.nftmint.class_attributes_list = [
  {
    "base_token_uri": "ipfs://testcid/",
    "class_id": "ununifi-1AFC3C85B52311F13161F724B284EF900458E3B3",
    "minting_permission": "Anyone",
    "owner": "ununifi155u042u8wk3al32h3vzxu989jj76k4zcu44v6w",
    "token_supply_cap": "100000"
  },
  {
    "base_token_uri": "ipfs://testcid/",
    "class_id": "ununifi-D4AC8DBC54261BB1B6ACBBF721A60D131A048F83",
    "minting_permission": "OnlyOwner",
    "owner": "ununifi155u042u8wk3al32h3vzxu989jj76k4zcu44v6w",
    "token_supply_cap": "100000"
  }
]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
jq '.app_state.nft.classes = [
  {
    "data": null,
    "description": "",
    "id": "ununifi-1AFC3C85B52311F13161F724B284EF900458E3B3",
    "name": "Test",
    "symbol": "",
    "uri": "",
    "uri_hash": ""
  },
  {
    "data": null,
    "description": "",
    "id": "ununifi-D4AC8DBC54261BB1B6ACBBF721A60D131A048F83",
    "name": "Test",
    "symbol": "",
    "uri": "",
    "uri_hash": ""
  }
]' $NODE_HOME/config/genesis.json > temp.json ; mv temp.json $NODE_HOME/config/genesis.json;
