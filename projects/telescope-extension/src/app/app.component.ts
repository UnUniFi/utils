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
    const prefix = this.config.bech32Prefix?.accAddr;
    if (this.config.extension?.faucet !== undefined) {
      if (prefix !== undefined) {
        if (this.config.extension.navigations !== undefined && this.config.extension.navigations.length > 0) {
          this.config.extension.navigations = this.config.extension.navigations.map((navigation) => ({
              name: navigation.name,
              link: navigation.link.replace(`/${prefix}`, '')
            }));
        }
      }
    }
  }
}
