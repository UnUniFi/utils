import { Component } from '@angular/core';
import { Config, ConfigService } from 'projects/telescope-extension/src/app/models/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: Config;

  constructor(private readonly configS: ConfigService) {
    this.config = this.configS.config;
    if (this.config.extension?.faucet !== undefined) {
      this.config.extension.navigations.push({
        name: 'Faucet',
        link: '/jpyx/faucet',
      });
    }
  }
}
