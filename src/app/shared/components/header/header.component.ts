import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logueado:boolean;

  constructor(private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.authService.session.subscribe( status => {
      this.logueado = status;
    });
  }

  logout() {
    this.authService.removeToken();
  }

}
