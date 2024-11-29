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
  private isFullscreen: boolean = false;

  toggleFullScreen() {
    const elem: FullScreenElement | null = document.querySelector('.credencial-container');
    const credencialElem: HTMLElement | null = document.querySelector('.credencial');
    
    if (!document.fullscreenElement) {
      elem?.requestFullscreen().catch((err: any) => {
        alert(`Error al intentar activar el modo pantalla completa: ${err.message} (${err.name})`);
      });
      credencialElem?.classList.add('credencial-fullscreen');
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      credencialElem?.classList.remove('credencial-fullscreen');
      this.isFullscreen = false;
    }
    this.showButton(); // Mostrar el botón al cambiar el modo
  }

  showButton() {
    const button = document.querySelector('.full-screen-button');
    button?.classList.add('show');
    
    // Limpiar el timeout existente si hay uno
    if (this.buttonTimeout) {
      clearTimeout(this.buttonTimeout);
    }
    
    // Configurar nuevo timeout para ocultar el botón después de 2 segundos
    this.buttonTimeout = setTimeout(() => {
      button?.classList.remove('show');
    }, 2000);
  }

}
