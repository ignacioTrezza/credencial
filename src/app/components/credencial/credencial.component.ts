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

}
