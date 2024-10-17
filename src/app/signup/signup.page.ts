import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {
  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    this.authService.signUp(this.user).subscribe(res => {
      // Handle successful signup
      this.router.navigate(['/home']); // Redirect to home page
    }, error => {
      // Handle error
      console.error('Signup error:', error);
    });
  }
}