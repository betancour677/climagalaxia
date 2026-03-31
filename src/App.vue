<script>
/**
 * App.vue
 * Componente raíz de la aplicación.
 */
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  computed: {
    unidad() {
      return this.$store.getters.userPreferences.unit
    },
    tema() {
      return this.$store.getters.userPreferences.theme
    }
  }
}
</script>

<template>
  <div :class="{ 'light-theme': tema === 'light' }" class="app-wrapper">
    <NavBar />

    <main class="container" style="flex: 1;">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :unidad="unidad" />
        </transition>
      </router-view>
    </main>

    <FooterBar />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: var(--transition-theme);
}
</style>
