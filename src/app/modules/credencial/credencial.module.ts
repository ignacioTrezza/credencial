import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalService } from './services/modal.service';
import { CredencialDemoComponent } from './demo/credencial-demo.component';
import { ModalService } from './services/modal.service';
import { CredencialComponent } from './components/credencial/credencial.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    CredencialComponent,
    ModalComponent,
    CredencialDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CredencialComponent,
    ModalComponent,
    CredencialDemoComponent
  ],
  providers: [
    ModalService
  ]
})
export class CredencialModule { } 