import { Component, OnInit } from '@angular/core';
import { User } from './../../shared/interfaces/user';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Array<User> = [];
  errorFlag:boolean;
  selectedUser:User = {
    name: "",
    username: ""
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    console.log(typeof this.userService.getUsers);
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      console.log('This users: ', this);
      this.errorFlag = false;
    }, (err) => {
      console.error('Error al traer usuarios: ', err);
      this.errorFlag = true;
    });

    setTimeout(() => {
      const newUser:User = {
        name: 'New User',
        username: 'newuser'
      };
      this.userService.addUser(newUser);
    }, 2000);
  }

  handleUserSelect(user:User) {
    console.log('Alguien selecciono un usuario', user);
    this.selectedUser = user;
  }

}

