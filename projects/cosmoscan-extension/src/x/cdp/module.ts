import { CosmosSDK, codec } from 'cosmos-client';
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

export function cdpPost(sdk: CosmosSDK, req: CreateCdpReq) {
  return new CdpApi(undefined, sdk.url).cdpPost(req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  });
}

export function cdpOwnerDenomWithdrawPost(
  sdk: CosmosSDK,
  ownerAddr: string,
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
