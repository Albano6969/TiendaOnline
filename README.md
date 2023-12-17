Este proyecto es una tienda electrónica que muestra productos y permite aplicar filtros y realizar búsquedas. El frontend está construido con React y el backend con Laravel.
## Estructura de Carpetas

- En la carpeta Test1 encontraremos un diseño basico de HTML y CSS.
- En la carpeta Test2 tendremos dos carpetas Back(Laravel) y Front(React).

## Requisitos

Para ejecutar este proyecto necesitarás tener instalado:

- [Node.js](https://nodejs.org/)
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)

## Instalación

### Backend (Laravel)

1. Clona el repositorio del proyecto (o descarga el código fuente) en tu máquina local.
2. Navega hasta la carpeta del backend.
3. Ejecuta `composer install` para instalar las dependencias de PHP.
4. Configura tu entorno `.env` (puedes copiar `.env.example` y ajustarlo según tus necesidades).
5. Ejecuta `php artisan serve --port=8888` para iniciar el servidor de Laravel en el puerto 8888.

### Frontend (React)

1. Navega hasta la carpeta del frontend.
2. Ejecuta `npm install` para instalar las dependencias de Node.js.
3. Ejecuta `npm start` para iniciar la aplicación React. La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

## Uso

Una vez que ambos servidores estén en funcionamiento (backend en el puerto 8888 y frontend en el puerto 3000 por defecto), puedes navegar a través de la tienda electrónica.

- Busca productos usando el icono de la lupa en la barra de navegación.
- Aplica filtros de precio utilizando la opción "Filtrar".
- Haz clic en cualquier producto para ver sus detalles en un modal.
