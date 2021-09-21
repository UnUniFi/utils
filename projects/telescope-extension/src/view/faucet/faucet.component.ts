import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FaucetRequest } from '@model-ce/faucets/faucet.model';

@Component({
  selector: 'app-view-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  @Input() hasFaucet?: boolean;
  @Input() denoms?: string[];
  @Input() creditAmount?: number;
  @Input() maxCredit?: number;
  @Input() address?: string;

  @Output() postFaucetRequested: EventEmitter<FaucetRequest> = new EventEmitter<FaucetRequest>();

  constructor() {}

  ngOnInit(): void {}

  onPostFaucetRequested(faucetRequest: FaucetRequest): void {
    this.postFaucetRequested.emit(faucetRequest);
  }
}
