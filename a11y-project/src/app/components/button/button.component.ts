import { Component } from '@angular/core';

@Component({
  selector: 'component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  myActionLabel: string = "My Action Button";
  isDisabled: boolean = true;
}
