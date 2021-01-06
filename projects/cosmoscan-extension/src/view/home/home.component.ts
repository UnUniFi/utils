import { Component, OnInit, Input } from '@angular/core';
import { CdpParameters } from '../../x/cdp/api';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  params?: CdpParameters | null;
  
  constructor() {}

  ngOnInit(): void {}
}
