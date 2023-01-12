import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslationModule } from './translation/translation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslationModule, // <---- Import du module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
