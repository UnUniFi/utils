import { Key } from '../keys/key.model';
import { AuctionInfrastructureService } from './auction.infrastructure.service';
import { Injectable } from '@angular/core';
import { proto } from '@cosmos-client/core';

export interface IAuctionInfrastructure {
  placeBid(
    key: Key,
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
  ): Promise<any>;
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
    privateKey: string,
    auction_id: string,
    amount: proto.cosmos.base.v1beta1.ICoin,
  ) {
    return this.iAuctionInfrastructure.placeBid(key, privateKey, auction_id, amount);
  }
}
