# ⚔️ Rebel Weather SPA - Terminal Táctica Galáctica

**Versión 3.0 - Single Page Application (SPA) con Vue.js 3**

Bienvenido a la terminal de clima oficial de la Alianza Rebelde. Esta aplicación ha sido modernizada para funcionar como una **Single Page Application (SPA)** eficiente, permitiendo a los operativos rebeldes consultar las condiciones atmosféricas de diversos sectores galácticos de forma instantánea y sin recargas de página.

## 🌌 Temática y Propósito
La aplicación utiliza datos meteorológicos **reales** (vía Open-Meteo API) mapeados a coordenadas terrestres que simulan el clima de planetas icónicos de Star Wars:
- **Tatooine**: Clima de Túnez.
- **Hoth**: Clima de Groenlandia.
- **Endor**: Clima de los bosques de California.
- ...y muchos otros sectores de la galaxia.

## 🖼️ Vistas Principales

La interfaz cuenta con tres módulos tácticos principales:

1.  **Inicio (Home)**: Mapa galáctico con tarjetas de planetas. Incluye una barra de búsqueda para filtrar sectores por nombre o región y sincronización en tiempo real del clima actual.
2.  **Detalle del Planeta**: Informe exhaustivo de un sector específico que incluye:
    - Clima actual (Viento, Humedad, Estado).
    - Guía de supervivencia rebelde personalizada.
    - Estadísticas semanales calculadas (Mínimas, Máximas y Alertas).
    - Pronóstico detallado para los próximos 7 días.
3.  **Acerca de**: Información técnica sobre la infraestructura de la terminal y las tecnologías de combate utilizadas.

## 🛣️ Enrutamiento (Vue Router)

La navegación SPA está gestionada por `vue-router`, configurada bajo las siguientes rutas dinámicas:

-   `/` (`Home`): Vista principal con el listado de planetas.
-   `/lugar/:id` (`Detalle`): Ruta dinámica que carga la información específica del planeta según su identificador único.
-   `/acerca` (`Acerca`): Información del proyecto y créditos.

## 🛠️ Tecnologías Utilizadas

-   **Vue.js 3**: Framework progresivo para la interfaz reactiva.
-   **Vite**: Herramienta de construcción ultra rápida.
-   **Vue Router**: Gestión de navegación SPA.
-   **Open-Meteo API**: Intercepción de transmisiones climáticas reales.
-   **CSS Moderno (Variables & Grids)**: Diseño premium personalizado para la Alianza.

## 🚀 Instrucciones de Ejecución

Para desplegar la terminal táctica localmente, sigue estos pasos:

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Lanzar servidor de desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Compilar para producción**:
    ```bash
    npm run build
    ```

## 🔗 Enlace al Repositorio

Puedes encontrar el código fuente y el historial de misiones en GitHub:
[https://github.com/betancour677/climagalaxia.git](https://github.com/betancour677/climagalaxia.git)

---
*Que la Fuerza acompañe tu código.*
