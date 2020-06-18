import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormErrorsService {

  private errors = {
    required: 'Este campo es requerido',
    email: 'No es un correo valido',
    password: 'La contraseña debe tener mínimo 8 caracteres',
    minLenght: 'El texto debe tener mínimo 6 caracteres'
  }

  constructor() { }

  getErrorMessage(error) {
    return this.errors[error];
  }
}
