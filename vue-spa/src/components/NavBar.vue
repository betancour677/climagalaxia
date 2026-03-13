<script>
/**
 * NavBar.vue
 * Barra de navegación principal de la aplicación.
 * Incluye el toggle de unidades (°C / °F) con v-model.
 * Usa <router-link> para navegación SPA sin recarga.
 */
export default {
  name: 'NavBar',
  props: {
    /** Unidad actual de temperatura: 'C' o 'F' */
    unidad: {
      type: String,
      required: true
    }
  },
  emits: ['cambiar-unidad']
}
</script>

<template>
  <header class="container">
    <nav class="navbar" role="navigation" aria-label="Navegación principal">
      <!-- Logo / Marca -->
      <router-link to="/" class="navbar__brand" id="nav-brand">
        ⚔️ REBEL WEATHER
      </router-link>

      <!-- Links de navegación + Toggle de unidad -->
      <ul class="navbar__links">
        <li>
          <router-link to="/" class="navbar__link" id="nav-home">
            Inicio
          </router-link>
        </li>
        <li>
          <router-link to="/acerca" class="navbar__link" id="nav-about">
            Acerca
          </router-link>
        </li>
        <li>
          <!-- Toggle de unidades: usa @click para emitir el cambio -->
          <div class="unit-toggle" id="unit-toggle">
            <button
              class="unit-toggle__option"
              :class="{ 'unit-toggle__option--active': unidad === 'C' }"
              @click="$emit('cambiar-unidad', 'C')"
              id="btn-celsius"
            >
              °C
            </button>
            <button
              class="unit-toggle__option"
              :class="{ 'unit-toggle__option--active': unidad === 'F' }"
              @click="$emit('cambiar-unidad', 'F')"
              id="btn-fahrenheit"
            >
              °F
            </button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
