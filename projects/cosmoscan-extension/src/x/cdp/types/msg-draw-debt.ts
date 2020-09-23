import { Msg, AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

/**
 *
 */
export class MsgDrawDebt extends Msg {
  /**
   *
   * @param sender
   * @param cdp_denom
   * @param principal
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
    return new MsgDrawDebt(
      AccAddress.fromBech32(value.sender),
      value.cdp_denom,
      value.principal,
    );
  }
}
