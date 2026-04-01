# ⚔️ Rebel Weather SPA - Terminal Táctica Galáctica

**Módulo 8 - Entrega Final del Portafolio**

Bienvenido a la versión definitiva de la terminal de clima de la Alianza Rebelde. Esta aplicación es una Single Page Application (SPA) construida con **Vue 3**, diseñada para que los operativos rebeldes puedan monitorear las condiciones atmosféricas en sectores clave de la galaxia en tiempo real.

## 🌐 Demo en Vivo
Puedes probar la terminal táctica activa aquí:
[https://climagalaxia.netlify.app/](https://climagalaxia.netlify.app/)

## 🔗 Enlace al Repositorio
[https://github.com/betancour677/climagalaxia.git](https://github.com/betancour677/climagalaxia/tree/v3-vue-version)

---

## 🚀 Funcionalidades Clave (MVP Final)

### 1. Sistema de Rutas SPA
*   **Mapa Galáctico (Home)**: Listado de sectores con su clima actual obtenido vía satélite.
*   **Detalle de Sector**: Informe profundo de un planeta específico, incluyendo coordenadas terrestres reales.
*   **Favoritos**: Sección personalizada para usuarios autenticados para monitorear sectores críticos.
*   **Acerca de**: Especificaciones técnicas de la terminal.

### 2. Gestión de Estado Global (Vuex)
La aplicación utiliza un Store centralizado para:
*   **Datos Climáticos**: Lista de planetas y pronóstico detallado compartido entre vistas.
*   **Autenticación**: Manejo de sesión de usuario y persistencia local.
*   **Preferencias Universales**: Cambio dinámico de unidades (°C/°F) y temas visuales activo para todos los visitantes (invitados y registrados), con persistencia de favoritos para operativos logueados.
*   **Estados de Carga**: Manejo de indicadores "Cargando..." y mensajes de error ante fallos de conexión.

### 3. Inteligencia Meteorológica y Estadísticas
*   **Consumo de API Real**: Conexión con *Open-Meteo API* mediante Axios/Fetch.
*   **Estadísticas Semanales**: Cálculo en tiempo real de temperaturas mínimas, máximas y promedio del sector.
*   **Alertas Tácticas**: Sistema basado en reglas que detecta automáticamente "Olas de Calor" o "Semanas Lluviosas" para alertar al personal rebelde.
*   **Distribución de Condiciones**: Conteo de días por tipo de clima (Despejado, Lluvia, Niebla, etc.).

---

## 🛠️ Stack Tecnológico
*   **Core**: Vue 3 (Composition API).
*   **Estado**: Vuex 4.
*   **Enrutamiento**: Vue Router 4.
*   **Estilos**: CSS3 Moderno (Glassmorphism & Variables CSS).
*   **API**: Open-Meteo (Sin necesidad de API Key, alta disponibilidad).

---

## 💻 Instrucciones de Ejecución Local

### Requisitos:
*   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
*   [npm](https://www.npmjs.com/) (encargado de las dependencias).

### Pasos:
1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/betancour677/climagalaxia.git
    cd climagalaxia
    git checkout v3-vue-version
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Lanzar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
4.  **Acceder a la app:**
    Abre tu navegador en `http://localhost:5173`.

---

### 🔑 Perfiles de Prueba
Puedes iniciar sesión para probar las funciones de **Favoritos** y **Preferencias**:
*   **Luke Skywalker**: `luke@rebellion.com` / clave: `force`
*   **Han Solo**: `han@falcon.com` / clave: `kesselrun`

---
*Que la Fuerza acompañe tu código.*
*Desarrollado por Emmanuel Betancour Escobar - 2026*
