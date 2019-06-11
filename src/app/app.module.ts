import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule, defaultLangFunction } from './app-routing.module';
import { AppComponent } from './app.component';
import { WINDOW_PROVIDER } from './module/core/service/window/window.provider';
import { CONFIG_SERVICE, ConfigService, configServiceFactory } from './config/config.service';
import { APP_CONFIG } from './config/app.config.token';
import { configFactory } from './config/app.config.factory';
import { SITE_SERVICE } from './module/core/service/site/site-service.token';
import { SiteService } from './module/core/service/site/site-service';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from 'localize-router';
import { LocalizeRouterLoaderService } from './module/core/service/translation/localize-router-loader.service';
import { Location } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentModule } from './module/content/content.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locales/locale-', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
  ],
  providers: [
    WINDOW_PROVIDER,
    {
      provide: CONFIG_SERVICE,
      useClass: ConfigService,
    },
    {
      provide: APP_CONFIG,
      useFactory: configFactory,
      deps: [[new Inject(CONFIG_SERVICE)]],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [[new Inject(CONFIG_SERVICE)]],
      multi: true,
    },
    { provide: SITE_SERVICE, useClass: SiteService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
