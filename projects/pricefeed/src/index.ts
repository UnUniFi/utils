import * as cron from "node-cron";
import { PriceOracle } from "./price-oracle";
require("dotenv").config();

import OpenExchangeRatesClient from "./clients/fx/open-exchange-rates";

// Load environment variables
const marketIDs = (process.env.MARKET_IDS || "").split(",");
const expiry = process.env.EXPIRY || "";
const expiryThreshold = process.env.EXPIRY_THRESHOLD || "";
const deviation = process.env.DEVIATION || "";
const lcdURL = process.env.LCD_URL || "";
const chainID = process.env.CHAIN_ID || "";
const mnemonic = process.env.MNEMONIC || "";
const bech32Prefix = process.env.BECH32PREFIX || "";
const cronTab = process.env.CRONTAB || "";
const openExchangeRateAppId = process.env.OPEN_EXCHANGE_RATES_APP_ID || "";

const dataProviderType = process.env.DATA_PROVIDER_TYPE || "default";
const dataProviderUrl = process.env.DATA_PROVIDER_URL || "https://laozi1.bandchain.org";
const dataProviderDataRetentionPeriodMin = process.env.DATA_DATA_RETENTION_PERIOD_MIN || "";
const dataProviderStoreType = process.env.DATA_PROVIDER_STORE_TYPE || "memory";
const dataProviderStoreLocation = process.env.DATA_PROVIDER_STORE_LOCATION || "./price_data.json";
const dataProviderConf  =  {
  dataProviderType,
  dataProviderUrl,
  dataProviderDataRetentionPeriodMin,
  dataProviderStoreType,
  dataProviderStoreLocation,
}

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
  dataProviderConf
);

// oracle.postPrices();
oracle.fetchPriceFromBand("ubtc:jpy");
// oracle.fetchPriceFromCCXT("ubtc:jpy");

// oracle.fetchPriceFromBand("ubtc:eur");
// oracle.fetchPriceFromCCXT("ubtc:eur");
// cron.schedule(cronTab, () => {
//   oracle.postPrices();
// });
