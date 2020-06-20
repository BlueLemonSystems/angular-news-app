import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  session:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.session.next(this.isLoggedIn());
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    this.session.next(true);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
    this.session.next(false);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');    
  }

}
