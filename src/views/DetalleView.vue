<script>
/**
 * DetalleView.vue
 * Módulo 8: Vista detallada conectada al store global (Vuex).
 * Estadísticas, pronóstico y alertas gestionadas de forma centralizada.
 */
import { getWeatherDescription, celsiusToFahrenheit } from '../services/weatherApi'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'DetalleView',
    props: {
        unidad: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['isAuthenticated', 'loading', 'error', 'selectedPlanetWeather']),
        ...mapGetters(['isFavorite']),
        
        planeta() { return this.selectedPlanetWeather.info },
        climaActual() { return this.selectedPlanetWeather.current },
        pronostico() { return this.selectedPlanetWeather.daily },
        stats() { return this.selectedPlanetWeather.stats },
        
        esFavorito() {
            return this.planeta ? this.isFavorite(this.planeta.id) : false
        }
    },
    async created() {
        const id = this.$route.params.id
        await this.loadPlanetDetail(id)
    },
    methods: {
        ...mapActions(['loadPlanetDetail']),
        formatearTemp(celsius) {
            if (this.unidad === 'F') {
                return `${celsiusToFahrenheit(celsius)}°`
            }
            return `${Math.round(celsius)}°`
        },
        getClimaInfo(code) {
            return getWeatherDescription(code)
        },
        toggleFavorito() {
            this.$store.commit('TOGGLE_FAVORITE', this.planeta.id)
        }
    }
}
</script>

<template>
    <div class="detail-page">
        <!-- Botón Volver -->
        <router-link to="/" class="detail-page__back">
            <span>←</span> Volver al Mapa Galáctico
        </router-link>

        <!-- Estado de Carga -->
        <div v-if="loading" class="loading">
            <div class="loading__spinner"></div>
            <p class="loading__text">Capturando transmisión desde el sector...</p>
        </div>

        <!-- Estado de Error -->
        <div v-else-if="error" class="no-results">
            <div class="no-results__icon">⚠️</div>
            <p class="no-results__text">{{ error }}</p>
            <router-link to="/" class="btn btn--secondary mt-3">Seguir explorando</router-link>
        </div>

        <!-- Contenido Principal -->
        <div v-else-if="planeta && climaActual">
            <!-- Encabezado -->
            <header class="detail-header">
                <div class="detail-header__image">
                    <img :src="planeta.imagen" :alt="planeta.nombre">
                </div>
                <div class="detail-header__info">
                    <h1 class="detail-header__name">
                        {{ planeta.nombre }}
                        <button 
                            v-if="isAuthenticated" 
                            @click="toggleFavorito" 
                            class="fav-badge"
                            :class="{ 'fav-badge--active': esFavorito }"
                            aria-label="Fav"
                        >
                            {{ esFavorito ? '⭐' : '☆' }}
                        </button>
                    </h1>
                    <p class="detail-header__region">{{ planeta.region }}</p>
                </div>
            </header>

            <!-- Tarjeta Clima Actual -->
            <article class="weather-main">
                <div class="weather-main__temp">
                    {{ formatearTemp(climaActual.temperature_2m) }}
                </div>
                <div class="weather-main__status">
                    {{ getClimaInfo(climaActual.weather_code).icono }} 
                    {{ getClimaInfo(climaActual.weather_code).texto }}
                </div>
                
                <p class="weather-main__humor">
                    "{{ planeta.humor_clima }}"
                </p>

                <div class="weather-main__stats">
                    <div class="weather-stat">
                        <small class="weather-stat__label">Humedad</small>
                        <span class="weather-stat__value">{{ climaActual.relative_humidity_2m }}%</span>
                    </div>
                    <div class="weather-stat">
                        <small class="weather-stat__label">Viento</small>
                        <span class="weather-stat__value">{{ climaActual.wind_speed_10m }} km/h</span>
                    </div>
                </div>
            </article>

            <!-- Guía de Supervivencia Rebelde -->
            <section class="survival-card">
                <div class="survival-card__icon">🎒</div>
                <div>
                    <h4 class="survival-card__title">Guía de Supervivencia Galáctica</h4>
                    <p class="survival-card__text">{{ planeta.consejo_supervivencia }}</p>
                </div>
            </section>

            <!-- Estadísticas y Alerta Semanal (MVP) -->
            <section class="mb-5">
                <h3 class="section-title">📊 Informe Semanal del Sector</h3>
                
                <div class="stats-grid">
                    <div class="stat-box">
                        <small class="stat-box__label">T. Mínima</small>
                        <span class="stat-box__value stat-box__value--min">{{ formatearTemp(stats.min) }}</span>
                    </div>
                    <div class="stat-box">
                        <small class="stat-box__label">T. Promedio</small>
                        <span class="stat-box__value stat-box__value--avg">{{ formatearTemp(stats.avg) }}</span>
                    </div>
                    <div class="stat-box">
                        <small class="stat-box__label">T. Máxima</small>
                        <span class="stat-box__value stat-box__value--max">{{ formatearTemp(stats.max) }}</span>
                    </div>
                </div>

                <!-- Resumen de Condiciones (Conteo por tipos) -->
                <div class="clima-distribution">
                    <div v-for="(count, type) in stats.counts" :key="type" class="clima-chip">
                        <span class="clima-chip__count">{{ count }}</span>
                        <span class="clima-chip__name">{{ type }}</span>
                    </div>
                </div>

                <!-- Alerta Meteorológica Real -->
                <div class="weekly-alert">
                    <p class="weekly-alert__title">Aviso de la Alianza</p>
                    <p class="weekly-alert__message">{{ stats.alerta }}</p>
                </div>
            </section>

            <!-- Pronóstico Galáctico de 7 días -->
            <section>
                <h3 class="section-title">Próximos 7 días</h3>
                <div class="forecast-grid">
                    <div v-for="(day, index) in pronostico.time" :key="day" class="forecast-card">
                        <div class="forecast-card__day">
                            {{ new Date(`${day}T00:00:00`).toLocaleDateString('es-ES', { weekday: 'short' }) }}
                        </div>
                        <div class="forecast-card__icon">
                            {{ getClimaInfo(pronostico.weather_code[index]).icono }}
                        </div>
                        <div class="forecast-card__temp">
                            {{ formatearTemp(pronostico.temperature_2m_max[index]) }}
                        </div>
                        <div class="forecast-card__temp-min">
                            {{ formatearTemp(pronostico.temperature_2m_min[index]) }}
                        </div>
                        <div class="forecast-card__status">
                             {{ getClimaInfo(pronostico.weather_code[index]).texto }}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.detail-header__info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fav-badge {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
    font-size: 1.5rem;
    padding: 0 10px;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    vertical-align: middle;
    margin-left: 10px;
}

.fav-badge:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
}

.fav-badge--active {
    color: #ffcc00;
    border-color: #ffcc00;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.mt-3 { margin-top: var(--space-md); }
.mb-5 { margin-bottom: var(--space-3xl); }
</style>
