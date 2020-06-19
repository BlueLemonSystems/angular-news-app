import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import { DataListColumn } from 'src/app/shared/interfaces/data-list-column';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input('data') users:User[];
  @Output() onUserSelect:EventEmitter<User> = new EventEmitter();

  errorFlag:boolean;

  columns:DataListColumn[] = [
    { title: 'Nombre', field: 'name', sorteable: true },
    { title: 'Username', field: 'username' },
    { title: 'Correo', field: 'email' }
  ]

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();

    this.activatedRoute.queryParams.subscribe(params => {
      if(params.success === 'true') {
        this.showSuccessMessage();
      }
    });
  }

  userSelect(user:User, e) {
    this.onUserSelect.emit(user);
  }

  openUser(id:number) {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute
    });
  }

  getUsers(): void {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
      this.errorFlag = false;
    }, (err) => {
      this.errorFlag = true;
    });
  }

  handleUserSelect(user:User) {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute
    });
  }

  showSuccessMessage() {
    alert('Se guardo correctamente');
  }

}
