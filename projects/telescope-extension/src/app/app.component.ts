import { Config, ConfigService } from './models/config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'telescope-extension';
  config: Config;

  constructor(private readonly configS: ConfigService) {
    this.config = this.configS.config;
    const prefix = this.config.bech32Prefix?.accAddr;
    if (this.config.extension?.faucet !== undefined) {
      if (prefix !== undefined) {
        if (
          this.config.extension.navigations !== undefined &&
          this.config.extension.navigations.length > 0
        ) {
          this.config.extension.navigations = this.config.extension.navigations.map(
            (navigation) => ({
              name: navigation.name,
              link: navigation.link.replace(`/${prefix}`, ''),
            }),
          );
        }
      }
    }
  }
}
