#!/usr/bin/env bash

# git submodule add https://github.com/ununifi/telescope.git telescope
# git commit -m "feat: submodule add"

cd telescope
git config core.sparsecheckout true
echo projects/telescope/src/model/ > ../.git/modules/telescope/info/sparse-checkout
git read-tree -mu HEAD

cd ..
