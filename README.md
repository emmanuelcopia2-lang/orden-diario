# Orden Diario (PWA)

## Subirla a GitHub Pages (gratis)
1. En github.com crea un repositorio nuevo (puede ser público; no contiene datos tuyos).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. Ve a Settings > Pages > Source: "Deploy from a branch", rama `main`, carpeta `/ (root)`. Guarda.
4. Espera 1 o 2 minutos. Tu app estará en https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/
5. Ábrela en Chrome del Android, menú ⋮ > "Instalar app" (o "Añadir a pantalla de inicio").

## Datos y privacidad
Todo se guarda solo en el teléfono (localStorage). No hay servidor ni cuentas.
Haz copias en Más > Copia de seguridad. Borrar los datos de Chrome borra la app.

## Actualizar
Cambia index.html y sube el cambio. Si no ves la versión nueva, sube el número en sw.js (const V='orden-v2').
