import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label:string = '';
  @Input() ariaLabel:string = '';
  @Input() value:string = '';
  @Input() isRequired:boolean = true;
  @Input() isDisabled:boolean = false;

  onChange(event: any)
  {
    console.log( event.target.value );
  }
}
