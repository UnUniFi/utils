export interface FiatCurrencyPrices {
  timestamp: number;
  base: string;
  rates: { [key: string]: number };
}
