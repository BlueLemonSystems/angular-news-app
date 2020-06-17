import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user:User;
  isLoading:boolean;
  userId:number;

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
      console.log('URL Params', urlParams);
      this.userId = urlParams.userId;
      this.getUser();
    });
  }

  getUser(): void {
    this.isLoading = true;
    this.userService.getUserDetails(this.userId).subscribe((response) => {
      this.user = response;
      this.isLoading = false;
    }, (err) => {
      console.error('No encontre el usuario');
      this.isLoading = false;
    });
  }

  goBack() {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute
    })
  }

}
