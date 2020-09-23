import { codec } from 'cosmos-client';
import { MsgCreateCDP, MsgDrawDebt, MsgDeposit, MsgWithdraw } from './types';

export * from './types';

codec.registerCodec('cdp/MsgCreateCDP', MsgCreateCDP, MsgCreateCDP.fromJSON);
codec.registerCodec('cdp/MsgDrawDebt', MsgDrawDebt, MsgDrawDebt.fromJSON);
codec.registerCodec('cdp/MsgDeposit', MsgDeposit, MsgDeposit.fromJSON);
codec.registerCodec('cdp/MsgWithdraw', MsgWithdraw, MsgWithdraw.fromJSON);
