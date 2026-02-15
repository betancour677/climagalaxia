# 🌌 Rebel Weather - App de Clima Galáctica (Módulo 5)

**Versión 2.0 - Ahora con Datos Reales y POO**

Una aplicación web que combina la estética de Star Wars con datos meteorológicos reales obtenidos mediante la API de Open-Meteo. Esta versión introduce arquitectura basada en clases, manejo de asincronía y consumo de APIs REST.

## 📋 Novedades de esta versión

-   **Datos en Tiempo Real**: Conexión con Open-Meteo API para obtener clima actual y pronósticos.
-   **Simulación Galáctica**: Mapeo de coordenadas terrestres a planetas de Star Wars (ej. Tóquio es Coruscant).
-   **Arquitectura POO**: Código organizado en clases (`WeatherApp`, `ApiClient`) siguiendo principios modernos.
-   **Estadísticas Dinámicas**: Cálculo automático de promedios, máximas, mínimas y alertas basado en el pronóstico real.

## 🛠️ Arquitectura Técnica

### Estructura de Clases

1.  **`ApiClient` (`assets/js/api.js`)**
    *   **Responsabilidad**: Encapsula la comunicación con la API externa.
    *   **Métodos principales**:
        *   `getWeather(lat, lon)`: Realiza la petición `fetch` asíncrona para obtener datos actuales y diarios.
        *   `getWeatherDescription(code)`: Traduce los códigos WMO numéricos a texto legible y emojis.

2.  **`WeatherApp` (`assets/js/app.js`)**
    *   **Responsabilidad**: Gestiona la lógica de negocio y la manipulación del DOM (Interfaz de Usuario).
    *   **Métodos principales**:
        *   `init()`: Detecta la página actual (Home o Detalle) y lanza el proceso correspondiente.
        *   `renderHome()`: Itera sobre la lista de planetas, solicita su clima y dibuja las tarjetas.
        *   `renderDetail()`: Carga el pronóstico extendido, calcula estadísticas y actualiza la vista de detalle.
        *   `calcularEstadisticas(daily)`: Procesa el array de datos diarios para extraer métricas.

3.  **Datos Estáticos (`assets/js/data.js`)**
    *   Contiene la configuración base de los planetas (`id`, `nombre`, `descripción`, `coordenadas`) que sirve como punto de entrada para las consultas a la API.

## 🌐 API Utilizada

**Open-Meteo Weather API**
*   **URL Base**: `https://api.open-meteo.com/v1/forecast`
*   **Características**: API gratuita, sin necesidad de API Key, alta precisión.
*   **Endpoints consumidos**:
    *   `current`: Para temperatura, código de clima, viento y humedad actuales.
    *   `daily`: Para pronóstico de 7 días (máximas, mínimas, clima).

## 📊 Cálculo de Estadísticas

La aplicación procesa la respuesta JSON de la API (`daily`) para generar:

1.  **Temperatura Mínima Semanal**: La temperatura más baja registrada en los 7 días (`Math.min`).
2.  **Temperatura Máxima Semanal**: La temperatura más alta registrada (`Math.max`).
3.  **Temperatura Promedio**: Suma de las temperaturas máximas dividida por 7.
4.  **Distribución de Clima**: Conteo de cuántos días lloverá, habrá sol, etc.
5.  **Alertas de Clima**:
    *   Si el promedio > 30°C -> "ALERTA DE OLA DE CALOR".
    *   Si hay 3 o más días de lluvia -> "SEMANA LLUVIOSA".

## 🚀 Instalación

1.  Clona el repositorio.
2.  Abre `index.html` en tu navegador.
    *   *Nota: No requiere servidor backend, pero se recomienda usar una extensión como "Live Server" para evitar bloqueos de CORS en algunos navegadores, aunque Open-Meteo soporta CORS.*

## 🔗 Enlaces

*   [Open-Meteo Docs](https://open-meteo.com/)
*   [Repositorio GitHub](https://github.com/betancour677/climagalaxia.git)
