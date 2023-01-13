import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    ItemComponent,
    FormComponent
  ],
})
export class TodoModule { }
