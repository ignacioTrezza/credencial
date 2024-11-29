import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OthercomponentComponent } from './components/othercomponent/othercomponent.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarService } from './services/sidebar.service';
import { CredencialModule } from './modules/credencial/credencial.module';

@NgModule({
  declarations: [
    AppComponent, 
    TopbarComponent, 
    SidebarComponent, 
    OthercomponentComponent, 
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    CredencialModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
