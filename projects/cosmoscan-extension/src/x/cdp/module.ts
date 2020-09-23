import { CosmosSDK, codec, AccAddress } from 'cosmos-client';
import {
  CdpApi,
  CreateCdpReq,
  DrawCdpReq,
  RepayCdpReq,
  DepositCdpReq,
  WithdrawCdpReq,
} from './api';

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

export function cdpCdpsCdpOwnerDenomGet(
  sdk: CosmosSDK,
  ownerAddr: AccAddress,
  denom: string,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpCdpsCdpOwnerDenomGet(ownerAddr, denom)
    .then((res) => res.data);
}

export function cdpCdpsDenomDenomGet(sdk: CosmosSDK, collateralDenom: string) {
  return new CdpApi(undefined, sdk.url)
    .cdpCdpsDenomDenomGet(collateralDenom)
    .then((res) => res.data);
}

export function cdpCdpsCdpDepositsOwnerDenomGet(
  sdk: CosmosSDK,
  ownerAddr: AccAddress,
  denom: string,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpCdpsCdpDepositsOwnerDenomGet(ownerAddr, denom)
    .then((res) => res.data);
}

export function cdpPost(sdk: CosmosSDK, req: CreateCdpReq) {
  return new CdpApi(undefined, sdk.url).cdpPost(req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  });
}

export function cdpOwnerDenomDrawPost(
  sdk: CosmosSDK,
  ownerAddr: AccAddress,
  denom: string,
  req: DrawCdpReq,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpOwnerDenomDrawPost(ownerAddr, denom, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    });
}

export function cdpOwnerDenomRepayPost(
  sdk: CosmosSDK,
  ownerAddr: AccAddress,
  denom: string,
  req: RepayCdpReq,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpOwnerDenomRepayPost(ownerAddr, denom, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    });
}

export function cdpOwnerDenomDepositsPost(
  sdk: CosmosSDK,
  ownerAddr: AccAddress,
  denom: string,
  req: DepositCdpReq,
) {
  return new CdpApi(undefined, sdk.url)
    .cdpOwnerDenomDepositsPost(ownerAddr, denom, req)
    .then((res) => {
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
