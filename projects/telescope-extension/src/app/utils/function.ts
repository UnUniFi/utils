import { ununifi } from 'ununifi-client';
import { InlineResponse2004Cdp } from 'ununifi-client/esm/openapi';

export const getWithdrawLimit = (
  cdp: InlineResponse2004Cdp,
  cdpParams: ununifi.cdp.IParams,
  spotPrice: ununifi.pricefeed.ICurrentPrice,
) => {
  const collateralType = cdp.type;
  const currentCollateralAmount = Number.parseInt(cdp.collateral?.amount!);
  const currentPrincipalAmount = Number.parseInt(cdp.principal?.amount!);
  const currentAccumulatedFees = Number.parseInt(cdp.accumulated_fees?.amount!);
  const principalTotal = currentPrincipalAmount + currentAccumulatedFees;
  const principalDebtParam = cdpParams.debt_params?.find(
    (debtParam) => debtParam.denom == cdp.principal?.denom,
  );
  const principalConversionFactor = Number.parseInt(principalDebtParam?.conversion_factor || '0');

  const collateralParams = cdpParams.collateral_params?.find(
    (param) => param.type === collateralType,
  );
  if (collateralParams === undefined) {
    throw new Error(`Parameters for ${collateralType} not found`);
  }
  const liquidationRatio = Number.parseFloat(collateralParams?.liquidation_ratio || '0');
  const collateralConversionFactor = Number.parseInt(collateralParams?.conversion_factor || '0');
  const price = Number.parseFloat(spotPrice?.price || '0');

  const conversionFactor = Math.pow(10, collateralConversionFactor - principalConversionFactor);

  return Math.floor(
    currentCollateralAmount - (liquidationRatio * principalTotal * conversionFactor) / price,
  );
};

export const getIssueLimit = (
  cdp: InlineResponse2004Cdp,
  cdpParams: ununifi.cdp.IParams,
  liquidationPrice: ununifi.pricefeed.ICurrentPrice,
) => {
  const currentCollateralAmount = Number.parseInt(cdp.collateral?.amount!);
  const currentPrincipalAmount = Number.parseInt(cdp.principal?.amount!);
  const currentAccumulatedFees = Number.parseInt(cdp.accumulated_fees?.amount!);
  const principalDebtParam = cdpParams.debt_params?.find(
    (debtParam) => debtParam.denom == cdp.principal?.denom,
  );
  const principalConversionFactor = Number.parseInt(principalDebtParam?.conversion_factor || '0');
  const price = Number.parseFloat(liquidationPrice.price!);

  const collateralType = cdp.type;
  const collateralParams = cdpParams.collateral_params?.find(
    (param) => param.type === collateralType,
  );
  if (collateralParams === undefined) {
    throw new Error(`Parameters for ${collateralType} not found`);
  }
  const liquidationRatio = Number.parseFloat(collateralParams.liquidation_ratio || '0');
  const collateralConversionFactor = Number.parseInt(collateralParams.conversion_factor || '0');

  return calculateIssueLimit(
    currentCollateralAmount,
    price,
    collateralConversionFactor,
    principalConversionFactor,
    liquidationRatio,
    currentPrincipalAmount,
    currentAccumulatedFees,
  );
};

export const getCreateLimit = (
  cdp: InlineResponse2004Cdp,
  cdpParams: ununifi.cdp.IParams,
  InputCollateralAmount: number,
  selectedCollateralType: string,
  liquidationPrice: ununifi.pricefeed.ICurrentPrice,
) => {
  const collateralParams = cdpParams.collateral_params?.find(
    (param) => param.type === selectedCollateralType,
  );
  const liquidationRatio = Number.parseFloat(collateralParams?.liquidation_ratio || '0');
  const principalDebtParam = cdpParams.debt_params?.find(
    (debtParam) => debtParam.denom == cdp.principal?.denom,
  );
  const principalConversionFactor = Number.parseInt(principalDebtParam?.conversion_factor || '0');
  const collateralConversionFactor = Number.parseInt(collateralParams?.conversion_factor || '0');
  const price = Number.parseFloat(liquidationPrice.price!);

  return calculateIssueLimit(
    InputCollateralAmount,
    price,
    collateralConversionFactor,
    principalConversionFactor,
    liquidationRatio,
    0,
    0,
  );
};

const calculateIssueLimit = (
  currentCollateralAmount: number,
  price: number,
  collateralConversionFactor: number,
  principalConversionFactor: number,
  liquidationRatio: number,
  currentPrincipalAmount: number,
  currentAccumulatedFees: number,
) => {
  const principalTotal = currentPrincipalAmount + currentAccumulatedFees;
  const conversionFactor = Math.pow(10, principalConversionFactor - collateralConversionFactor);
  return Math.floor(
    (currentCollateralAmount * price * conversionFactor) / liquidationRatio - principalTotal,
  );
};
