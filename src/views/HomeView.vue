<script>
/**
 * HomeView.vue
 * Utiliza Vuex para gestionar la lista de planetas y su clima actual.
 * Módulo 8: Centralización de estado y carga asíncrona.
 */
import { mapState, mapActions } from 'vuex'
import PlanetCard from '../components/PlanetCard.vue'

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
            busqueda: ''
        }
    },
    computed: {
        ...mapState(['planetas', 'loading', 'error']),
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
        // Solo cargamos si no se han cargado climas previamente (optimización)
        if (this.planetas.every(p => p.temperatura === null)) {
            await this.loadAllPlanetsWeather()
        }
    },
    methods: {
        ...mapActions(['loadAllPlanetsWeather'])
    }
}
</script>

<template>
    <div class="home-view">
        <!-- Hero Section -->
        <section class="hero">
            <h1 class="hero__title">Monitor Galáctico</h1>
            <p class="hero__subtitle">Consulta el clima en los sectores clave de la Alianza</p>
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

        <!-- Manejo de Error -->
        <div v-if="error" class="no-results">
            <div class="no-results__icon">⚠️</div>
            <p class="no-results__text">{{ error }}</p>
            <button @click="loadAllPlanetsWeather" class="btn btn--secondary mt-3">Reintentar Conexión</button>
        </div>

        <!-- Estado de Carga -->
        <div v-else-if="loading && planetas.every(p => p.temperatura === null)" class="loading">
            <div class="loading__spinner"></div>
            <p class="loading__text">Conectando con la red Holonet...</p>
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
            <p class="no-results__text">Ese sector no aparece en el mapa galáctico.</p>
        </div>
    </div>
</template>

<style scoped>
.home-view {
    padding-bottom: var(--space-3xl);
}

.planet-grid {
    margin-top: var(--space-xl);
    padding: var(--space-md) 0;
}

.mt-3 { margin-top: var(--space-md); }
</style>
