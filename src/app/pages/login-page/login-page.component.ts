import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authSer: AuthService,private router: Router) {

  }

  ngOnInit(): void {
  }

  loginWithGg() {
    this.authSer.loginWithGg().then((result)=>{
      if(result) {
        
        this.router.navigate(['/home'])
      }
    });
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
