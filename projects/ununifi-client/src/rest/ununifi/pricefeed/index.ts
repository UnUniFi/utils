import { ununifi } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as pricefeed from './module';

cosmosclient.codec.register('/ununifi.pricefeed.MsgPostPrice', ununifi.pricefeed.MsgPostPrice);
