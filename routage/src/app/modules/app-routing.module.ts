import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from '../components/a/a.component';
import { BComponent } from '../components/b/b.component';
import { CComponent } from '../components/c/c.component';

const routes: Routes = [

  // Page A
  {
    path: 'page-a',
    component: AComponent,
  },

  // Page B
  {
    path: 'page-b',
    component: BComponent,
  },

  // Page C
  {
    path: 'page-c',
    component: CComponent,
  },

  // Default route/page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a'
  },

  // NotFound / Wildcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
