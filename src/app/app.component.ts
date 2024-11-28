import { Component } from '@angular/core';
interface FullScreenElement extends HTMLElement {
  requestFullscreen(): Promise<void>;
  exitFullscreen(): Promise<void>;
}

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

  toggleFullScreen() {
    const elem: FullScreenElement | null = document.querySelector('.credencial-container');
    if (!document.fullscreenElement) {
      elem?.requestFullscreen().catch((err: any) => {
        alert(`Error al intentar activar el modo pantalla completa: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }
}
