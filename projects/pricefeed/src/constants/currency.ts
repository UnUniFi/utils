import { MarketCurrencyType } from '../domain/data-provider';

export const FIAT_CURRENCIES = ["USD", "EUR", "JPY"];

export const MARKET_CURRENCY_MAP:MarketCurrencyType = {
  'ubtc:jpy':"JPY",
  'ubtc:jpy:30':"JPY30",
  'ubtc:eur':"EUR",
  'ubtc:eur:30':"EUR30",
  'uusdc:usd':"USD",
  'uusdc:usd:30':"USD30"
};
