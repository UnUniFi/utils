import { cosmosclient } from 'cosmos-client';
import { QueryApi } from '../../../openapi-eurx';

export function cdp(sdk: cosmosclient.CosmosSDK, id: string) {
  return new QueryApi(undefined, sdk.url).cdp(id);
}

export function allCdps(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).cdpAll(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).cdpParams();
}
