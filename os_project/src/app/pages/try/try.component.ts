import { Component } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent {
  constructor() { }
  table : any = [
    {name: 'John', age: 30, city: 'New York'},
    {name: 'Peter', age: 40, city: 'London'},
  ];
  del(): void {
    this.table.deleteRow(0);
  }
}
