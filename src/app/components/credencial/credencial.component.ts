import { Component, Input } from '@angular/core';

interface FullScreenElement extends HTMLElement {
  requestFullscreen(): Promise<void>;
  exitFullscreen(): Promise<void>;
}

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})



export class CredencialComponent {

  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() dni: string = '';
  @Input() socio: number = 0;
@Input() vencimiento: string = '';

  private buttonTimeout: any;

  toggleFullScreen() {
    const elem: FullScreenElement | null = document.querySelector('.credencial-container');
    const credencialElem: HTMLElement | null = document.querySelector('.credencial');
    if (!document.fullscreenElement) {
      elem?.requestFullscreen().catch((err: any) => {
        alert(`Error al intentar activar el modo pantalla completa: ${err.message} (${err.name})`);
      });
      credencialElem?.classList.add('credencial-fullscreen');
    } else {
      document.exitFullscreen();
      credencialElem?.classList.remove('credencial-fullscreen');
    }
  }

  showButton() {
    const button = document.querySelector('.full-screen-button');
    button?.classList.add('show');
    
    // Limpiamos el timeout anterior si existe
    if (this.buttonTimeout) {
      clearTimeout(this.buttonTimeout);
    }
    
    // Establecemos un nuevo timeout
    this.buttonTimeout = setTimeout(() => {
      button?.classList.remove('show');
    }, 2000);
  }

}
