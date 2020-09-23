import { Msg, AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

/**
 *
 */
export class MsgRepayDebt extends Msg {
  /**
   *
   * @param sender
   * @param cdp_denom
   * @param payment
   */
  constructor(
    public sender: AccAddress,
    public cdp_denom: string,
    public principal: Coin,
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgRepayDebt(
      AccAddress.fromBech32(value.sender),
      value.cdp_denom,
      value.payment,
    );
  }
}
