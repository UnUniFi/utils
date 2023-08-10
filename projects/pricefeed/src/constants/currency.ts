import { MarketCurrencyType } from '../domain/data-provider';

export const DOLLAR = ["USD"];
export const YEN = ["JPY"];
export const EURO = ["EUR"];

export const MARKET_CURRENCY_MAP:MarketCurrencyType = {
  'ubtc:jpy':"JPY",
  'ubtc:jpy:30':"JPY30",
  'ubtc:eur':"EUR",
  'ubtc:eur:30':"EUR30",
  'uusdc:usd':"USD",
  'uusdc:usd:30':"USD30"
};
