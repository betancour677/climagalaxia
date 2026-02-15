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
