import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api/auth'; // Adjust based on your server

  constructor(private http: HttpClient) {}

  // Method for signing up a user
  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  // Method for signing in a user
  signIn(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, user);
  }

}