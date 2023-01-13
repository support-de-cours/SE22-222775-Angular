import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input('value') data: string = '';
  @Input('index') index: number = 0;
  nbClick: number = 0;

  constructor(
    private _service: TodoService
  ) {
    console.log(`> Constructor\t\t\t- data is ${this.data} - Click : ${this.nbClick}`);
  }

  ngOnChanges() {
    console.log(`> ngOnChanges\t\t\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngOnInit() {
    console.log(`> ngOnInit\t\t\t\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngDoCheck() {
    console.log(`> ngDoCheck\t\t\t\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngAfterContentInit() {
    console.log(`> ngAfterContentInit\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngAfterContentChecked() {
    console.log(`> ngAfterContentChecked\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngAfterViewInit() {
    console.log(`> ngAfterViewInit\t\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngAfterViewChecked() {
    console.log(`> ngAfterViewChecked\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  ngOnDestroy() {
    console.log(`> ngOnDestroy\t\t\t- data : ${this.data} - Click : ${this.nbClick}`);
  }

  removeItem(index: number)
  {
    this._service.remove(index);
  }

  counter()
  {
    this.nbClick++;
  }
}
