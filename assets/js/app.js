/**
 * app.js
 * Clase principal de la aplicación Rebel Weather.
 */

class WeatherApp {
    constructor(apiClient, planetas) {
        this.apiClient = apiClient;
        this.planetas = planetas; // Datos base (nombres, descripciones, coords)

        // Elementos del DOM
        this.contenedorTarjetas = document.getElementById('contenedor-tarjetas'); // Home
        this.contenedorDetalle = document.getElementById('nombrePlaneta'); // Detalle
    }

    /**
     * Inicializa la aplicación detectando en qué página estamos.
     */
    init() {
        if (this.contenedorTarjetas) {
            this.renderHome();
        } else if (this.contenedorDetalle) {
            this.renderDetail();
        }
    }

    /**
     * Lógica de la página de INICIO
     */
    async renderHome() {
        this.contenedorTarjetas.innerHTML = '<div class="col-12 text-center"><p>Contactando con satélites...</p></div>';

        // Creamos un array de promesas para cargar datos en paralelo
        const promesas = this.planetas.map(async (planeta) => {
            const data = await this.apiClient.getWeather(planeta.lat, planeta.lon);

            // Si la API falla, usamos datos mock o mostramos error (aquí solo agregamos null)
            return { ...planeta, clima: data };
        });

        // Esperamos a que todas las peticiones terminen
        const planetasConClima = await Promise.all(promesas);

        this.contenedorTarjetas.innerHTML = ''; // Limpiar loading

        planetasConClima.forEach(planeta => {
            let tempStr = "--";
            let estadoStr = "Sin señal";
            let desc = "";

            if (planeta.clima) {
                const actual = planeta.clima.current;
                tempStr = Math.round(actual.temperature_2m);
                const infoClima = this.apiClient.getWeatherDescription(actual.weather_code);
                estadoStr = infoClima.texto;
            } else {
                // Fallback si falla API
                estadoStr = "Error Comms";
            }

            const cardHtml = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <article class="tarjeta-lugar tarjeta-lugar--hover">
                        <div class="tarjeta-lugar__imagen">
                            ${planeta.icono}
                        </div>
                        <div class="tarjeta-lugar__cuerpo">
                            <h5 class="tarjeta-lugar__titulo">${planeta.nombre}</h5>
                            <p class="tarjeta-lugar__estado">${estadoStr}</p>
                            <p class="tarjeta-lugar__descripcion">${planeta.descripcion}</p>
                            <div class="tarjeta-lugar__pie">
                                <span class="tarjeta-lugar__temperatura">${tempStr}°C</span>
                                <a href="detalle.html?id=${planeta.id}" class="tarjeta-lugar__boton">Ver</a>
                            </div>
                        </div>
                    </article>
                </div>
            `;
            this.contenedorTarjetas.innerHTML += cardHtml;
        });
    }

    /**
     * Lógica de la página de DETALLE
     */
    async renderDetail() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const planeta = this.planetas.find(p => p.id === id);

        if (!planeta) {
            window.location.href = 'index.html';
            return;
        }

        // Renderizar datos estáticos básicos primero
        document.getElementById('nombrePlaneta').textContent = planeta.nombre;
        document.getElementById('iconoPlaneta').innerHTML = planeta.icono;
        document.getElementById('humorPlaneta').textContent = planeta.humor_clima;
        document.getElementById('consejoSupervivencia').textContent = "Consultando base de datos de supervivencia...";

        // Obtener datos reales
        const data = await this.apiClient.getWeather(planeta.lat, planeta.lon);

        if (!data) {
            document.getElementById('estadoPlaneta').textContent = "Error de conexión";
            return;
        }

        const actual = data.current;
        const daily = data.daily;

        // Actualizar UI con datos actuales
        const infoClima = this.apiClient.getWeatherDescription(actual.weather_code);
        document.getElementById('temperaturaPlaneta').textContent = `${Math.round(actual.temperature_2m)}°C`;
        document.getElementById('estadoPlaneta').textContent = infoClima.texto;
        document.getElementById('humedadPlaneta').textContent = `${actual.relative_humidity_2m}%`;
        document.getElementById('vientoPlaneta').textContent = `${actual.wind_speed_10m} km/h`;

        // Consejo basado en datos reales (regla simple)
        this.actualizarConsejo(actual.temperature_2m, actual.weather_code, planeta.consejo_supervivencia);

        // Procesar y renderizar estadísticas
        const stats = this.calcularEstadisticas(daily);
        this.renderStats(stats);

        // Renderizar pronóstico semanal
        this.renderForecast(daily);
    }

    actualizarConsejo(temp, code, consejoBase) {
        let consejoExtra = "";
        if (temp > 35) consejoExtra = " ¡Cuidado! Calor extremo detectado. Hidrátate.";
        else if (temp < 0) consejoExtra = " ¡Alerta de congelación! Abrígate o usa un Tauntaun.";
        else if (code >= 51) consejoExtra = " Lleva un paraguas láser.";

        document.getElementById('consejoSupervivencia').textContent = `${consejoBase}${consejoExtra}`;
    }

    calcularEstadisticas(daily) {
        const temps = daily.temperature_2m_max; // Usamos máximas para el ejemplo
        const min = Math.min(...daily.temperature_2m_min);
        const max = Math.max(...daily.temperature_2m_max);
        const avg = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);

        // Contar climas (días de lluvia, sol, etc)
        const counts = {};
        daily.weather_code.forEach(code => {
            const desc = this.apiClient.getWeatherDescription(code).texto;
            counts[desc] = (counts[desc] || 0) + 1;
        });

        // Alerta simple
        let alerta = "";
        const diasLluvia = (counts['Lluvia'] || 0) + (counts['Tormenta'] || 0);
        if (avg > 30) alerta = "ALERTA DE OLA DE CALOR";
        else if (diasLluvia >= 3) alerta = "SEMANA LLUVIOSA DETECTADA";
        else alerta = "Condiciones estables en el sector.";

        return { min, max, avg, counts, alerta };
    }

    renderStats(stats) {
        document.getElementById('tempMinima').textContent = `${stats.min}°C`;
        document.getElementById('tempMaxima').textContent = `${stats.max}°C`;
        document.getElementById('tempPromedio').textContent = `${stats.avg}°C`;
        document.getElementById('resumenSemana').textContent = stats.alerta;

        const container = document.getElementById('conteoClimas');
        container.innerHTML = '';
        for (const [clima, count] of Object.entries(stats.counts)) {
            container.innerHTML += `
                <div class="col-6 col-md-4 mb-2">
                    <div class="p-2 bg-white rounded text-center">
                        <strong>${count}</strong> día${count > 1 ? 's' : ''}
                        <br><small class="text-secondary">${clima}</small>
                    </div>
                </div>
            `;
        }
    }

    renderForecast(daily) {
        const container = document.getElementById('pronostico');
        container.innerHTML = '';

        // Open-Meteo devuelve arrays de datos, no array de objetos por día.
        // daily.time, daily.weather_code, etc.
        for (let i = 0; i < daily.time.length; i++) {
            const date = new Date(daily.time[i]);
            const diaNombre = date.toLocaleDateString('es-ES', { weekday: 'short' });
            const info = this.apiClient.getWeatherDescription(daily.weather_code[i]);
            const max = Math.round(daily.temperature_2m_max[i]);
            const min = Math.round(daily.temperature_2m_min[i]);

            container.innerHTML += `
                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                    <div class="tarjeta-pronostico">
                        <p class="tarjeta-pronostico__dia">${diaNombre}</p>
                        <div class="tarjeta-pronostico__icono">${info.icono}</div>
                        <p class="tarjeta-pronostico__temperatura">${max}° <span class="text-muted small">/ ${min}°</span></p>
                        <small class="tarjeta-pronostico__estado">${info.texto}</small>
                    </div>
                </div>
            `;
        }
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const api = new ApiClient();
    const app = new WeatherApp(api, PLANETAS);
    app.init();
});
