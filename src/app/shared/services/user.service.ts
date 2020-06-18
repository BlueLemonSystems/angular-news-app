import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:Array<User> = [
    {
      name: 'Lorem Ipsum',
      username: 'lorem'
    },
    {
      name: 'John Doe',
      username: 'johnd'
    }
  ];

  constructor(private httpService:HttpClient) { }

  getUsers():Observable<any> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(id:number):Observable<any> {
    return this.httpService.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  addUser(newUser:User) {
    this.users.push(newUser);
  }

  save(user:User):Observable<any> {
    return this.httpService.put('https://demo5574133.mockable.io/users', user);
  }
}
