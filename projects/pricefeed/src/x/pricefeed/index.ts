import { codec } from "cosmos-client";
import { MsgPostPrice } from "./types";

export * from "./types";

codec.registerCodec(
  "pricefeed/MsgPostPrice",
  MsgPostPrice,
  MsgPostPrice.fromJSON
);
