import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { BooksModule } from './books/books.module';

const customModules: any[] = [
  HomeModule,
  ContactModule,
  AboutModule,
  BooksModule
];

@NgModule({
  declarations: [],
  imports: [
    ...customModules,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
