import { Component, Input, OnInit } from '@angular/core';
import { CdpParameters } from '../../x/cdp/api';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  params?: CdpParameters | null;

  constructor() {}

  ngOnInit(): void {}
}
