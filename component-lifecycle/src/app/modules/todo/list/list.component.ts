import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  items:string[] = [];

  constructor(
    private _service: TodoService
  ){}

  ngOnInit(): void {
    this._service.items.subscribe(items => this.items = items);
  }
}
