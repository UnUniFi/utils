import { Component, Input, OnInit } from '@angular/core';
import { ununifi } from 'ununifi-client';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  params?: ununifi.cdp.IParams | null;

  constructor() {}

  ngOnInit(): void {}
}
