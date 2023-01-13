import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  item: string = '';
  isDisabled: boolean = false;

  constructor(
    private _service: TodoService
  ){}

  addItem(): void 
  {
    this.isDisabled = true;
    this._service.item = this.item;
    this.item = '';

    setTimeout(()=> {this.isDisabled = false}, 3000);
  }
}
