<template>
  <div class="favoritos-view container">
    <header class="view-header">
      <h1 class="view-title">Mis Lugares Favoritos</h1>
      <p class="view-subtitle">Acceso rápido a tus sectores monitoreados</p>
    </header>

    <div v-if="loading && favoritos.length > 0" class="loading">
      <div class="loading__spinner"></div>
      <p class="loading__text">Escaneando sectores favoritos...</p>
    </div>

    <div v-else-if="favoritos.length > 0" class="planet-grid">
      <router-link 
        v-for="planeta in favoritos" 
        :key="planeta.id"
        :to="{ name: 'Detalle', params: { id: planeta.id }}"
        class="planet-card"
      >
        <div class="planet-card__image">
          <img :src="planeta.imagen" :alt="planeta.nombre">
        </div>
        <div class="planet-card__body">
          <div class="planet-card__weather">
            {{ planeta.region }} | {{ planeta.status || 'Holograma offline' }}
          </div>
          <h3 class="planet-card__name">{{ planeta.nombre }}</h3>
          <p class="planet-card__description">{{ planeta.descripcion }}</p>
          <div class="planet-card__footer">
            <span class="planet-card__temp" style="font-size: 1.5rem; font-weight: 800;">
              {{ formatearTemp(planeta.temp) }}
            </span>
            <button @click.prevent="toggleFav(planeta.id)" class="fav-btn active">
              ⭐ Quitar
            </button>
          </div>
        </div>
      </router-link>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">🛸</div>
      <h3>No tienes favoritos aún</h3>
      <p>Explora la galaxia y marca tus planetas preferidos.</p>
      <router-link to="/" class="auth-btn">Ir al Inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { PLANETAS } from '../data/planetas'
import { getWeather, getWeatherDescription } from '../services/weatherApi'

const props = defineProps({
  unidad: {
    type: String,
    required: true
  }
})

const store = useStore()
const weatherData = ref({})
const loading = ref(true)

const favoritos = computed(() => {
  const favIds = store.state.user?.favorites || []
  return PLANETAS.filter(p => favIds.includes(p.id)).map(p => ({
    ...p,
    temp: weatherData.value[p.id]?.temp,
    status: weatherData.value[p.id]?.status
  }))
})

const toggleFav = (id) => {
  store.commit('TOGGLE_FAVORITE', id)
}

const fetchWeather = async () => {
  loading.value = true
  const favIds = store.state.user?.favorites || []
  const promises = favIds.map(async (id) => {
    const p = PLANETAS.find(p => p.id === id)
    if (p) {
      const data = await getWeather(p.lat, p.lon)
      if (data && data.current) {
        weatherData.value[id] = {
          temp: data.current.temperature_2m,
          status: getWeatherDescription(data.current.weather_code).texto
        }
      }
    }
  })
  await Promise.all(promises)
  loading.value = false
}

const formatearTemp = (celsius) => {
  if (celsius === undefined || celsius === null) return '--'
  if (props.unidad === 'F') {
    return `${Math.round((celsius * 9) / 5 + 32)}°F`
  }
  return `${Math.round(celsius)}°C`
}

onMounted(fetchWeather)
</script>

<style scoped>
.favoritos-view {
  padding: var(--space-3xl) 0;
}

.view-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.view-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: var(--space-xs);
  background: linear-gradient(135deg, #fff 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.view-subtitle {
  color: var(--color-text-muted);
}

.empty-state {
  text-align: center;
  padding: var(--space-3xl);
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--color-border);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: var(--space-md);
}

.fav-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.fav-btn.active {
  border-color: var(--color-warm);
  color: var(--color-warm);
}

.fav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.auth-btn {
  display: inline-block;
  margin-top: var(--space-lg);
  padding: 10px 24px;
  text-decoration: none;
  background: var(--color-accent);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 700;
}
</style>
