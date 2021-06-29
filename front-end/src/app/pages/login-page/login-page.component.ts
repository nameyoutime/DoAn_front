import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firbase error handle

  resetPassword = false;
  constructor(private authSer: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }
  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }
  sigin(){
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authSer
        .loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/home']);
          // alert("susscess login!")
        })
        .catch((_error) => {
          this.error = _error;
          // this.router.navigate(['/loginPage']);
        });
    }
  }
  loginWithGg() {
    try {
      this.authSer.loginWithGg();
      
    } catch (error) {
      this.error = error;
      return;
    }
  }
}
