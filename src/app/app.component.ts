import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'credencial';
  nombre: string = 'Juan';
  apellido: string = 'Gomez';
  dni: string = '25.489.268';
  socio: number = 5468;
  vencimiento: string = '14/05/1975';
}
