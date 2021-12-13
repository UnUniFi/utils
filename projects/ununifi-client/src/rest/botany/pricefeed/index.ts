import { botany } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as pricefeed from './module';

cosmosclient.codec.register('/botany.pricefeed.MsgPostPrice', botany.pricefeed.MsgPostPrice);
