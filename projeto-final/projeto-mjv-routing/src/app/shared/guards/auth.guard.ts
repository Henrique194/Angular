import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const foundUser = sessionStorage.getItem('user');
      if(foundUser) { // logica: nao tiver falha E nao for a primeira vez/ nao tiver falha OU for a primeira vez
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
  }
}
;