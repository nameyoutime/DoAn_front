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
    let user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      
      this.router.navigate(['/loginPage']);
      return false;
    }
    return true;
  }

  // return true;

}
