import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WINDOW_PROVIDER } from './module/core/service/window/window.provider';
import { CONFIG_SERVICE, ConfigService, configServiceFactory } from './config/config.service';
import { APP_CONFIG } from './config/app.config.token';
import { configFactory } from './config/app.config.factory';
import { SITE_SERVICE } from './module/core/service/site/site-service.token';
import { SiteService } from './module/core/service/site/site-service';
import { TranslationModule, LocaleSeoModule } from 'angular-l10n';
import { initLocalization, l10nConfig, LocalizationConfig } from './l10n/l10n-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslationModule.forRoot(l10nConfig),
    LocaleSeoModule.forRoot(),
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
    LocalizationConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initLocalization,
      deps: [LocalizationConfig],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
