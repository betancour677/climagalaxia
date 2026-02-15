/**
 * api.js
 * Clase para manejar la comunicación con la API de Open-Meteo.
 */

class ApiClient {
    constructor() {
        this.baseUrl = 'https://api.open-meteo.com/v1/forecast';
    }

    /**
     * Obtiene el clima actual y pronóstico diario para una ubicación.
     * @param {number} lat - Latitud
     * @param {number} lon - Longitud
     * @returns {Promise<Object>} Datos del clima o null si hay error.
     */
    async getWeather(lat, lon) {
        try {
            // Solicitamos temperatura actual, código de clima, viento, humedad
            // Y pronóstico diario de máximas, mínimas y código de clima
            const url = `${this.baseUrl}?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener datos del clima:", error);
            // Si falla, retornamos null para manejarlo en la UI
            return null;
        }
    }

    /**
     * Convierte el código WMO de Open-Meteo a texto y emoji.
     * @param {number} code - Código WMO
     * @returns {Object} { texto: "Soleado", icono: "☀️" }
     */
    getWeatherDescription(code) {
        // Mapa simple de códigos WMO
        // Ver: https://open-meteo.com/en/docs
        if (code === 0) return { texto: "Despejado", icono: "☀️" };
        if (code >= 1 && code <= 3) return { texto: "Nublado", icono: "☁️" };
        if (code >= 45 && code <= 48) return { texto: "Niebla", icono: "🌫️" };
        if (code >= 51 && code <= 57) return { texto: "Llovizna", icono: "🌧️" };
        if (code >= 61 && code <= 67) return { texto: "Lluvia", icono: "☔" };
        if (code >= 71 && code <= 77) return { texto: "Nieve", icono: "❄️" };
        if (code >= 80 && code <= 82) return { texto: "Chubascos", icono: "🌦️" };
        if (code >= 95 && code <= 99) return { texto: "Tormenta", icono: "⛈️" };

        return { texto: "Desconocido", icono: "❓" };
    }
}
