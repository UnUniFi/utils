import { Msg, AccAddress } from 'cosmos-client';
import { Coin } from 'cosmos-client/api';

/**
 *
 */
export class MsgDeposit extends Msg {
  /**
   *
   * @param depositor
   * @param owner
   * @param collateral
   */
  constructor(
    public depositor: AccAddress,
    public owner: AccAddress,
    public collateral: Coin,
  ) {
    super();
  }

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new MsgDeposit(
      AccAddress.fromBech32(value.depositor),
      AccAddress.fromBech32(value.owner),
      value.collateral,
    );
  }
}
