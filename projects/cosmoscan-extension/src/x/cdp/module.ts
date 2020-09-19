import { CosmosSDK, codec, AccAddress } from 'cosmos-client';
import { CdpApi, CreateCdpReq, WithdrawCdpReq } from './api';

export function cdpAccountsGet(sdk: CosmosSDK) {
  return new CdpApi(undefined, sdk.url)
    .cdpAccountsGet()
    .then((res) => res.data);
}

export function cdpParametersGet(sdk: CosmosSDK) {
  return new CdpApi(undefined, sdk.url)
    .cdpParametersGet()
    .then((res) => res.data);
}

export function cdpCdpsCdpGet(
  sdk: CosmosSDK,
  ownerAddr: string,
  collateralDenom: string,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpCdpsCdpGet(ownerAddr, collateralDenom)
    .then((res) => res.data);
}

export function cdpCdpsDenomGet(sdk: CosmosSDK, collateralDenom: string) {
  return new CdpApi(undefined, sdk.url)
    .cdpCdpsDenomGet(collateralDenom)
    .then((res) => res.data);
}

export function cdpPost(sdk: CosmosSDK, req: CreateCdpReq) {
  return new CdpApi(undefined, sdk.url).cdpPost(req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  });
}

export function cdpOwnerDenomWithdrawPost(
  sdk: CosmosSDK,
  ownerAddr: AccAddress,
  denom: string,
  req: WithdrawCdpReq,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpOwnerDenomWithdrawPost(ownerAddr, denom, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    });
}
