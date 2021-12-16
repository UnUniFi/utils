import { ununifi } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as incentive from './module';

cosmosclient.codec.register(
  '/ununifi.incentive.CdpMintingClaim',
  ununifi.incentive.CdpMintingClaim,
);
cosmosclient.codec.register(
  '/ununifi.incentive.MsgClaimCdpMintingReward',
  ununifi.incentive.MsgClaimCdpMintingReward,
);
