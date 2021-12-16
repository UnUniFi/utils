import { ununifi } from '../../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as cdp from './module';

cosmosclient.codec.register('/ununifi.cdp.MsgCreateCdp', ununifi.cdp.MsgCreateCdp);
cosmosclient.codec.register('/ununifi.cdp.MsgDeposit', ununifi.cdp.MsgDeposit);
cosmosclient.codec.register('/ununifi.cdp.MsgDrawDebt', ununifi.cdp.MsgDrawDebt);
cosmosclient.codec.register('/ununifi.cdp.MsgLiquidate', ununifi.cdp.MsgLiquidate);
cosmosclient.codec.register('/ununifi.cdp.MsgRepayDebt', ununifi.cdp.MsgRepayDebt);
cosmosclient.codec.register('/ununifi.cdp.MsgWithdraw', ununifi.cdp.MsgWithdraw);
