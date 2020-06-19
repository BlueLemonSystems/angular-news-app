import { Component, OnInit } from '@angular/core';
import { DataListColumn } from 'src/app/shared/interfaces/data-list-column';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  todos:any[] = [];
  columns:DataListColumn[] = [
    { title: 'Usuario', field: 'userId' },
    { title: 'Titulo', field: 'title' },
    { title: 'Completado', field: 'completed', type:'boolean' }
  ]

  ngOnInit(): void {
    this.getTodos();
  }

  handleTodoSelect(item:any) {
    console.log('Selected item: ', item);
  }

  getTodos() {
    this.todoService.getAll().subscribe(response => {
      this.todos = response;
    }, err => {})
  }

}
