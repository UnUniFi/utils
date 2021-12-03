import { QueryApi } from '../../../openapi';
import { cosmosclient } from '@cosmos-client/core';

export function auction(sdk: cosmosclient.CosmosSDK, id: string) {
  return new QueryApi(undefined, sdk.url).auction(id);
}

export function allAuctions(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).auctionAll(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function params(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).auctionParams();
}
