export type DataProviderConf = {
  dataProviderType: string,
  dataProviderUrl: string,
  dataProviderDataRetentionPeriodMin: string,
  dataProviderStoreType: string,
  dataProviderStoreLocation: string,
};

const supportCurrency = {
  JPY: 'JPY',
  EUR: 'EUR',
  USD: 'USD'
} as const;
export type SupportCurrency = typeof supportCurrency[keyof typeof supportCurrency];

export const supportCurrencyAva = {
  JPY30: 'JPY30',
  EUR30: 'EUR30',
  USD30: 'USD30'
} as const;
export type SupportCurrencyAva = typeof supportCurrencyAva[keyof typeof supportCurrencyAva];

export type MarketCurrencyType = {
  [key:string]:SupportCurrency | SupportCurrencyAva,
};

