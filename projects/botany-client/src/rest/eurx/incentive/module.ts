import { cosmosclient } from 'cosmos-client';
import { QueryApi } from '../../../openapi-eurx';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).incentiveParams();
}
