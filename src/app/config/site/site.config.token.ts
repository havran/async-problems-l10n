import { InjectionToken } from '@angular/core';
import { SiteConfig } from './site.config';

export const SITE_CONFIG = new InjectionToken<SiteConfig>('SiteConfig');
