import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  title = 'credencial';
  nombre: string = 'Juan';
  apellido: string = 'Gomez';
  dni: string = '25.489.268';
  socio: number = 123456;
  vencimiento: string = '14/05/1975';
}
