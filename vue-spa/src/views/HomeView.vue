<script>
/**
 * HomeView.vue
 * Vista principal que muestra el héroe y la lista de planetas filtrable.
 * Ahora incluye la lógica para cargar el clima de todos los planetas.
 */
import { PLANETAS } from '../data/planetas'
import PlanetCard from '../components/PlanetCard.vue'
import { getWeather, getWeatherDescription } from '../services/weatherApi'

export default {
    name: 'HomeView',
    components: {
        PlanetCard
    },
    props: {
        unidad: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            /** Copia reactiva de los planetas para añadirles el clima */
            planetas: PLANETAS.map(p => ({ 
                ...p, 
                temperatura: null, 
                estadoClima: null 
            })),
            busqueda: '',
            cargando: true
        }
    },
    computed: {
        /**
         * Filtra los planetas por nombre o región.
         */
        planetasFiltrados() {
            return this.planetas.filter(p => 
                p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                p.region.toLowerCase().includes(this.busqueda.toLowerCase())
            )
        }
    },
    async created() {
        await this.cargarClimas()
    },
    methods: {
        /**
         * Carga el clima actual para cada uno de los planetas.
         */
        async cargarClimas() {
            this.cargando = true
            
            // Creamos un array de promesas para cargar todo en paralelo
            const promesas = this.planetas.map(async (planeta) => {
                const data = await getWeather(planeta.lat, planeta.lon)
                if (data && data.current) {
                    planeta.temperatura = data.current.temperature_2m
                    planeta.estadoClima = getWeatherDescription(data.current.weather_code).texto
                }
            })

            await Promise.all(promesas)
            this.cargando = false
        }
    }
}
</script>

<template>
    <div class="home-view">
        <!-- Hero Section -->
        <section class="hero">
            <h1 class="hero__title">Pronóstico Galáctico</h1>
            <p class="hero__subtitle">Monitor de sistemas en tiempo real</p>
        </section>

        <!-- Barra de Búsqueda -->
        <div class="search-bar">
            <span class="search-bar__icon">🔍</span>
            <input 
                type="text" 
                class="search-bar__input" 
                placeholder="Buscar planeta o región..." 
                v-model="busqueda"
                id="search-input"
            >
        </div>

        <!-- Estado de Carga -->
        <div v-if="cargando && planetas.every(p => p.temperatura === null)" class="loading">
            <div class="loading__spinner"></div>
            <p class="loading__text">Escaneando sectores galácticos...</p>
        </div>

        <!-- Grid de Planetas -->
        <div v-else-if="planetasFiltrados.length > 0" class="planet-grid">
            <PlanetCard 
                v-for="planeta in planetasFiltrados" 
                :key="planeta.id" 
                :planeta="planeta" 
                :unidad="unidad" 
            />
        </div>

        <!-- Estado Vacío -->
        <div v-else class="no-results">
            <div class="no-results__icon">🛸</div>
            <p class="no-results__text">No hay transmisiones de esa zona de la galaxia.</p>
        </div>
    </div>
</template>

<style scoped>
/* Refuerzo de espaciado para evitar que se vea "pegado" */
.home-view {
    padding-bottom: var(--space-3xl);
}

.planet-grid {
    margin-top: var(--space-xl);
    padding: var(--space-md) 0;
}
</style>
