import { CosmosSDK, codec, AccAddress } from 'cosmos-client';
import { PricefeedApi } from './api';

export function pricefeedPriceMarketIdGet(sdk: CosmosSDK, marketId: string) {
  return new PricefeedApi(undefined, sdk.url)
    .pricefeedPriceMarketIdGet(marketId)
    .then((res) => res.data);
}
