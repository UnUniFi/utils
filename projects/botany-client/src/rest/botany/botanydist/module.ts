import { cosmosclient } from 'cosmos-client';
import { QueryApi } from '../../../openapi';

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).botanydistParams();
}
