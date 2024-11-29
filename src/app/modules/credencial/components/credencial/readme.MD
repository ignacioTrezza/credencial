# Componente Credencial

El componente `Credencial` es un componente reutilizable diseñado para mostrar una credencial con datos personalizables y una imagen de fondo configurable.

## Uso

Para utilizar el componente, debes incluirlo en tu plantilla Angular y proporcionar los datos necesarios a través de atributos `@Input`.

### Inputs

- `nombre`: El nombre de la persona en la credencial.
- `apellido`: El apellido de la persona en la credencial.
- `dni`: El DNI de la persona.
- `socio`: Número de socio.
- `vencimiento`: Fecha de vencimiento de la credencial.
- `backgroundImage`: URL de la imagen de fondo para la credencial.

### Ejemplo de Uso

```html
<app-credencial
[nombre]="'Juan'"
[apellido]="'Pérez'"
[dni]="'12345678A'"
[socio]="1234"
[vencimiento]="'31/12/2023'"
[backgroundImage]="'path/to/your/image.jpg'"
></app-credencial>
```

### Estilos

El componente se adapta al tamaño del contenedor padre, pero puedes controlar aspectos como el tamaño y la relación de aspecto mediante CSS externo o estilos en línea.

### Notas

- Asegúrate de que la imagen de fondo tenga una relación de aspecto adecuada para evitar distorsiones.
- El componente maneja un modo de pantalla completa que puede ser activado mediante un botón en la interfaz de usuario.