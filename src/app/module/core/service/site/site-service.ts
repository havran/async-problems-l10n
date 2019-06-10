import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '../../../../config/app.config.token';
import { AppConfig } from '../../../../config/app.config';
import { WINDOW } from '../window/window.token';
import { BrowserWindowApi } from '../window/browser-window-api';
import { SiteConfig } from '../../../../config/site/site.config';
import { SiteServiceInterface } from './site-service.interface';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class SiteService implements SiteServiceInterface {
  constructor(
    @Inject(APP_CONFIG) private appConfig: Observable<AppConfig>,
    @Inject(WINDOW) private window: BrowserWindowApi,
  ) {}

  get currentSite(): Observable<SiteConfig> {
    return this.appConfig.pipe(
      filter((config: AppConfig) => !!config),
      map((config: AppConfig): SiteConfig | undefined => {
        return config.sites.find((item: SiteConfig) => item.hostname.includes(this.hostname));
      }),
      filter((siteConfig: SiteConfig) => !!siteConfig),
    );
  }

  get siteId(): Observable<string> {
    return this.currentSite.pipe(map((siteConfig: SiteConfig) => siteConfig.siteId));
  }

  get hostname(): string {
    return this.window.location.hostname;
  }
}
