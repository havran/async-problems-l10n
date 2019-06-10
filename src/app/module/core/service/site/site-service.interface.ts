import { SiteConfig } from '../../../../config/site/site.config';
import { Observable } from 'rxjs';

export interface SiteServiceInterface {
  readonly currentSite: Observable<SiteConfig>;
  readonly siteId: Observable<string>;
  readonly hostname: string;
}
