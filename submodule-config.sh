#!/usr/bin/env bash

# git submodule add https://github.com/lcnem/cosmoscan.git cosmoscan
# git commit -m "feat: submodule add"

cd cosmoscan
git config core.sparsecheckout true
echo projects/cosmoscan/src/model/ > ../.git/modules/cosmoscan/info/sparse-checkout
git read-tree -mu HEAD

cd ..
