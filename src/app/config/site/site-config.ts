import { L10nConfig, StorageStrategy } from 'angular-l10n';

export interface SiteConfiguration {
  name: string;
  l10nConfig: L10nConfig;
}

export interface SitesConfigurations {
  [siteId: string]: SiteConfiguration;
}

export const siteConfigurations: SitesConfigurations = {
  'ferratum.co.nz': {
    name: 'New Zealand',
    l10nConfig: {
      locale: {
        languages: [
          { code: 'en', dir: 'ltr' },
          { code: 'sk', dir: 'ltr' },
          { code: 'sv', dir: 'ltr' },
        ],
        defaultLocale: {
          languageCode: 'en',
          countryCode: 'GB',
        },
        storage: StorageStrategy.Disabled,
      },
    },
  },
};
