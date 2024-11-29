import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  nombre: string = 'La credencial';
  apellido: string = 'de Dios';
  dni: string = '25.489.268';
  socio: number = 123456;
  vencimiento: string = '14/05/1975';
}
