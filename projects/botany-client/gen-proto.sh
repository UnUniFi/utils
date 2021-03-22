#!/usr/bin/env bash

rm -r proto
rm -r proto-thirdparty
mkdir proto
cp -r ~/src/github.com/lcnem/jpyx/proto ./proto/jpyx
cp -r ~/src/github.com/lcnem/eurx/proto ./proto/eurx
cp -r ~/src/github.com/lcnem/jpyx/proto-thirdparty ./proto-thirdparty
rm -r ./proto/eurx/auction
rm -r ./proto/eurx/cdp
rm -r ./proto/eurx/pricefeed

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_files=()

for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

npx pbjs \
  -o ./src/proto.js \
  -t static-module \
  -w es6 \
  --es6 \
  --force-long \
  --keep-case \
  --no-create \
  --path=./proto/jpyx/ \
  --path=./proto/eurx/ \
  --path=./proto-thirdparty/ \
  ${proto_files[@]}

npx pbts \
  -o ./src/proto.d.ts \
  ./src/proto.js

rm -r proto
rm -r proto-thirdparty
