import { OraclePrice } from "./domain/oracle-price";
import { CandleSticks, Ticker } from "./domain/market-price";

export const getPercentChange = (p1: number, p2: number) => {
  return Math.abs(p1 - p2) / p1;
};

export const getPreviousPrice = (
  prices: OraclePrice[],
  marketID: string,
  address: string,
): OraclePrice | undefined => {
  return prices.find(
    (price) => price.market_id === marketID && price.oracle_address === address,
  );
};

export const calculateAverageFromCandleSticks = (
  candleSticks: CandleSticks,
): Ticker => {
  const market = candleSticks.market;

  let totalPrice = 0;
  let totalVolume = 0;
  candleSticks.data.forEach((c) => {
    totalPrice += c.lastPrice;
    totalVolume += c.volume;
  });

  return {
    market,
    data: {
      lastPrice: totalPrice / candleSticks.data.length,
      volume: totalVolume,
      timestamp: candleSticks.data[candleSticks.data.length - 1].timestamp,
    },
  };
};

export const calculateAggravatedAverageFromTickers = (
  tickers: Ticker[],
): number => {
  const totalVolume = tickers.reduce(
    (prevValue, ticker) => prevValue + ticker.data.volume,
    0,
  );

  let aggravatedAveragePrice = 0.0;
  tickers.forEach((ticker) => {
    const volumeRate = ticker.data.volume / totalVolume;
    aggravatedAveragePrice += volumeRate * ticker.data.lastPrice;
  });
  return aggravatedAveragePrice;
};
