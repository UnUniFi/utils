import { cosmosclient } from '@cosmos-client/core';
import { Observable, zip } from 'rxjs';
import { map, mergeMap, filter } from 'rxjs/operators';
import { ununifi, rest } from 'ununifi-client';

const getCollateralParamsStream = (
  collateralType: Observable<string>,
  cdpParams: Observable<ununifi.cdp.IParams>,
) =>
  zip(collateralType, cdpParams).pipe(
    map(([collateralType, params]) => {
      return params.collateral_params?.find((param) => param.type === collateralType);
    }),
    filter(
      (collateralParams): collateralParams is ununifi.cdp.CollateralParam =>
        collateralParams !== undefined,
    ),
  );

export const getSpotPriceStream = (
  sdk: cosmosclient.CosmosSDK,
  collateralType: Observable<string>,
  cdpParams: Observable<ununifi.cdp.IParams>,
) => {
  return getCollateralParamsStream(collateralType, cdpParams).pipe(
    mergeMap((collateralParams) =>
      rest.ununifi.pricefeed.price(sdk, collateralParams.spot_market_id),
    ),
    map((res) => res.data.price!),
  );
};

export const getLiquidationPriceStream = (
  sdk: cosmosclient.CosmosSDK,
  collateralType: Observable<string>,
  cdpParams: Observable<ununifi.cdp.IParams>,
) => {
  return getCollateralParamsStream(collateralType, cdpParams).pipe(
    mergeMap((collateralParams) =>
      rest.ununifi.pricefeed.price(sdk, collateralParams.liquidation_market_id),
    ),
    map((res) => res.data.price!),
  );
};
