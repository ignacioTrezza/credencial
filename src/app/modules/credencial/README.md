# Módulo Credencial

## Instalación

1. Copiar la carpeta `modules/credencial` completa a tu proyecto en `src/app/modules/`
2. Importar el módulo en tu `app.module.ts`:

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

### 1. Importar el módulo

```typescript
import { CredencialModule } from './modules/credencial';

@NgModule({
  imports: [CredencialModule]
})
export class YourModule { }
```

### 2. Usar el componente

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

### 3. Estilos requeridos

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

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| nombre | string | Nombre del titular |
| apellido | string | Apellido del titular |
| dni | string | Número de documento |
| socio | number | Número de socio |
| vencimiento | string | Fecha de vencimiento |
| backgroundImage | string | (Opcional) URL de la imagen de fondo |

## Características

- Visualización responsive
- Modo pantalla completa
- Vista modal
- Adaptación automática del tamaño
- Botones contextuales según el tamaño de visualización

## Estructura de archivos

```
credencial/
├── components/
│   ├── credencial/
│   │   ├── credencial.component.ts
│   │   ├── credencial.component.html
│   │   └── credencial.component.css
│   └── modal/
│       ├── modal.component.ts
│       ├── modal.component.html
│       └── modal.component.css
├── services/
│   └── modal.service.ts
├── demo/
│   └── credencial-demo.component.ts
├── assets/
│   └── Credencial.png
├── index.ts
├── README.md
└── credencial.module.ts
```

## Dependencias

- @angular/common
- @angular/core 