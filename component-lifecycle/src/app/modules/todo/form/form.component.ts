import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  item: string = '';

  constructor(
    private _service: TodoService
  ){}

  addItem(): void 
  {
    this._service.item = this.item;
    this.item = '';
  }
}
