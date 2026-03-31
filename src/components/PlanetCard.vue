<script>
/**
 * PlanetCard.vue
 * Tarjeta individual de un planeta en la vista Home.
 * Muestra nombre, estado del clima, descripción y temperatura.
 * Usa <router-link> para navegar al detalle sin recargar.
 */
import { celsiusToFahrenheit } from '../services/weatherApi.js'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PlanetCard',
  props: {
    /** Objeto del planeta con datos de clima cargados */
    planeta: {
      type: Object,
      required: true
    },
    /** Unidad de temperatura actual: 'C' o 'F' */
    unidad: {
      type: String,
      default: 'C'
    }
  },
  computed: {
    ...mapState(['isAuthenticated']),
    ...mapGetters(['isFavorite']),
    /**
     * Retorna la temperatura formateada según la unidad seleccionada.
     */
    temperaturaFormateada() {
      if (this.planeta.temperatura === null || this.planeta.temperatura === undefined) return '--'
      const tempNum = parseFloat(this.planeta.temperatura)
      if (isNaN(tempNum)) return '--'
      
      const temp = this.unidad === 'F'
        ? celsiusToFahrenheit(tempNum)
        : Math.round(tempNum)
      return `${temp}°${this.unidad}`
    },
    esFavorito() {
      return this.isFavorite(this.planeta.id)
    }
  },
  methods: {
    toggleFavorito() {
      this.$store.commit('TOGGLE_FAVORITE', this.planeta.id)
    }
  }
}
</script>

<template>
  <div class="planet-card-container">
    <!-- Botón de favorito absoluto (solo si está logueado) -->
    <button 
      v-if="isAuthenticated" 
      class="favorite-toggle" 
      :class="{ 'favorite-toggle--active': esFavorito }"
      @click.stop="toggleFavorito"
      :title="esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'"
    >
      {{ esFavorito ? '⭐' : '☆' }}
    </button>

    <router-link
      :to="{ name: 'Detalle', params: { id: planeta.id } }"
      class="planet-card"
      :id="`card-${planeta.id}`"
    >
      <div class="planet-card__image">
        <img :src="planeta.imagen" :alt="planeta.nombre" />
      </div>

      <div class="planet-card__body">
        <h3 class="planet-card__name">{{ planeta.nombre }}</h3>

        <p v-if="planeta.estadoClima" class="planet-card__weather">
          {{ planeta.estadoClima }}
        </p>
        <p v-else class="planet-card__weather">Sin señal</p>

        <p class="planet-card__description">{{ planeta.descripcion }}</p>

        <div class="planet-card__footer">
          <span class="planet-card__temp">{{ temperaturaFormateada }}</span>
          <span class="planet-card__btn">Explorar →</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.planet-card-container {
  position: relative;
}

.favorite-toggle {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;
}

.favorite-toggle:hover {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.6);
}

.favorite-toggle--active {
  background: var(--color-accent-glow);
  border-color: var(--color-warm);
  color: var(--color-warm);
}
</style>
