import { AccAddress } from "cosmos-client";

export class MsgPostPrice {
  constructor(
    public from: AccAddress,
    public marked_id: string,
    public price: string,
    public expiry: string
  ) {}

  static fromJSON(value: any) {
    return new MsgPostPrice(
      AccAddress.fromBech32(value.address),
      value.marked_id,
      value.price,
      value.expiry
    );
  }
}
