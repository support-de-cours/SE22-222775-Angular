import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

// site.com/contact
const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    title: "Get In Touch",
    data: {
      classStyle: "green"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
