import { CDP, CdpParameters } from '../x/cdp/api';
import { Price } from '../x/pricefeed/api';

export const getWithdrawLimit = (
  cdp: CDP,
  cdpParams: CdpParameters,
  spotPrice: Price,
) => {
  const collateralDenom = cdp.cdp.collateral.denom;
  const currentCollateralAmount = Number.parseInt(cdp.cdp.collateral.amount!);
  const currentPrincipalAmount = Number.parseInt(cdp.cdp.principal.amount!);
  const currentAccumulatedFees = Number.parseInt(
    cdp.cdp.accumulated_fees.amount!,
  );
  const principalTotal = currentPrincipalAmount + currentAccumulatedFees;
  const principalConversionFactor = Number.parseInt(
    cdpParams.debt_param.conversion_factor,
  );

  const collateralParams = cdpParams.collateral_params.find(
    (param) => param.denom === collateralDenom,
  );
  if (collateralParams === undefined) {
    throw new Error(`Parameters for ${collateralDenom} not found`);
  }
  const liquidationRatio = Number.parseFloat(
    collateralParams.liquidation_ratio,
  );
  const collateralConversionFactor = Number.parseInt(
    collateralParams.conversion_factor,
  );
  const price = Number.parseFloat(spotPrice.price);

  const conversionFactor = Math.pow(
    10,
    collateralConversionFactor - principalConversionFactor,
  );

  return Math.floor(
    currentCollateralAmount -
      (liquidationRatio * principalTotal * conversionFactor) / price,
  );
};

export const getIssueLimit = (
  cdp: CDP,
  cdpParams: CdpParameters,
  liquidationPrice: Price,
) => {
  const collateralDenom = cdp.cdp.collateral.denom;
  const currentCollateralAmount = Number.parseInt(cdp.cdp.collateral.amount!);
  const currentPrincipalAmount = Number.parseInt(cdp.cdp.principal.amount!);
  const currentAccumulatedFees = Number.parseInt(
    cdp.cdp.accumulated_fees.amount!,
  );
  const principalTotal = currentPrincipalAmount + currentAccumulatedFees;
  const principalConversionFactor = Number.parseInt(
    cdpParams.debt_param.conversion_factor,
  );

  const collateralParams = cdpParams.collateral_params.find(
    (param) => param.denom === collateralDenom,
  );
  if (collateralParams === undefined) {
    throw new Error(`Parameters for ${collateralDenom} not found`);
  }
  const liquidationRatio = Number.parseFloat(
    collateralParams.liquidation_ratio,
  );
  const collateralConversionFactor = Number.parseInt(
    collateralParams.conversion_factor,
  );
  const price = Number.parseFloat(liquidationPrice.price!);

  const conversionFactor = Math.pow(
    10,
    principalConversionFactor - collateralConversionFactor,
  );

  console.log({
    currentCollateralAmount,
    price,
    conversionFactor,
    liquidationRatio,
    principalTotal,
  });

  return Math.floor(
    (currentCollateralAmount * price * conversionFactor) / liquidationRatio -
      principalTotal,
  );
};
