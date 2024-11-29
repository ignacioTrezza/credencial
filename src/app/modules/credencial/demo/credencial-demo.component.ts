import { Component } from '@angular/core';

@Component({
  selector: 'app-credencial-demo',
  template: `
    <div class="demo-container">
      <app-credencial
        [nombre]="nombre"
        [apellido]="apellido"
        [dni]="dni"
        [socio]="socio"
        [vencimiento]="vencimiento"
        [backgroundImage]="'assets/credencial/Credencial.png'">
      </app-credencial>
    </div>
  `,
  styles: [`
    .demo-container {
      display: flex;
      justify-content: center;
      padding: 2rem;
    }
    
    app-credencial {
      flex: 1;
      min-width: 0;
      max-width: 23rem;
      height: auto;
    }
  `]
})
export class CredencialDemoComponent {
  nombre: string = 'La credencial';
  apellido: string = 'de Dios';
  dni: string = '25.489.268';
  socio: number = 123456;
  vencimiento: string = '14/05/1975';
} 