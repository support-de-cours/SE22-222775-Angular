import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path: 'books',
    component: ListComponent
  },
  {
    path: 'book',
    children: [
      {
        path: '',
        component: CreateComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ReadComponent
          },
          {
            path: 'edit',
            component: EditComponent
          },
          {
            path: 'delete',
            component: DeleteComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
