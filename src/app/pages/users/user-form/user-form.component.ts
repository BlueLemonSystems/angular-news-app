import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import { FormErrorsService } from 'src/app/shared/services/form-errors.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user:User;
  isLoading:boolean;
  userId:number;

  form:FormGroup;
  formSubmitted:boolean;

  constructor(
    private userService:UserService, 
    private activatedRoute:ActivatedRoute, 
    private router:Router, 
    private fb:FormBuilder,
    private formErrors:FormErrorsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(urlParams => {
      console.log('URL Params', urlParams);
      this.userId = urlParams.userId;
      this.getUser();
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
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

  validateSubmit(e) {
    if(e.key==="Enter") {
      this.saveUser();
    }
  }

  saveUser() {
  
    if(this.form.valid) {
      const user = this.form.getRawValue();
      this.userService.save(user).subscribe(response => {
        // Mostrar modal
        this.router.navigate(['..'], {
          relativeTo: this.activatedRoute,
          queryParams: {
            success: true
          }
        })
      }, err => {
        console.error('Fallo al guardar el usuario');
        alert('Fallo al guardar el usuario');
      })
    }
    
  }

  getErrorMessage(controlName) {
    return this.formErrors.getErrorMessage(controlName);
  }

}
