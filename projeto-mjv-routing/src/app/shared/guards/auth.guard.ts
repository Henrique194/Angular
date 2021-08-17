import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import logState from '../../features/login/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(logState.failLogin || logState.firstTimeAcess) { // logica: nao tiver falha E nao for a primeira vez/ nao tiver falha OU for a primeira vez
        this.router.navigateByUrl('/login');
        return false;
      } else {
        return true;
      }
  }
}
;