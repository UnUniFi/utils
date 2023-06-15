import * as cron from 'node-cron';
import { PriceOracle } from './price-oracle';
require('dotenv').config();

import OpenExchangeRatesClient from './clients/fx/open-exchange-rates';
import { PriceStargaze } from './price-stargaze';
import { PostPrice } from './post-price';

// Load environment variables
const expiry = process.env.EXPIRY || '14400';
const expiryThreshold = process.env.EXPIRY_THRESHOLD || '300';
const deviation = process.env.DEVIATION || '';
const lcdURL = process.env.LCD_URL || '';
const chainID = process.env.CHAIN_ID || '';
const mnemonic = process.env.MNEMONIC || '';
const bech32Prefix = process.env.BECH32PREFIX || '';
const cronTab = process.env.CRONTAB || '';
const openExchangeRateAppId = process.env.OPEN_EXCHANGE_RATES_APP_ID || '';

// oracle
const marketIDs = (process.env.MARKET_IDS || '').split(',');
const dataProviderType = process.env.DATA_PROVIDER_TYPE || 'default';
const dataProviderUrl = process.env.DATA_PROVIDER_URL || 'https://laozi1.bandchain.org';
const dataProviderDataRetentionPeriodMin = process.env.DATA_DATA_RETENTION_PERIOD_MIN || '30';
const dataProviderStoreType = process.env.DATA_PROVIDER_STORE_TYPE || 'memory';
const dataProviderStoreLocation = process.env.DATA_PROVIDER_STORE_LOCATION || './price_data.json';
const dataProviderConf = {
  dataProviderType,
  dataProviderUrl,
  dataProviderDataRetentionPeriodMin,
  dataProviderStoreType,
  dataProviderStoreLocation,
};

// stargaze
const collectionIDs = (process.env.COLLECTION_IDS || '').split(',');
const stargazeRest = process.env.STARGAZE_REST || 'https://rpc.stargaze-apis.com/';
const marketplaceAddr =
  process.env.MARKETPLACE_ADDR ||
  'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl';

const IS_DEBUG_MODE = process.env.MODE == 'debug';

const fxClients = [];
if (openExchangeRateAppId) {
  fxClients.push(new OpenExchangeRatesClient(openExchangeRateAppId));
}

// Initiate price oracle
const oracle = new PriceOracle(
  marketIDs,
  expiry,
  expiryThreshold,
  deviation,
  lcdURL,
  chainID,
  mnemonic,
  bech32Prefix,
  fxClients,
  dataProviderConf,
);

const stargaze = new PriceStargaze(collectionIDs, stargazeRest, marketplaceAddr);

const postPrice = new PostPrice(expiry, lcdURL, chainID, mnemonic, bech32Prefix);

cron.schedule(cronTab, async () => {
  // todo : use postPrice.postPrices
  await oracle.postPrices();

  const floorPrices = await stargaze.getPrices();
  await postPrice.postPrices(floorPrices);
});

// if DEBUG_MODE is true, post prices immediately
if (IS_DEBUG_MODE) {
  oracle.postPrices();
}
