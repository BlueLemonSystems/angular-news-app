import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl:string = 'https://jsonplaceholder.typicode.com/'

  protected endpoint:string;

  constructor(private httpService:HttpService) { }

  getAll():Observable<any> {
    return this.httpService.get(this.apiUrl + this.endpoint);
  }

  getElement(id:number):Observable<any> {
    return this.httpService.get(this.apiUrl + this.endpoint+'/'+id);
  }

  create(data:any) {

  }

  save(id:number, data:any) {}

  delete(id:number) {}
}

