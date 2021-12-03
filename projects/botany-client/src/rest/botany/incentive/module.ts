import { QueryApi } from '../../../openapi';
import { cosmosclient } from '@cosmos-client/core';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).incentiveParams();
}
