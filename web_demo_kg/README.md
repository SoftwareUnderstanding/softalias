### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Despliegue de la aplicación Vue.js
Este documento explica cómo desplegar la aplicación Vue.js y cómo configurar el archivo de variables de entorno .env.

## Variables de entorno
Las variables de entorno son utilizadas para definir valores que varían entre los entornos de desarrollo, pruebas, producción, etc. En este proyecto, se utilizan las siguientes variables:

VUE_APP_HOST: Especifica el nombre de host donde se desplegará la aplicación Vue.js. Por defecto es localhost, que significa que la aplicación se ejecutará en tu máquina local. Si necesitas desplegarla en otro servidor, debes cambiar este valor al nombre del host de ese servidor.
PORT: Este es el puerto en el que se ejecutará la aplicación. Por defecto es 9990, pero puede ser cualquier puerto que no esté actualmente en uso en tu sistema.
VUE_APP_ENDPOINT_URL_DB: Esta es la URL del punto final (endpoint) de tu base de datos. Aquí la aplicación buscará datos. Debe ser cambiada a la URL de tu base de datos.
Configuración del entorno
Las variables de entorno están guardadas en un archivo llamado .env en la raíz del proyecto. Para cambiar los valores, debes seguir estos pasos:

Abre el archivo .env en tu editor de texto preferido.
Cambia los valores de las variables a lo que necesitas para tu entorno.
Guarda y cierra el archivo .env.
Reinicia tu aplicación para que los cambios tengan efecto.
Nota: Recuerda no incluir tu archivo .env en tu control de versiones (como git) si contiene información sensible como contraseñas, claves API, etc. En cambio, puedes crear un archivo .env.example con las mismas variables, pero con valores falsos para que otros desarrolladores sepan qué variables de entorno se necesitan.

## Despliegue de la aplicación
Para desplegar la aplicación, debes tener instalado Node.js y npm en tu sistema. Después, sigue estos pasos:

Abre una terminal en la raíz del proyecto.
Ejecuta npm install para instalar todas las dependencias del proyecto.
Configura tu archivo .env como se explicó en la sección anterior.
Ejecuta npm run serve para iniciar la aplicación.
La aplicación ahora debería estar ejecutándose en http://<VUE_APP_HOST>:<PORT>, por ejemplo http://localhost:9990.
