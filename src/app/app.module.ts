import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CredencialComponent } from './components/credencial/credencial.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OthercomponentComponent } from './components/othercomponent/othercomponent.component';

@NgModule({
  declarations: [AppComponent, CredencialComponent, TopbarComponent, SidebarComponent, OthercomponentComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
