/**
 * weatherApi.js
 *
 * Servicio para consumir la API de Open-Meteo.
 * Encapsula la lógica de fetch y la traducción de códigos WMO.
 */

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

/**
 * Obtiene el clima actual y pronóstico diario para una ubicación.
 * @param {number} lat - Latitud
 * @param {number} lon - Longitud
 * @returns {Promise<Object|null>} Datos del clima o null si hay error.
 */
export async function getWeather(lat, lon) {
    try {
        const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Error al obtener datos del clima:', error)
        return null
    }
}

/**
 * Convierte el código WMO de Open-Meteo a texto descriptivo y emoji.
 * @param {number} code - Código WMO
 * @returns {{ texto: string, icono: string }}
 */
export function getWeatherDescription(code) {
    if (code === 0) return { texto: 'Despejado', icono: '☀️' }
    if (code >= 1 && code <= 3) return { texto: 'Nublado', icono: '☁️' }
    if (code >= 45 && code <= 48) return { texto: 'Niebla', icono: '🌫️' }
    if (code >= 51 && code <= 57) return { texto: 'Llovizna', icono: '🌧️' }
    if (code >= 61 && code <= 67) return { texto: 'Lluvia', icono: '☔' }
    if (code >= 71 && code <= 77) return { texto: 'Nieve', icono: '❄️' }
    if (code >= 80 && code <= 82) return { texto: 'Chubascos', icono: '🌦️' }
    if (code >= 95 && code <= 99) return { texto: 'Tormenta', icono: '⛈️' }

    return { texto: 'Desconocido', icono: '❓' }
}

/**
 * Calcula estadísticas semanales a partir de los datos diarios.
 * @param {Object} daily - Objeto daily de la respuesta de Open-Meteo
 * @returns {Object} Estadísticas calculadas
 */
export function calcularEstadisticas(daily) {
    const tempsMax = daily.temperature_2m_max
    const tempsMin = daily.temperature_2m_min

    const min = Math.min(...tempsMin)
    const max = Math.max(...tempsMax)
    const avg = Math.round(tempsMax.reduce((a, b) => a + b, 0) / tempsMax.length)

    // Conteo de tipos de clima por día
    const counts = {}
    daily.weather_code.forEach((code) => {
        const desc = getWeatherDescription(code).texto
        counts[desc] = (counts[desc] || 0) + 1
    })

    // Determinar alerta
    let alerta = ''
    const diasLluvia = (counts['Lluvia'] || 0) + (counts['Tormenta'] || 0)
    if (avg > 30) {
        alerta = 'ALERTA DE OLA DE CALOR'
    } else if (diasLluvia >= 3) {
        alerta = 'SEMANA LLUVIOSA DETECTADA'
    } else {
        alerta = 'Condiciones estables en el sector.'
    }

    return { min, max, avg, counts, alerta }
}

/**
 * Convierte temperatura de Celsius a Fahrenheit.
 * @param {number} celsius - Temperatura en °C
 * @returns {number} Temperatura en °F
 */
export function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32)
}
