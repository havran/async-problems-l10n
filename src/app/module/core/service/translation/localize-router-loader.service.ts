import { LocalizeParser, LocalizeRouterSettings } from 'localize-router';
import { TranslateService } from '@ngx-translate/core';
import { Routes } from '@angular/router';
import { Location } from '@angular/common';
import { take, tap } from 'rxjs/operators';
import { SiteService } from '../site/site-service';
import { SiteConfig } from '../../../../config/site/site.config';

export class LocalizeRouterLoaderService extends LocalizeParser {

  constructor(
    translate: TranslateService,
    location: Location,
    settings: LocalizeRouterSettings,
    private siteService: SiteService) {
    super(translate, location, settings);
  }

  load(routes: Routes): Promise<any> {
    return this.siteService.currentSite
      .pipe(
        tap((siteConfig: SiteConfig) => {
          this.locales = siteConfig.locales;
          this.defaultLang = siteConfig.locales[0];
          this.prefix = '';
        }),
        take(1)
      )
      .toPromise()
      .then(() => this.init(routes));
  }
}
