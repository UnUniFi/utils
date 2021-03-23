import { cosmosclient } from 'cosmos-client';
import { botany } from '../../../proto';

export * as cdp from './module';

cosmosclient.codec.register('/botany.cdp.MsgCreateCdp', botany.cdp.MsgCreateCdp);
cosmosclient.codec.register('/botany.cdp.MsgDeposit', botany.cdp.MsgDeposit);
cosmosclient.codec.register('/botany.cdp.MsgDrawDebt', botany.cdp.MsgDrawDebt);
cosmosclient.codec.register('/botany.cdp.MsgLiquidate', botany.cdp.MsgLiquidate);
cosmosclient.codec.register('/botany.cdp.MsgRepayDebt', botany.cdp.MsgRepayDebt);
cosmosclient.codec.register('/botany.cdp.MsgWithdraw', botany.cdp.MsgWithdraw);
