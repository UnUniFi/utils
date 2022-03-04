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

export const supportCurrencyAva = {
  JPY30: 'JPY30',
  EUR30: 'EUR30'
} as const;
export type SupportCurrencyAva = typeof supportCurrencyAva[keyof typeof supportCurrencyAva];

type MarketCurrencyType = {
  [key:string]:SupportCurrency | SupportCurrencyAva,
};

// todo: move constant
export const MarketCurrencyMap:MarketCurrencyType = {
  'ubtc:jpy':"JPY",
  'ubtc:jpy:30':"JPY30",
  'ubtc:eur':"EUR",
  'ubtc:eur:30':"EUR30"
};

 