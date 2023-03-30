import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, public http: HttpClient) { }
  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  login(data: any) {
    return this.http.post('https://dummyjson.com/auth/login', { username: data.email, password: data.password })
  }
}
