<script>
/**
 * PlanetCard.vue
 * Tarjeta individual de un planeta en la vista Home.
 * Muestra nombre, estado del clima, descripción y temperatura.
 * Usa <router-link> para navegar al detalle sin recargar.
 */
import { celsiusToFahrenheit } from '../services/weatherApi.js'

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
    /**
     * Retorna la temperatura formateada según la unidad seleccionada.
     * Demuestra el uso de computed properties para datos derivados.
     */
    temperaturaFormateada() {
      if (this.planeta.temperatura === null || this.planeta.temperatura === undefined) return '--'
      const tempNum = parseFloat(this.planeta.temperatura)
      if (isNaN(tempNum)) return '--'
      
      const temp = this.unidad === 'F'
        ? celsiusToFahrenheit(tempNum)
        : Math.round(tempNum)
      return `${temp}°${this.unidad}`
    }
  }
}
</script>

<template>
  <!-- Toda la tarjeta es un enlace al detalle del planeta -->
  <router-link
    :to="{ name: 'Detalle', params: { id: planeta.id } }"
    class="planet-card"
    :id="`card-${planeta.id}`"
  >
    <!-- Imagen del planeta -->
    <div class="planet-card__image">
      <img :src="planeta.imagen" :alt="planeta.nombre" />
    </div>

    <!-- Información del planeta -->
    <div class="planet-card__body">
      <h3 class="planet-card__name">{{ planeta.nombre }}</h3>

      <!-- v-if: muestra el estado del clima SOLO si hay datos -->
      <p v-if="planeta.estadoClima" class="planet-card__weather">
        {{ planeta.estadoClima }}
      </p>
      <!-- v-else: muestra mensaje alternativo si no hay clima -->
      <p v-else class="planet-card__weather">Sin señal</p>

      <p class="planet-card__description">{{ planeta.descripcion }}</p>

      <div class="planet-card__footer">
        <span class="planet-card__temp">{{ temperaturaFormateada }}</span>
        <span class="planet-card__btn">Explorar →</span>
      </div>
    </div>
  </router-link>
</template>
