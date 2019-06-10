import {
  ISOCode,
  L10N_CONFIG,
  L10nConfig,
  L10nConfigRef,
  L10nLoader,
  LogLevel,
  ProviderType,
} from 'angular-l10n';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { siteConfigurations } from '../config/site/site-config';
import { APP_CONFIG } from '../config/app.config.token';
import { SITE_CONFIG } from '../config/site/site.config.token';
import { SITE_SERVICE } from '../module/core/service/site/site-service.token';
import { SiteService } from '../module/core/service/site/site-service';
import { take, tap } from 'rxjs/operators';

export const l10nConfig: L10nConfig = {
  logger: {
    level: LogLevel.Warn,
  },
  locale: {},
  translation: {
    providers: [],
    caching: true,
    composedKeySeparator: '.',
    missingValue: '--translation missing--',
  },
  localizedRouting: {
    format: [ISOCode.Language],
    defaultRouting: true,
  },
};

@Injectable()
export class LocalizationConfig {
  constructor(
    private l10nLoader: L10nLoader,
    @Inject(L10N_CONFIG) private configuration: L10nConfigRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(SITE_SERVICE) private siteService: SiteService,
  ) {}

  public load(): Promise<any> {
    // Basic path where to get translation files.
    let prefix = './assets/locales';
    if (isPlatformServer(this.platformId)) {
      prefix = 'http://localhost:4000/en/assets/locales';
    }
    // Set translation providers.
    this.configuration.translation.providers = [
      { type: ProviderType.Fallback, prefix: `${prefix}/locale-en`, fallbackLanguage: [] },
      { type: ProviderType.Static, prefix: `${prefix}/locale-` },
    ];

    // const siteId = 'ferratum.co.nz';
    // if (siteConfigurations[siteId] && siteConfigurations[siteId].l10nConfig.locale) {
    //   this.configuration.locale = {
    //     ...siteConfigurations[siteId].l10nConfig.locale,
    //   };
    // }
    //
    // return this.l10nLoader.load();

    return this.siteService.siteId
      .pipe(
        tap((siteId: string) => {
          // Configure available locales for current site.
          if (siteConfigurations[siteId] && siteConfigurations[siteId].l10nConfig.locale) {
            this.configuration.locale = {
              ...siteConfigurations[siteId].l10nConfig.locale,
            };
          }
          console.log('~~~> configuration initialized');
        }),
        take(1),
      )
      .toPromise()
      .then(() => {
        console.log('~~~> configuration initialized, continue loading');
        return this.l10nLoader.load();
      });
  }
}

export function initLocalization(localizationConfig: LocalizationConfig): Function {
  return () => localizationConfig.load();
}
