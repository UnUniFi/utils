import { botany } from 'botany-client'

export const getWithdrawLimit = (
  cdp: botany.cdp.Cdp,
  cdpParams: botany.cdp.Params,
  spotPrice: botany.pricefeed.CurrentPrice,
) => {
  const collateralDenom = cdp.collateral?.denom;
  const currentCollateralAmount = Number.parseInt(cdp.collateral?.amount!);
  const currentPrincipalAmount = Number.parseInt(cdp.principal?.amount!);
  const currentAccumulatedFees = Number.parseInt(
    cdp.accumulated_fees?.amount!,
  );
  const principalTotal = currentPrincipalAmount + currentAccumulatedFees;
  const principalConversionFactor = Number.parseInt(
    cdpParams.debt_param?.conversion_factor || '0',
  );

  const collateralParams = cdpParams.collateral_params.find(
    (param) => param.denom === collateralDenom,
  );
  if (collateralParams === undefined) {
    throw new Error(`Parameters for ${collateralDenom} not found`);
  }
  const liquidationRatio = Number.parseFloat(
    collateralParams?.liquidation_ratio || '0',
  );
  const collateralConversionFactor = Number.parseInt(
    collateralParams?.conversion_factor || '0',
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
  cdp: botany.cdp.Cdp,
  cdpParams: botany.cdp.Params,
  liquidationPrice: botany.pricefeed.CurrentPrice,
) => {
  const collateralDenom = cdp.collateral?.denom;
  const currentCollateralAmount = Number.parseInt(cdp.collateral?.amount!);
  const currentPrincipalAmount = Number.parseInt(cdp.principal?.amount!);
  const currentAccumulatedFees = Number.parseInt(
    cdp.accumulated_fees?.amount!,
  );
  const principalTotal = currentPrincipalAmount + currentAccumulatedFees;
  const principalConversionFactor = Number.parseInt(
    cdpParams.debt_param?.conversion_factor || '0',
  );

  const collateralParams = cdpParams.collateral_params.find(
    (param) => param.denom === collateralDenom,
  );
  if (collateralParams === undefined) {
    throw new Error(`Parameters for ${collateralDenom} not found`);
  }
  const liquidationRatio = Number.parseFloat(
    collateralParams.liquidation_ratio || '0',
  );
  const collateralConversionFactor = Number.parseInt(
    collateralParams.conversion_factor || '0',
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
