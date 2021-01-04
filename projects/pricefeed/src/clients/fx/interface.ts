import { FiatCurrencyPrices } from "src/domain/fiat-currency";

export interface IFxClient {
  getLatestRates(): Promise<FiatCurrencyPrices>;
}
