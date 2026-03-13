<script>
/**
 * App.vue
 * Componente raíz de la aplicación.
 * Contiene el layout principal: Navbar, Router View y Footer.
 */
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
      /** Unidad de temperatura seleccionada: 'C' o 'F' */
      unidad: 'C'
    }
  },
  methods: {
    /**
     * Cambia la unidad de temperatura.
     * Se propaga a las vistas hijas mediante props.
     * @param {string} nuevaUnidad - 'C' o 'F'
     */
    cambiarUnidad(nuevaUnidad) {
      this.unidad = nuevaUnidad
    }
  }
}
</script>

<template>
  <NavBar :unidad="unidad" @cambiar-unidad="cambiarUnidad" />

  <main class="container" style="flex: 1;">
    <!-- 
      router-view renderiza el componente de la ruta actual.
      Pasamos la unidad como prop a cada vista.
      La transición "fade" da un efecto suave al cambiar de ruta.
    -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :unidad="unidad" />
      </transition>
    </router-view>
  </main>

  <FooterBar />
</template>
