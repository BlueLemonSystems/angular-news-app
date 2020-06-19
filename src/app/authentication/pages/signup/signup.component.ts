import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SignupService } from './../../shared/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form:FormGroup;


  constructor(
    private fb:FormBuilder, 
    private signupService:SignupService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.matchPasswords()
    });
  }

  passwordStrength() {
    return null;
  }

  matchPasswords() {
    return () => {
      if(!this.form) return;
      const datos = this.form.getRawValue();
      if(datos.password === datos.confirmPassword) {
        return null;
      } else {
        return {
          mismatch: true
        };
      }
    }

  }

  signup() {
    if(this.form.valid) {
      const datos = this.form.getRawValue();
      
      this.signupService.signup(datos).subscribe(response => {
        this.router.navigate(['../login'], {
          relativeTo: this.activatedRoute,
          queryParams: {
            created: true
          }
        })
      }, err => {
        console.error('Failed to signup');
      });
      
    } else {
      console.log('Formulario no valido');
    }
  }

}
