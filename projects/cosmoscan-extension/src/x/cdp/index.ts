import { codec } from 'cosmos-client';
import { MsgCreateCDP, MsgWithdraw } from './types';

export * from './types';

codec.registerCodec('cdp/MsgCreateCDP', MsgCreateCDP, MsgCreateCDP.fromJSON);

codec.registerCodec('cdp/MsgWithdraw', MsgWithdraw, MsgWithdraw.fromJSON);
