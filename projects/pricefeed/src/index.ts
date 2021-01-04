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
);

cron.schedule(cronTab, () => {
  oracle.postPrices();
});
