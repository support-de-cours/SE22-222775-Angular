import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [

  {
    path: 'books',
    children: [

      // Liste des livres
      // /books/
      {
        path: '',
        component: ListComponent
      },

      // Création d'un livre
      // /books/create
      {
        path: 'create',
        component: CreateComponent
      },

      // Affichage des données d'un livre
      // /books/42
      {
        path: ':id',
        // component: ReadComponent
        children: [

          // Affichage des données d'un livre
          // /books/42
          {
            path: '',
            component: ReadComponent
          },

          // Modification d'un livre
          // /books/42/edit
          {
            path: 'edit',
            component: UpdateComponent
          },

          // Suppression d'un livre
          // /books/42/delete
          {
            path: 'delete',
            component: DeleteComponent
          },

        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
