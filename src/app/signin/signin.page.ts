import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage  {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.signIn(this.user).subscribe(res => {
      // Handle successful sign-in
      this.router.navigate(['/home']); // Redirect to home page
    }, error => {
      // Handle error
      console.error('Sign-in error:', error);
    });
  }
}