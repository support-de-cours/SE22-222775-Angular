import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `<li>{{item|json}}</li>`,
  changeDetection: ChangeDetectionStrategy.OnPush 
  // changeDetection: ChangeDetectionStrategy.Default 
})
export class ItemComponent {
  @Input() item: any;
}
