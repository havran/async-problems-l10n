import { WINDOW } from './window.token';
import { PLATFORM_ID } from '@angular/core';
import { BrowserWindowApi } from './browser-window-api';

declare const window: any;

export function windowServiceFactory(platformId: Object): BrowserWindowApi {
  return <any>window;
}

export let WINDOW_PROVIDER = {
  provide: WINDOW,
  useFactory: windowServiceFactory,
  deps: [PLATFORM_ID],
};
