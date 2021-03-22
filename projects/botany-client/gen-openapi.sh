#!/usr/bin/env bash

rm swagger.yaml
cp ~/src/github.com/lcnem/jpyx/docs/client/swagger.yaml ./swagger.yaml

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi-jpyx/

rm swagger.yaml
cp ~/src/github.com/lcnem/eurx/docs/client/swagger.yaml ./swagger.yaml

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi-eurx/

rm swagger.yaml
