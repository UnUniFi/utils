import ccxt from "ccxt";
import { Market, Price, Ticker, CandleSticks } from "../domain/market-price";

export default class CcxtClient {
  async fetchTickers(fiatCurrencies: string[], cryptoCurrency: string) {
    const tickers: Ticker[] = [];
    await Promise.allSettled(
      ccxt.exchanges.map(async (exchangeName) => {
        const markets = await this.fetchSupportedMarkets(
          exchangeName,
          fiatCurrencies,
          cryptoCurrency,
        );
        if (markets.length > 0) {
          const symbols = markets.map((m) => `${m.base}/${m.quote}`);
          const fetchedTickers = await this.fetchTickersBySymbols(
            exchangeName,
            symbols,
          );

          for (const ticker of fetchedTickers) {
            if (this.validateTicker(ticker)) {
              tickers.push(ticker);
            }
          }
        }
      }),
    );
    return tickers;
  }

  async fetchCandleSticks(
    fiatCurrencies: string[],
    cryptoCurrency: string,
    interval: string,
    num: number,
  ) {
    const candleSticks: CandleSticks[] = [];
    await Promise.allSettled(
      ccxt.exchanges.map(async (exchangeName) => {
        const markets = await this.fetchSupportedMarkets(
          exchangeName,
          fiatCurrencies,
          cryptoCurrency,
        );
        if (markets.length > 0) {
          const symbols = markets.map((m) => `${m.base}/${m.quote}`);

          await Promise.allSettled(
            symbols.map(async (symbol) => {
              const data = await this.fetchCandleSticksBySymbol(
                exchangeName,
                symbol,
                interval,
                num,
              );
              if (data.data.length > 0) {
                candleSticks.push(data);
              }
            }),
          );
        }
      }),
    );
    return candleSticks;
  }

  private async fetchSupportedMarkets(
    exchangeName: string,
    fiatCurrencies: string[],
    cryptoCurrency: string,
  ) {
    const supportedMarkets: Market[] = [];
    const CCXT = ccxt as any;
    const exchange = new CCXT[exchangeName]({
      enableRateLimit: true,
    }) as ccxt.Exchange;
    const markets = await exchange.loadMarkets();
    const symbols = Object.keys(markets);

    symbols
      .filter((symbol) =>
        fiatCurrencies.some((fiat) => symbol === `${cryptoCurrency}/${fiat}`),
      )
      .forEach((symbol) => {
        const [base, quote] = symbol.split("/");
        supportedMarkets.push({
          exchange: exchangeName,
          base,
          quote,
        });
      });

    return supportedMarkets;
  }

  private async fetchTickersBySymbols(
    exchangeName: string,
    symbols: string[],
  ): Promise<Ticker[]> {
    const CCXT = ccxt as any;
    const exchange = new CCXT[exchangeName]({
      enableRateLimit: true,
    }) as ccxt.Exchange;
    const prices = await exchange.fetchTickers(symbols);
    return Object.values(prices)
      .filter((price) => symbols.some((sym) => sym === price.symbol))
      .map(
        (price): Ticker => {
          const [base, quote] = price.symbol.split("/");

          return {
            market: {
              exchange: exchangeName,
              base,
              quote,
            },
            data: {
              timestamp: price.timestamp,
              lastPrice: price.last ?? -1,
              volume: price.baseVolume ?? -1,
            },
          };
        },
      );
  }

  private async fetchCandleSticksBySymbol(
    exchangeName: string,
    symbol: string,
    interval: string,
    num: number,
  ): Promise<CandleSticks> {
    const CCXT = ccxt as any;
    const exchange = new CCXT[exchangeName]({
      enableRateLimit: true,
    }) as ccxt.Exchange;
    const candlesticks = await exchange.fetchOHLCV(
      symbol,
      interval,
      undefined,
      num,
    );
    const [base, quote] = symbol.split("/");
    const data = candlesticks.map(
      (cs): Price => ({
        timestamp: cs[0],
        lastPrice: cs[4],
        volume: cs[5],
      }),
    );

    return {
      market: {
        exchange: exchangeName,
        base,
        quote,
      },
      data,
    };
  }

  private validateTicker(ticker: Ticker): ticker is Ticker {
    return ticker.data.lastPrice !== -1 && ticker.data.volume !== -1;
  }
}
