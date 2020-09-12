import { Msg, AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

/**
 *
 */
export class MsgCreateCDP extends Msg {
  /**
   *
   * @param sender
   * @param collateral
   * @param principal
   */
  constructor(
    public sender: AccAddress,
    public collateral: Coin,
    public principal: Coin,
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgCreateCDP(
      AccAddress.fromBech32(value.sender),
      value.collateral,
      value.principal,
    );
  }
}
