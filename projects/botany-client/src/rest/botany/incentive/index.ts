import { cosmosclient } from 'cosmos-client';
import { botany } from '../../../proto';

export * as incentive from './module';

cosmosclient.codec.register(
  '/botany.incentive.CdpMintingClaim',
  botany.incentive.CdpMintingClaim
);
cosmosclient.codec.register(
  '/botany.incentive.MsgClaimCdpMintingReward',
  botany.incentive.MsgClaimCdpMintingReward
);
