import { cosmosclient } from 'cosmos-client';
import { QueryApi } from '../../../openapi-eurx';

export function cdp(sdk: cosmosclient.CosmosSDK, owner: cosmosclient.AccAddress, collateralType: string) {
  return new QueryApi(undefined, sdk.url).cdp(owner.toString(), collateralType);
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

export function allAccounts(sdk: cosmosclient.CosmosSDK) {
  return new QueryApi(undefined, sdk.url).accountAll();
}

export function allDeposits(sdk: cosmosclient.CosmosSDK, owner: cosmosclient.AccAddress, collateralType: string) {
  return new QueryApi(undefined, sdk.url).depositAll(owner.toString(), collateralType);
}
