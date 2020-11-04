import { CosmosSDK } from 'cosmos-client';
import { Observable, zip } from 'rxjs';
import { map, mergeMap, filter } from 'rxjs/operators';
import { CDP, CdpParameters, CollateralParam } from '../x/cdp/api';
import { pricefeedPriceMarketIdGet } from '../x/pricefeed/module';

const getCollateralParamsStream = (
  denom: Observable<string>,
  cdpParams: Observable<CdpParameters>,
) =>
  zip(denom, cdpParams).pipe(
    map(([denom, params]) =>
      params.collateral_params.find((param) => param.denom === denom),
    ),
    filter(
      (collateralParams): collateralParams is CollateralParam =>
        collateralParams !== undefined,
    ),
  );

export const getSpotPriceStream = (
  sdk: CosmosSDK,
  denom: Observable<string>,
  cdpParams: Observable<CdpParameters>,
) => {
  return getCollateralParamsStream(denom, cdpParams).pipe(
    mergeMap((collateralParams) =>
      pricefeedPriceMarketIdGet(sdk, collateralParams.spot_market_id),
    ),
    map((res) => res.result),
  );
};

export const getLiquidationPriceStream = (
  sdk: CosmosSDK,
  denom: Observable<string>,
  cdpParams: Observable<CdpParameters>,
) => {
  return getCollateralParamsStream(denom, cdpParams).pipe(
    mergeMap((collateralParams) =>
      pricefeedPriceMarketIdGet(sdk, collateralParams.liquidation_market_id),
    ),
    map((res) => res.result),
  );
};
