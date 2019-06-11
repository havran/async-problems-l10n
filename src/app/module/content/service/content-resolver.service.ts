import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalizeParser } from 'localize-router';

@Injectable()
export class ContentResolver implements Resolve<any | undefined> {
  constructor(private localeParse: LocalizeParser) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<string | undefined>
    | Promise<string | undefined>
    | string
    | undefined {
    return `Content resolved with locale '${this.localeParse.urlPrefix}'`;
  }
}
