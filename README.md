# DAIKO SODI

Sitio web bilingüe de servicios contables y tributarios en Colombia, dirigido a inversionistas extranjeros, propietarios y negocios.

Dominio previsto: **https://www.daikosodi.com**.

## Ejecutar localmente

Solo se necesita Python 3 para iniciar un servidor de prueba:

```sh
python3 -m http.server 8080 --directory dist
```

Abrir http://localhost:8080.

No requiere Node.js, instalación de paquetes, compilación ni servicios de base de datos. También puede abrirse `dist/index.html` directamente para una revisión básica.

## Archivos

- `dist/index.html`: estructura y contenido de la página.
- `dist/style.css`: diseño adaptable, tipografías locales, temas claro y oscuro.
- `dist/app.js`: traducciones, transición de idioma, año automático y presentación de imágenes.
- `dist/scroll.js`: animaciones de entrada y efectos de desplazamiento.
- `dist/theme.js`: selección y persistencia del tema.
- `dist/fonts/`: tipografías DM Sans y Libre Caslon Display, con sus licencias OFL.
- `dist/slide-*`: fotografías e imagen contable de la presentación.
- `dist/daiko-sodi-logo.svg`: logo vectorial.
- `dist/daiko-sodi-contact-qr.png`: QR de contacto con el dominio www.daikosodi.com.
- `PHOTO-SOURCES.md`: procedencia y licencias de las imágenes.

Las imágenes y tipografías se sirven desde el propio proyecto. Los enlaces de WhatsApp, correo, dominio y créditos abren sus destinos externos al utilizarlos. La selección de idioma y tema se guarda localmente en el navegador; no se envían formularios a un servidor.

## Ramas

- **`trunk`**: rama principal para los cambios del sitio.
- **`base`**: copia de referencia de la primera versión subida a GitHub.

Para nuevas tareas, crear una rama `feature/nombre-del-cambio` desde `trunk`, revisar los cambios y después integrarlos en `trunk`. La rama `base` conserva el punto de partida.

## Publicación

Configurar el proveedor de alojamiento para servir la carpeta `dist`. No hay comando de compilación. El dominio personalizado y el certificado HTTPS se configuran en el alojamiento y en el proveedor DNS; subir este repositorio no configura el dominio ni activa GitHub Pages automáticamente.

## Revisión recomendada

Comprobar escritorio y móvil, los dos idiomas, ambos temas, navegación por secciones, la secuencia de imágenes, los enlaces de contacto y la lectura del QR. Las animaciones respetan la preferencia de movimiento reducido.

## Datos de contacto

El correo, teléfono, enlaces de WhatsApp y dominio aparecen en `dist/index.html`; los mensajes de consulta están en `dist/app.js`. La tarjeta personal está codificada dentro del QR. Si cambian esos datos, regenerar y verificar el QR además de actualizar los textos.

## Derechos de uso

El código y la identidad del sitio corresponden al proyecto DAIKO SODI. Las imágenes y tipografías de terceros conservan sus licencias originales; consultar `PHOTO-SOURCES.md`, los créditos del pie de página y los archivos OFL. No se concede una licencia adicional sobre recursos de terceros.
