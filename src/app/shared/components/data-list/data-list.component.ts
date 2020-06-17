import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() data:any[];
  @Input() columns:any[];
  @Output() onItemSelect:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item) {
    console.log('Seleccionado: ', item);
    this.onItemSelect.emit(item);
  }

}
