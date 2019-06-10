import { InjectionToken } from '@angular/core';
import { SiteServiceInterface } from './site-service.interface';

export const SITE_SERVICE = new InjectionToken<SiteServiceInterface>('SiteService');
