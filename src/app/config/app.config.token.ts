import { InjectionToken } from '@angular/core';
import { AppConfig } from './app.config';
import { Observable } from 'rxjs';

export const APP_CONFIG = new InjectionToken<Observable<AppConfig>>('AppConfig');
