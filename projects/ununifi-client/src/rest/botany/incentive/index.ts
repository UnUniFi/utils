import { botany } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as incentive from './module';

cosmosclient.codec.register('/botany.incentive.CdpMintingClaim', botany.incentive.CdpMintingClaim);
cosmosclient.codec.register(
  '/botany.incentive.MsgClaimCdpMintingReward',
  botany.incentive.MsgClaimCdpMintingReward,
);
