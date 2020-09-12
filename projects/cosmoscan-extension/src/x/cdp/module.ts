import { CosmosSDK, codec } from 'cosmos-client';
import { CdpApi, CreateCdpReq } from './api';

// export function cdpAccountsGet(sdk: CosmosSDK) {
//   return sdk.wrapResponseWithHeight(
//     new CdpApi(undefined, sdk.url).cdpAccountsGet(),
//   );
// }

export function cdpPost(sdk: CosmosSDK, req: CreateCdpReq) {
  return new CdpApi(undefined, sdk.url).cdpPost(req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  });
}
