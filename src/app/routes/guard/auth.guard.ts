import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService:AuthService,
    public router:Router
  ) {
  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['login']);
    } else if (!this.authService.isUser()) {
      this.router.navigate(['guest']);
    }
    return true;
  }

}
