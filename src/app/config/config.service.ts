import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ConfigService {

  private _config = new BehaviorSubject<any | undefined>(undefined);

  constructor(
    private httpClient: HttpClient
  ) {}

  get config(): Observable<any | undefined> {
    return this._config.asObservable();
  }

  init(): Promise<any> {
    return this.httpClient
      .get<any>('./assets/config/config.json')
      .pipe(
        tap((config: any) => {
          this._config.next(config);
        }),
      )
      .toPromise();
  }

}

export const CONFIG_SERVICE = new InjectionToken<ConfigService>('ConfigService');

export function configServiceFactory(configService: ConfigService) {
  return () => configService.init();
}
