import { cosmosclient } from 'cosmos-client';
import { eurx } from '../../../proto';

export * as incentive from './module';

cosmosclient.codec.register('/eurx.incentive.EurxMintingClaim', eurx.incentive.EurxMintingClaim);
cosmosclient.codec.register('/eurx.incentive.MsgClaimEurxMintingReward', eurx.incentive.MsgClaimEurxMintingReward);
