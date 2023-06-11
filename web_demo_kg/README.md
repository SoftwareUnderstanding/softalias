<h1 align="center"> Despliegue de la aplicación Vue.js </h1>
Este documento explica cómo desplegar la aplicación Vue.js y cómo configurar el archivo de variables de entorno .env.

# Requisitos previos
Para desplegar esta aplicación, debes tener instaladas las siguientes herramientas y versiones en tu sistema:

- Node.js v18.16.0 NPM (viene incluido con Node.js)
- Python 3.8
- Vue 3.3.8

# Variables de entorno
Las variables de entorno son utilizadas para definir valores que varían entre los entornos de desarrollo, pruebas, producción, etc. En este proyecto, se utilizan las siguientes variables:

- VUE_APP_HOST: Especifica el nombre de host donde se desplegará la aplicación Vue.js. Por defecto es localhost, que significa que la aplicación se ejecutará en tu máquina local. Si necesitas desplegarla en otro servidor, debes cambiar este valor al nombre del host de ese servidor.
- PORT: Este es el puerto en el que se ejecutará la aplicación. Por defecto es 9990, pero puede ser cualquier puerto que no esté actualmente en uso en tu sistema.
- VUE_APP_ENDPOINT_URL_DB: Esta es la URL del punto final (endpoint) de tu base de datos. Aquí la aplicación buscará datos. Debe ser cambiada a la URL de tu base de datos.

# Configuración del entorno
Las variables de entorno están guardadas en un archivo llamado .env en la raíz del proyecto. Para cambiar los valores, debes seguir estos pasos:

1. Abre el archivo '.env' en tu editor de texto preferido.
2. Cambia los valores de las variables a lo que necesitas para tu entorno.
3. Guarda y cierra el archivo '.env'.
4. Reinicia tu aplicación para que los cambios tengan efecto.

# Correr la aplicación en local
Para correr la aplicación en local, sigue estos pasos:

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta 'npm install' para instalar todas las dependencias del proyecto.
3. Configura tu archivo '.env' como se explicó en la sección anterior.
4. Ejecuta 'npm run serve' para iniciar la aplicación.
5. La aplicación ahora debería estar ejecutándose en http://<VUE_APP_HOST>:<PORT>, por ejemplo http://localhost:9990.

# Desplegar la aplicación en un servidor
Para desplegar la aplicación en un servidor, deberás crear una versión de producción de la aplicación y luego transferir los archivos a tu servidor. Aquí te dejo los pasos:

1. Abre una terminal en la raíz del proyecto.
2. Ejecuta 'npm install' para instalar todas las dependencias del proyecto.
3. Configura tu archivo '.env' como se explicó en la sección anterior.
4. Ejecuta 'npm run build' para crear una versión de producción de la aplicación. Esto creará una carpeta dist en tu proyecto con todos los archivos necesarios.
5. Copia la carpeta 'dist' a tu servidor. La ubicación exacta y el método para hacerlo dependerán de tu servidor.
6. En tu servidor, deberás configurar tu servidor web para servir los archivos en la carpeta 'dist'. Esto también dependerá de tu servidor web.
