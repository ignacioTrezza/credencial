import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CredencialComponent } from './components/credencial/credencial.component';

@NgModule({
  declarations: [AppComponent, CredencialComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
