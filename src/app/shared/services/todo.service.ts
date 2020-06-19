import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends CrudService {

  protected endpoint:string = 'todos';

}
