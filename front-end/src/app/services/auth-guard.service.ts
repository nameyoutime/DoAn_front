import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authSer: AuthService) { }

  canActivate(): boolean {
    if (!this.authSer.user) {
      this.router.navigate(['/loginPage']);
      return false;
    }
    return true;
  }

  // return true;

}
