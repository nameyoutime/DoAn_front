import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private authSer: AuthService) { }
  email = '';
  password = '';
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firbase error handle
  ngOnInit(): void {

  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
  
      this.authSer
        .registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = 'you are register with data on firbase';
        })
        .catch((_error) => {
          this.error = _error;
        });
    }
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
}

