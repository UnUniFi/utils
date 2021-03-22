import { cosmosclient } from 'cosmos-client';
import { jpyx } from '../../../proto';

export * as incentive from './module';

cosmosclient.codec.register('/jpyx.incentive.JpyxMintingClaim', jpyx.incentive.JpyxMintingClaim);
cosmosclient.codec.register('/jpyx.incentive.MsgClaimJpyxMintingReward', jpyx.incentive.MsgClaimJpyxMintingReward);
