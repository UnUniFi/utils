import { codec } from 'cosmos-client';
import { MsgCreateCDP, MsgDrawDebt } from './types';

export * from './types';

codec.registerCodec('cdp/MsgCreateCDP', MsgCreateCDP, MsgCreateCDP.fromJSON);

codec.registerCodec('cdp/MsgDrawDebt', MsgDrawDebt, MsgDrawDebt.fromJSON);
