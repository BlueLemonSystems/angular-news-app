import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnChanges {

  @Input() data:any[];
  @Input() columns:any[];
  @Output() onItemSelect:EventEmitter<any> = new EventEmitter();

  constructor() { }

  filteredData:any[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes:any) {
    if(changes.data && this.data) {
      console.log('Cambio data: ', changes.data);
      this.filteredData = this.data.slice();
    }
  }

  selectItem(item) {
    console.log('Seleccionado: ', item);
    this.onItemSelect.emit(item);
  }

  filterData(query:string) {
    console.log('Buscar: ', query);
    query = query.toLowerCase();
    this.filteredData = this.data.filter(item => {
      let flag = false;
      this.columns.map(col => {
        if(typeof item[col.field] === 'string' && item[col.field].toLowerCase().includes(query)) {
          flag = true;
        }
      });
      return flag;
    });
  }

}



// Data: 
// 'Juliana'
// 'Ana'
// 'Susana'

// Filtered:
// 'Juliana'
// 'Ana'
// 'Susana'

// Search: 'ana'
// 'Juliana'
// 'Ana'
// 'Susana'

// Search: 'sana'
// 'Susana'

// Search: 'ana'
// 'Juliana'
// 'Ana'
// 'Susana'