import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from '../components/a/a.component';
import { BComponent } from '../components/b/b.component';
import { CComponent } from '../components/c/c.component';
import { BeforePageUnloadGuard } from '../guards/before-page-unload.guard';
import { CanLoadGuard } from '../guards/can-load.guard';
import { NoGuard } from '../guards/no.guard';
import { OnPageLoadGuard } from '../guards/on-page-load.guard';
import { YesGuard } from '../guards/yes.guard';

const routes: Routes = [

  // Page A
  {
    path: 'page-a',
    component: AComponent,
    canActivate: [
      OnPageLoadGuard
    ]
  },

  // Page B
  {
    path: 'page-b',
    component: BComponent,
  },

  // Page C
  {
    path: 'page-c',
    component: CComponent
  },

  // Default route/page
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page-a'
  },

  // NotFound / Wildcard
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    canLoad: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
