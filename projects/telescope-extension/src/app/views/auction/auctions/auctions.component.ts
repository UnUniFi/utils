import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { InlineResponse2004Cdp1, InlineResponse200Auctions } from 'botany-client/esm/openapi';
import * as crypto from 'crypto';

@Component({
  selector: 'view-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
})
export class AuctionsComponent implements OnInit {
  @Input()
  auctions?: InlineResponse200Auctions[] | null;

  @Input()
  pageSizeOptions?: number[] | null;
  @Input()
  pageSize?: number | null;
  @Input()
  pageNumber?: number | null;
  @Input()
  pageLength?: number | null;

  @Output()
  paginationChange: EventEmitter<PageEvent>;

  constructor() {
    this.paginationChange = new EventEmitter();
  }

  ngOnInit(): void {}

  onPaginationChange(pageEvent: PageEvent): void {
    this.paginationChange.emit(pageEvent);
  }
}
