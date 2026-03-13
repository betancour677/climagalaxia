# Registro de Progreso - Rebel Weather App

## 2026-02-15 - Actualización a Versión con API y Clases (Módulo 5)

### Objetivos
Actualizar la aplicación de clima "Rebel Weather" para cumplir con los nuevos requisitos del Módulo 5, que incluyen:
1.  Uso de **Programación Orientada a Objetos (POO)** con clases ES6+ (`WeatherApp`, `ApiClient`).
2.  Consumo de una **API REST externa** (Open-Meteo) para obtener datos reales de clima.
3.  Implementación de **asincronía** (`async/await`, `fetch`).
4.  Cálculo de **estadísticas** meteorológicas (promedios, alertas).
5.  Mantenimiento de la estética visual "Galáctica".

### Progreso Actual

#### 1. Análisis y Planificación
- Se ha analizado la estructura actual del proyecto (Módulo 4).
- Se ha decidido utilizar la API pública **Open-Meteo** para obtener datos climáticos reales sin necesidad de claves de API.
- Estrategia de mapeo: Se asignarán coordenadas terrestres reales a los planetas de Star Wars para simular su clima (ej. Tatooine -> Túnez, Hoth -> Groenlandia).

#### 2. Estructura de Archivos
- `assets/js/data.js`: Se conservará pero se enriquecerá con coordenadas (lat/lon).
- `assets/js/api.js`: Nueva clase `ApiClient` para manejar las peticiones `fetch`.
- `assets/js/app.js`: Nueva clase `WeatherApp` para la lógica principal y manipulación del DOM.

### Próximos Pasos
1.  Modificar `data.js` para incluir coordenadas geográficas en cada planeta.
2.  Implementar `ApiClient` para consumir Open-Meteo.
3.  Implementar `WeatherApp` para orquestar la carga de datos y renderizado.
4.  Actualizar HTMLs para cargar los nuevos scripts.

## 2026-03-12 - Migración a Single Page Application (SPA) con Vue 3

### Objetivos
Transformar la aplicación multipágina tradicional en una SPA moderna utilizando Vue.js 3 para mejorar la experiencia de usuario (UX) y la mantenibilidad del código.

### Progreso Actual

#### 1. Arquitectura de la SPA
- Se ha inicializado un proyecto con **Vite** en la carpeta `vue-spa`.
- Implementación de **Vue Router** para manejar la navegación entre Vista de Inicio, Detalle y Acerca de.
- Creación de un sistema de componentes reutilizables: `NavBar`, `FooterBar`, `PlanetCard`.

#### 2. Resolución de Errores de Construcción
- Encontrado: Error de Vite al no encontrar las vistas `HomeView.vue`, `DetalleView.vue` y `AcercaView.vue` referenciadas en el router.
- Acción: Se han creado los archivos de vista correspondientes en `src/views/` recuperando la lógica de los archivos HTML originales.
- Implementación: Se integró la lógica de consumo de API en `DetalleView.vue` utilizando los servicios previamente definidos.

#### 3. Mejoras Funcionales y Visuales
- **Corrección de Diseño Premium**: Se detectó que las vistas estaban utilizando clases de Bootstrap no cargadas. Se han actualizado `HomeView.vue`, `DetalleView.vue` y `AcercaView.vue` para utilizar el sistema de diseño premium definido en `main.css` (grids de CSS, flexbox y estilos galácticos).
- **Consistencia Visual**: Ahora la aplicación presenta un fondo oscuro profundo, tarjetas de planetas con efectos de hover, y una visualización de estadísticas optimizada para la Alianza Rebelde.
- **Transiciones y Búsqueda**: Se mantuvo la transición suave entre rutas y la barra de búsqueda funcional.

#### 4. Corrección de Datos y Diseño (Hotfix)
- **Carga de Clima en Home**: Se corrigió el error donde los planetas aparecían como `undefined` o `NaN`. Ahora `HomeView.vue` realiza una carga paralela de todos los climas al iniciarse.
- **Robustez de Formateo**: Se añadió lógica en `PlanetCard.vue` para manejar estados de carga y errores de datos, mostrando `--` en lugar de errores visuales.
- **Ajuste de Espaciados**: Se incrementaron los márgenes (`gap`) y rellenos (`padding`) en el archivo CSS global para evitar que los elementos se vean amontonados, mejorando la legibilidad en pantallas grandes.
- **Optimización de Grid**: Se ajustó el tamaño mínimo de las tarjetas de 260px a 300px para una mejor distribución visual.

#### 5. Ajustes de la Navbar
- **Separación de Elementos**: Se añadió un `gap` considerable a la `.navbar` y se configuró `.navbar__brand` como un contenedor flex. Esto asegura que el enlace de "Inicio" no se pegue al nombre de la app y que el ícono ⚔️ tenga aire respecto al texto.
- **Prevención de Envoltura**: Se aplicó `white-space: nowrap` al nombre de la marca para evitar que se rompa en varias líneas en pantallas medianas.

#### 6. Documentación del Proyecto
- **README Táctico**: Se ha creado un `README.md` completo dentro de la carpeta `vue-spa` con descripción temática, listado de vistas, configuración de rutas e instrucciones de instalación.
- **Enlace de Repositorio**: Se integró correctamente el enlace al repositorio de GitHub solicitado.

### Próximos Pasos
1.  Sincronizar la base de datos estática `planetas.js` con una base de datos **MySQL** utilizando **Prisma ORM** como se solicitó.
2.  Configurar la conexión a Hostinger para permitir la persistencia de datos (ej. favoritos o reportes del clima).
3.  Asegurar que todas las funcionalidades del Módulo 6 (Eventos y Estado) estén integradas.
