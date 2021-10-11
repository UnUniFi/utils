import { botany, rest } from 'botany-client';
import { cosmosclient } from 'cosmos-client';
import { Observable, zip } from 'rxjs';
import { map, mergeMap, filter } from 'rxjs/operators';

const getCollateralParamsStream = (
  collateralType: Observable<string>,
  cdpParams: Observable<botany.cdp.IParams>,
) =>
  zip(collateralType, cdpParams).pipe(
    map(([collateralType, params]) => {
      return params.collateral_params?.find((param) => param.type === collateralType);
    }),
    filter(
      (collateralParams): collateralParams is botany.cdp.CollateralParam =>
        collateralParams !== undefined,
    ),
  );

export const getSpotPriceStream = (
  sdk: cosmosclient.CosmosSDK,
  collateralType: Observable<string>,
  cdpParams: Observable<botany.cdp.IParams>,
) => {
  return getCollateralParamsStream(collateralType, cdpParams).pipe(
    mergeMap((collateralParams) =>
      rest.botany.pricefeed.price(sdk, collateralParams.spot_market_id),
    ),
    map((res) => res.data.price!),
  );
};

export const getLiquidationPriceStream = (
  sdk: cosmosclient.CosmosSDK,
  collateralType: Observable<string>,
  cdpParams: Observable<botany.cdp.IParams>,
) => {
  return getCollateralParamsStream(collateralType, cdpParams).pipe(
    mergeMap((collateralParams) =>
      rest.botany.pricefeed.price(sdk, collateralParams.liquidation_market_id),
    ),
    map((res) => res.data.price!),
  );
};
