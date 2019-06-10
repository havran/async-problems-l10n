import { InjectionToken } from '@angular/core';
import { BrowserWindowApi } from './browser-window-api';

export const WINDOW = new InjectionToken<BrowserWindowApi>('Window');
