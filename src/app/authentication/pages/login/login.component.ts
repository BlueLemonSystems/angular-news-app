import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService, Credentials } from '../../shared/services/login.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  error:boolean;

  constructor(private fb:FormBuilder, private loginService:LoginService, private router:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if(this.form.invalid) return;
    const credentials:Credentials = this.form.getRawValue();
    this.loginService.login(credentials).subscribe(response => {
      console.log('Success!!!');
      this.error = false;
      this.authService.saveToken(response.token);
      this.router.navigate(['/']);
    }, err => {
      console.log('Credenciales incorrectas, ', err);
      this.error = true;
    });
  }

}
