import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@model-ce/config.service';
import { FaucetRequest } from '@model-ce/faucets/faucet.model';
import { FaucetService } from '@model-ce/faucets/faucet.service';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  hasFaucet?: boolean;
  faucetURL?: string;
  denoms?: string[];
  creditAmount?: number;
  maxCredit?: number;
  address?: string;

  constructor(private configS: ConfigService, private faucetService: FaucetService) {
    this.hasFaucet = this.configS.config.extension?.faucet?.hasFaucet;
    this.faucetURL = this.configS.config.extension?.faucet?.faucetURL;
    this.denoms = this.configS.config.extension?.faucet?.denoms;
    this.creditAmount = this.configS.config.extension?.faucet?.creditAmount;
    this.maxCredit = this.configS.config.extension?.faucet?.maxCredit;
  }

  ngOnInit(): void {}

  appPostFaucetRequested(faucetRequest: FaucetRequest): void {
    this.faucetService.postFaucetRequest$(faucetRequest);
  }
}
