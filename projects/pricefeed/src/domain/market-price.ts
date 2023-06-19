export type Market = {
  exchange: string;
  base: string;
  quote: string;
};

export type Price = {
  timestamp: number;
  lastPrice: number;
  volume: number;
};

export type Ticker = {
  market: Market;
  data: Price;
};

export type CandleSticks = {
  market: Market;
  data: Price[];
};

export type CurrentPriceData = {
  marketID: string;
  price:number;
};
