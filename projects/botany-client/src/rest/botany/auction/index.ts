import { cosmosclient } from 'cosmos-client';
import { botany } from '../../../proto';

export * as auction from './module';

cosmosclient.codec.register('/botany.auction.BaseAuction', botany.auction.BaseAuction);
cosmosclient.codec.register('/botany.auction.CollateralAuction', botany.auction.CollateralAuction);
cosmosclient.codec.register('/botany.auction.DebtAuction', botany.auction.DebtAuction);
cosmosclient.codec.register('/botany.auction.SurplusAuction', botany.auction.SurplusAuction);
cosmosclient.codec.register('/botany.auction.MsgPlaceBid', botany.auction.MsgPlaceBid);
