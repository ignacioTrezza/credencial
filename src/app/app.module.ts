import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CredencialComponent } from './components/credencial/credencial.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OthercomponentComponent } from './components/othercomponent/othercomponent.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarService } from './services/sidebar.service';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, CredencialComponent, TopbarComponent, SidebarComponent, OthercomponentComponent, MainLayoutComponent, ModalComponent],
  imports: [
    BrowserModule,
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
