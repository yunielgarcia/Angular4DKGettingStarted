import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class ProductGuardService implements CanActivate {


  constructor(private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    let id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
      this._router.navigate(['products']);
      return false;
    } else {
      return true;
    }
  }
}
