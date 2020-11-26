import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('currentUser') && !localStorage.getItem('admin')) {
      return true;
    }
    else if (localStorage.getItem('admin')) { // If logged in admin, redirect to admin page
      this.router.navigate(["/admin"]);
      return false;
    }
    else { // If not logged in, redirect to login page
      this.router.navigate(['']);
      return false;
    }
  }
}
