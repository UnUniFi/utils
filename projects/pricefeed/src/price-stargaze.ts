import { CosmWasmClient } from 'cosmwasm';
import { NFT_COLLECTION_MAP } from './constants/collection';
import { CurrentPriceData } from './domain/market-price';

const IS_DEBUG_MODE = process.env.MODE == 'debug';

export class PriceStargaze {
  constructor(
    private collectionIDs: string[],
    private stargazeRest: string,
    private marketplaceAddr: string,
  ) {
    if (!collectionIDs) {
      throw new Error('must specify at least one market ID');
    }
  }

  async getPrices(): Promise<CurrentPriceData[]> {
    let prices: CurrentPriceData[] = [];
    for (let i = 0; i < this.collectionIDs.length; ++i) {
      const marketID = this.collectionIDs[i];
      const result = await this.getPrice(marketID);
      if (IS_DEBUG_MODE) {
        console.log('result', result);
      }

      if (!result.fixed) {
        if (IS_DEBUG_MODE) {
          console.log(`skip posting ${marketID} price`);
        }
        continue;
      }
      prices.push({ marketID, price: Number(result.price) });
    }
    return prices;
  }

  async getPrice(marketID: string): Promise<{ price: string; fixed: boolean; success: boolean }> {
    try {
      const client = await CosmWasmClient.connect(this.stargazeRest);
      if (marketID === "") {
        console.log("no collection id")
        return {
          price: '',
          fixed: false,
          success: false,
        };
      }
      const collectionAddress = NFT_COLLECTION_MAP[marketID];
      const response = await client.queryContractSmart(this.marketplaceAddr, {
        asks_sorted_by_price: { collection: collectionAddress, include_inactive: false },
      });
      if (response.asks.length > 0) {
        const lowestFixed = response.asks.find(
          (ask: { sale_type: string }) => ask.sale_type === 'fixed_price',
        );
        if (lowestFixed) {
          // todo save db
          return {
            price: lowestFixed.price,
            fixed: true,
            success: true,
          };
        } else {
          return {
            price: response.asks[response.length - 1].price,
            fixed: false,
            success: true,
          };
        }
      } else {
        return {
          price: '',
          fixed: false,
          success: false,
        };
      }
    } catch (e) {
      console.error(e);
      console.log(`could not get ${marketID} price from stargaze`);
      return { price: '', fixed: false, success: false };
    }
  }
}
