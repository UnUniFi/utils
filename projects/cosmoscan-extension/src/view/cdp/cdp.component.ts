import { Component, Input, OnInit } from '@angular/core';
import { botany } from 'botany-client';

@Component({
  selector: 'view-cdp',
  templateUrl: './cdp.component.html',
  styleUrls: ['./cdp.component.css'],
})
export class CdpComponent implements OnInit {
  @Input()
  params?: botany.cdp.Params | null;

  constructor() { }

  ngOnInit(): void { }
}
