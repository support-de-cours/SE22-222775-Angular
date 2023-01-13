import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

// site.com/about
const routes: Routes = [
  {
    path: 'about/:paramTest',
    component: AboutComponent,
    title: "About Us",
    data: {
      classStyle: "red"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
