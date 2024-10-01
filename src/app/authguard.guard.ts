import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if ( typeof localStorage !== 'undefined' && localStorage.getItem("token")) {
      return true;
    } else {
      this.router.navigate(['/login']); // Navigate to the login page
      return false;
    }
  }
}