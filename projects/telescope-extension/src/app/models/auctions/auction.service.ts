import { Key } from '../keys/key.model';
import { SimulatedTxResultResponse } from '../tx-common/tx-common.model';
import { AuctionInfrastructureService } from './auction.infrastructure.service';
import { Injectable } from '@angular/core';
import { proto } from '@cosmos-client/core';
import { InlineResponse20075 } from '@cosmos-client/core/esm/openapi';

export interface IAuctionInfrastructure {
  placeBid(
    key: Key,
    privateKey: Uint8Array,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075>;

  simulateToPlaceBid(
    key: Key,
    privateKey: Uint8Array,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse>;
}

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private readonly iAuctionInfrastructure: IAuctionInfrastructure;
  constructor(readonly auctionInfrastructure: AuctionInfrastructureService) {
    this.iAuctionInfrastructure = auctionInfrastructure;
  }

  placeBid(
    key: Key,
    privateKey: Uint8Array,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    gas: proto.cosmos.base.v1beta1.ICoin,
    fee: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<InlineResponse20075> {
    return this.iAuctionInfrastructure.placeBid(key, privateKey, auction_id, amount, gas, fee);
  }

  simulateToPlaceBid(
    key: Key,
    privateKey: Uint8Array,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
    minimumGasPrice: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<SimulatedTxResultResponse> {
    return this.iAuctionInfrastructure.simulateToPlaceBid(
      key,
      privateKey,
      auction_id,
      amount,
      minimumGasPrice,
    );
  }
}
