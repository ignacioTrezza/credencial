import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';


interface FullScreenElement extends HTMLElement {
  requestFullscreen(): Promise<void>;
  exitFullscreen(): Promise<void>;
}

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})



export class CredencialComponent implements OnInit, OnDestroy {

  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() dni: string = '';
  @Input() socio: number = 0;
  @Input() vencimiento: string = '';
  @Input() backgroundImage: string = 'assets/credencial/Credencial.png';
  @Input() originalWidth: number = 368;

  private buttonTimeout: any;
  private isFullscreen: boolean = false;
  showFullscreenButton: boolean = false;
  showModalButton: boolean = false;
  private resizeObserver: ResizeObserver;

  constructor(
    private elementRef: ElementRef,
    private modalService: ModalService
  ) {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.checkButtons(entry.contentRect.width);
      }
    });
  }

  ngOnInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement.querySelector('.credencial-container'));
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect();
  }

  private checkButtons(currentWidth: number) {
    const viewportWidth = window.innerWidth;
    
    if (currentWidth < this.originalWidth) {
      if (viewportWidth < 600) {
        this.showFullscreenButton = true;
        this.showModalButton = false;
      } else {
        this.showFullscreenButton = false;
        this.showModalButton = true;
      }
    } else {
      this.showFullscreenButton = false;
      this.showModalButton = false;
    }
  }

  openModal() {
    this.modalService.open({
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      socio: this.socio,
      vencimiento: this.vencimiento,
      backgroundImage: this.backgroundImage
    });
  }

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
    const fullScreenButton = document.querySelector('.full-screen-button');
    const modalButton = document.querySelector('.modal-button');
    
    fullScreenButton?.classList.add('show');
    modalButton?.classList.add('show');
    
    // Limpiar el timeout existente si hay uno
    if (this.buttonTimeout) {
      clearTimeout(this.buttonTimeout);
    }
    
    // Configurar nuevo timeout para ocultar los botones después de 2 segundos
    this.buttonTimeout = setTimeout(() => {
      fullScreenButton?.classList.remove('show');
      modalButton?.classList.remove('show');
    }, 2000);
  }

}
