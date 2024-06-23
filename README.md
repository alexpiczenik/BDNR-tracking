# Proyecto de Tracking de Actividad

## Repositorio y Frontend

El proyecto de tracking de actividad incluye tanto el backend como un frontend interactivo para facilitar la gestión de actividades. El repositorio completo está disponible en GitHub: [Nombre del Repositorio](link_al_repositorio).

### Frontend

Para interactuar con el frontend, que permite gestionar actividades de manera intuitiva:

#### Guía para correr el frontend

Asumiendo que ya se tiene el repositorio clonado, seguir estos pasos:

1. Ir a la carpeta frontend: `cd frontend`
2. Instalar las dependencias: `npm install`
3. Levantar el servidor: `npm start`

### Backend

El backend está implementado en Node.js con Express y utiliza Cassandra como base de datos para almacenar y consultar datos de actividades.

#### Guía para correr el backend

Para configurar y ejecutar el backend:

1. Asegúrate de tener Cassandra corriendo y ejecuta los scripts proporcionados para crear el keyspace, la tabla y insertar registros.
2. Clona el repositorio desde GitHub.
3. Navega a la carpeta backend: `cd backend`
4. Instala las dependencias: `npm install`
5. Inicia el servidor en modo desarrollo: `npm run dev`

### Configuración adicional

En el README del repositorio encontrarás información detallada sobre cómo configurar y ejecutar tanto el frontend como el backend. Esto incluye instrucciones específicas para la instalación de dependencias, configuración de la base de datos y el inicio de los servidores.

Este enfoque asegura una implementación efectiva y proporciona una guía clara para cualquier usuario que desee explorar, entender y utilizar el proyecto en un entorno de desarrollo.
