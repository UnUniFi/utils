import { codec } from 'cosmos-client';
import { MsgCreateCDP, MsgRepayDebt } from './types';

export * from './types';

codec.registerCodec('cdp/MsgCreateCDP', MsgCreateCDP, MsgCreateCDP.fromJSON);

codec.registerCodec('cdp/MsgRepayDebt', MsgRepayDebt, MsgRepayDebt.fromJSON);
