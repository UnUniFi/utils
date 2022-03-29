import { Component, Input, OnInit } from '@angular/core';
import { InlineResponse2007Params } from 'ununifi-client/esm/openapi';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  params?: InlineResponse2007Params | null;

  constructor() {}

  ngOnInit(): void {}
}
