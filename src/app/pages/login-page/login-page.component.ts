import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authSer: AuthService) {

  }

  ngOnInit(): void {
  }

  loginWithGg() {
    this.authSer.loginWithGg();
  }
  signOut() {
    try {
      this.authSer.signOut();
    
      
    } catch (err) {
      // alert("Sigout failed");

    }
  }

  test() {
    console.log(this.authSer.user);
  }
}
