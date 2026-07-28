# Backend de Doña Dominga sobre Google Sheets

Reemplaza a Supabase. El código real vive pegado a mano en el editor de Apps
Script (no lo ejecuta Astro) — este archivo y `Code.gs` quedan en el repo
solo como referencia versionada.

## 1. Crear la Google Sheet

Crea una Sheet nueva con **2 pestañas**, con estos nombres exactos:

- `eventos`
- `carta_eventos_items`

En cada pestaña, la **fila 1 son los encabezados** (definen los campos del
JSON que lee/escribe el sitio):

- `eventos`: `id, artista, genero, fecha, hora, descripcion, imagen_url`
- `carta_eventos_items`: `id, name, price, description, group, available, sort_order`

**Importante:** antes de pegar datos, formatea la columna `fecha` de la
pestaña `eventos` como **texto plano** (Formato → Número → Texto sin
formato) — si no, Sheets la autoconvierte a fecha y el sitio deja de poder
comparar `yyyy-mm-dd` como string.

Pega los datos migrados desde `seed/eventos.csv` y `seed/carta_eventos_items.csv`
(exportados tal cual estaban en Supabase — 1 evento y 32 ítems de carta, nada
se pierde). Para la columna `available` de `carta_eventos_items`, seleccioná
esa columna y aplicá Insertar → Casilla de verificación, así queda con
checkboxes reales (TRUE/FALSE) en vez de texto.

⚠️ La imagen del evento migrado (`Potencia`) sigue apuntando a Supabase
Storage (`https://nbezmlsvoqisqjeacwhq.supabase.co/storage/...`) — esa URL
se cae si en algún momento pausás/eliminás el proyecto de Supabase. Conviene
descargar esa imagen y volver a subirla a donde vayas a alojar las fotos de
ahora en adelante, actualizando el campo `imagen_url` con el link nuevo.

## 2. Pegar el script

Extensiones → Apps Script (dentro de la Sheet) → pegar el contenido de
`Code.gs` reemplazando el `Code.gs` vacío que trae por defecto.

## 3. Configurar la contraseña del admin

Configuración del proyecto (ícono de engranaje) → Propiedades del script →
Agregar propiedad del script:

- Propiedad: `ADMIN_PASSWORD`
- Valor: la contraseña que vas a usar para entrar a `/admin`

## 4. Desplegar como Aplicación web

Desplegar → Nueva implementación → tipo "Aplicación web":

- Ejecutar como: **Yo**
- Quién tiene acceso: **Cualquier usuario**

Copiá la URL que termina en `/exec`.

## 5. Conectar el sitio

- En `.env` (raíz del proyecto Astro): `PUBLIC_APPS_SCRIPT_URL=<la URL /exec>`
- En `public/carta-eventos.html`: reemplazá el valor de `APPS_SCRIPT_URL` en
  el `<script>` (es HTML estático, no lee `.env`).

## Notas

- Cada vez que cambies el código en el editor de Apps Script, tenés que
  crear una **nueva implementación** (o editar la implementación existente)
  para que los cambios se reflejen en la URL `/exec` ya publicada.
- No hay sesiones ni expiración: la contraseña se guarda tal cual en
  `localStorage` del navegador del admin y se reenvía en cada acción. Es un
  trade-off aceptado para simplificar — no uses una contraseña que uses en
  otro lado.
