import { cosmosclient } from 'cosmos-client';
import { botany } from '../../../proto';

export * as pricefeed from './module';

cosmosclient.codec.register('/botany.pricefeed.MsgPostPrice', botany.pricefeed.MsgPostPrice);
