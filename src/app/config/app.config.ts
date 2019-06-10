import { SiteConfig } from './site/site.config';

export interface AppConfig {
  sites: SiteConfig[];
  [key: string]: any;
}
