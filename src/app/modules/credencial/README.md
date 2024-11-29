# Módulo Credencial

Este módulo proporciona un componente reutilizable para mostrar credenciales con funcionalidades de pantalla completa y vista modal.

## Instalación

1. Copiar la carpeta `modules/credencial` completa a tu proyecto en `src/app/modules/`
2. Crear el directorio `credencial` en `src/assets/` y copiar la imagen:
   ```bash
   mkdir -p src/assets/credencial
   cp path/to/Credencial.png src/assets/credencial/
   ```
3. Importar el módulo en tu `app.module.ts`:
   ```typescript
   import { CredencialModule } from './modules/credencial';

   @NgModule({
     imports: [
       CredencialModule
     ]
   })
   export class AppModule { }
   ```

## Uso

### Implementación Básica

```typescript
// En tu componente .ts
export class YourComponent {
  nombre: string = 'Juan';
  apellido: string = 'Pérez';
  dni: string = '25.489.268';
  socio: number = 123456;
  vencimiento: string = '14/05/1975';
}
```

```html
<!-- En tu template -->
<app-credencial
  [nombre]="nombre"
  [apellido]="apellido"
  [dni]="dni"
  [socio]="socio"
  [vencimiento]="vencimiento">
</app-credencial>
```

### Estilos Requeridos

Para que el componente se muestre correctamente, necesitas aplicar estos estilos al contenedor:

```css
app-credencial {
  flex: 1;
  min-width: 0;
  max-width: 23rem;
  height: auto;
}
```

## Inputs

| Propiedad | Tipo | Descripción | Valor por defecto |
|-----------|------|-------------|-------------------|
| nombre | string | Nombre del titular | '' |
| apellido | string | Apellido del titular | '' |
| dni | string | Número de documento | '' |
| socio | number | Número de socio | 0 |
| vencimiento | string | Fecha de vencimiento | '' |
| backgroundImage | string | URL de la imagen de fondo | 'assets/credencial/Credencial.png' |

## Características

- Visualización responsive
- Modo pantalla completa en dispositivos móviles
- Vista modal en dispositivos de escritorio
- Adaptación automática del tamaño
- Botones contextuales según el tamaño de visualización

## Estructura de Archivos

```
credencial/
├── components/
│   ├── credencial/
│   │   ├── credencial.component.ts
│   │   ├── credencial.component.html
│   │   ├── credencial.component.css
│   │   └── readme.MD
│   └── modal/
│       ├── modal.component.ts
│       ├── modal.component.html
│       └── modal.component.css
├── services/
│   └── modal.service.ts
├── demo/
│   └── credencial-demo.component.ts
├── index.ts
├── README.md
└── credencial.module.ts
```

## Dependencias

- @angular/common
- @angular/core

## Notas de Implementación

- La imagen de fondo debe estar ubicada en `src/assets/credencial/Credencial.png`
- El componente incluye un servicio modal integrado para la visualización en pantalla completa
- El componente demo puede usarse como referencia para la implementación

## Ejemplo de Uso con Modal

El componente incluye un servicio modal que se puede usar para mostrar la credencial en una ventana modal:

```typescript
import { ModalService } from './modules/credencial/services/modal.service';

export class YourComponent {
  constructor(private modalService: ModalService) {}

  showCredencial() {
    this.modalService.open({
      nombre: 'Juan',
      apellido: 'Pérez',
      dni: '25.489.268',
      socio: 123456,
      vencimiento: '14/05/1975'
    });
  }
}
```

## Contribución

Para contribuir al desarrollo de este módulo:
1. Fork del repositorio
2. Crear una rama para tu feature
3. Commit de tus cambios
4. Push a la rama
5. Crear un Pull Request