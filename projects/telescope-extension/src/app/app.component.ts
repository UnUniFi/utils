import { Component } from '@angular/core';
import { Config, ConfigService } from '@model-ce/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: Config;

  constructor(private readonly configS: ConfigService) {
    this.config = this.configS.config;
  }
}
