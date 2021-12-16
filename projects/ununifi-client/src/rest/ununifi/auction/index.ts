import { ununifi } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as auction from './module';

cosmosclient.codec.register('/ununifi.auction.BaseAuction', ununifi.auction.BaseAuction);
cosmosclient.codec.register(
  '/ununifi.auction.CollateralAuction',
  ununifi.auction.CollateralAuction,
);
cosmosclient.codec.register('/ununifi.auction.DebtAuction', ununifi.auction.DebtAuction);
cosmosclient.codec.register('/ununifi.auction.SurplusAuction', ununifi.auction.SurplusAuction);
cosmosclient.codec.register('/ununifi.auction.MsgPlaceBid', ununifi.auction.MsgPlaceBid);
