import { Inject, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from 'localize-router';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterLoaderService } from './module/core/service/translation/localize-router-loader.service';
import { SITE_SERVICE } from './module/core/service/site/site-service.token';

const routes: Routes = [
  {
    path: '',
    loadChildren: './module/content/content.module#ContentModule',
  }
];

export function defaultLangFunction(languages: string[]): string {
  return languages[0];
}

@NgModule({
  imports: [
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (translate, location, settings, siteService) =>
          new LocalizeRouterLoaderService(translate, location, settings, siteService),
        deps: [TranslateService, Location, LocalizeRouterSettings, [new Inject(SITE_SERVICE)]]
      },
      alwaysSetPrefix: true,
      useCachedLang: false,
      defaultLangFunction
    }),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule {
}
