export type DataProviderConf = {
  dataProviderType: string,
  dataProviderUrl: string,
  dataProviderDataRetentionPeriodMin: string,
  dataProviderStoreType: string,
  dataProviderStoreLocation: string,
};

const supportCurrency = {
  JPY: 'JPY',
  EUR: 'EUR'
} as const;
export type SupportCurrency = typeof supportCurrency[keyof typeof supportCurrency];

type MarketCurrencyType = {
  [key:string]:SupportCurrency,
};

// todo: move constant
export const MarketCurrencyMap:MarketCurrencyType = {
  'ubtc:jpy':"JPY",
  'ubtc:jpy:30':"JPY",
  'ubtc:eur':"EUR",
  'ubtc:eur:30':"EUR"
};

 