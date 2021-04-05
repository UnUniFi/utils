import axios from "axios";

import { FiatCurrencyPrices } from "src/domain/fiat-currency";
import { IFxClient } from "./interface";

export default class OpenExchangeRatesClient implements IFxClient {
  private priceData: FiatCurrencyPrices | null = null;
  constructor(private appId: string) { }

  async getLatestRates() {
    const now = Math.floor(new Date().getTime() / 1000);
    if (!this.priceData || now >= this.priceData.timestamp + 60 * 60) {
      const client = axios.create({
        baseURL: "https://openexchangerates.org/api",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      });
      const result = await client.get("/latest.json", {
        params: { app_id: this.appId },
      });

      return (this.priceData = result.data);
    }
    return this.priceData;
  }
}
