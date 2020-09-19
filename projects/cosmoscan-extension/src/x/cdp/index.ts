import { codec } from 'cosmos-client';
import { MsgCreateCDP } from './types';

export * from './types';

codec.registerCodec('cdp/MsgCreateCDP', MsgCreateCDP, MsgCreateCDP.fromJSON);
