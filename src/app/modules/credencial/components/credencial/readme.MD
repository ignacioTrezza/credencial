# Componente Credencial

Este componente es el núcleo del módulo credencial, diseñado para mostrar una credencial interactiva con capacidades responsive y adaptativas.

## Características Principales

- Diseño responsive con relación de aspecto fija (1.6)
- Adaptación automática del tamaño de fuente usando clamp() y cqi
- Modo pantalla completa con rotación automática
- Integración con modal para vista ampliada
- Botones contextuales según el tamaño de visualización

## Comportamiento Adaptativo

El componente tiene tres modos de visualización:

1. **Vista Normal**: Cuando el contenedor tiene suficiente espacio
2. **Vista Modal**: En dispositivos de escritorio cuando el espacio es reducido
3. **Pantalla Completa**: En dispositivos móviles cuando el espacio es reducido

## Posicionamiento de Elementos

Los elementos de la credencial están posicionados con precisión usando valores porcentuales:

```css
.nombre-apellido {
    top: 26.5%;
    left: 40%;
}

.dni {
    top: 36%;
    left: 40%;
}

.socio {
    top: 43.5%;
    left: 40%;
}

.vencimiento {
    bottom: 0.5%;
    left: 74%;
}
```

## Tamaños de Fuente

El componente utiliza unidades CSS modernas para escalar el texto:

```css
.nombre-apellido {
    font-size: clamp(5px, 4cqi, 15px);
}

.dni, .socio {
    font-size: clamp(4.5px, 3.8cqi, 14px);
}

.vencimiento {
    font-size: clamp(4.2px, 3.7cqi, 13.5px);
}
```

## Modo Pantalla Completa

En modo pantalla completa, el componente:
- Rota 90 grados para mejor visualización
- Ajusta el tamaño para maximizar el espacio disponible
- Mantiene la relación de aspecto
- Escala el texto proporcionalmente

## Integración con Modal

Cuando se usa en modo modal:
- Se ajusta automáticamente al contenedor del modal
- Aplica estilos específicos para mejor legibilidad
- Mantiene la interactividad
- Permite cerrar con un clic fuera del modal

## Notas de Implementación

- El componente requiere una imagen de fondo específica
- La relación de aspecto debe mantenerse en 1.6
- Los estilos del contenedor padre son críticos para el correcto funcionamiento
- El ResizeObserver se usa para detectar cambios de tamaño y ajustar los botones

## Ejemplo de Uso con Estilos Personalizados

```html
<div class="custom-container">
  <app-credencial
    [nombre]="'Juan Pérez'"
    [dni]="'25.489.268'"
    [socio]="123456"
    [vencimiento]="'14/05/1975'"
    class="custom-credencial">
  </app-credencial>
</div>

<style>
.custom-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
}

.custom-credencial {
  flex: 1;
  min-width: 0;
  max-width: 23rem;
  height: auto;
}
</style>
```