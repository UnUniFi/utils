import { cosmosclient } from 'cosmos-client';
import { botany, rest } from 'botany-client'
import { Observable, zip } from 'rxjs';
import { map, mergeMap, filter } from 'rxjs/operators';

const getCollateralParamsStream = (
  denom: Observable<string>,
  cdpParams: Observable<botany.cdp.IParams>,
) =>
  zip(denom, cdpParams).pipe(
    map(([denom, params]) =>
      params.collateral_params?.find((param) => param.denom === denom),
    ),
    filter(
      (collateralParams): collateralParams is botany.cdp.CollateralParam =>
        collateralParams !== undefined,
    ),
  );

export const getSpotPriceStream = (
  sdk: cosmosclient.CosmosSDK,
  denom: Observable<string>,
  cdpParams: Observable<botany.cdp.IParams>,
) => {
  return getCollateralParamsStream(denom, cdpParams).pipe(
    mergeMap((collateralParams) =>
      rest.botany.pricefeed.price(sdk, collateralParams.spot_market_id),
    ),
    map((res) => res.data.price!),
  );
};

export const getLiquidationPriceStream = (
  sdk: cosmosclient.CosmosSDK,
  denom: Observable<string>,
  cdpParams: Observable<botany.cdp.IParams>,
) => {
  return getCollateralParamsStream(denom, cdpParams).pipe(
    mergeMap((collateralParams) =>
      rest.botany.pricefeed.price(sdk, collateralParams.liquidation_market_id),
    ),
    map((res) => res.data.price!),
  );
};
