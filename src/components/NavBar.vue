<script>
import { mapState, mapActions } from 'vuex'

/**
 * NavBar.vue
 * Barra de navegación principal de la aplicación.
 * Incluye el toggle de unidades, acceso a favoritos y gestión de sesión.
 */
export default {
  name: 'NavBar',
  computed: {
    ...mapState(['isAuthenticated', 'user']),
    // Obtenemos la unidad directamente del estado de preferencias del usuario o default
    unidad() {
      return this.$store.getters.userPreferences.unit
    },
    // Obtenemos el tema directamente del estado de preferencias
    tema() {
      return this.$store.getters.userPreferences.theme
    }
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout()
      this.$router.push('/login')
    },
    cambiarUnidad(nuevaUnidad) {
      this.$store.commit('UPDATE_PREFERENCES', { unit: nuevaUnidad })
    },
    cambiarTema() {
      this.$store.commit('TOGGLE_THEME')
    }
  }
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
        
        <!-- Link a favoritos (solo si está logueado) -->
        <li v-if="isAuthenticated">
          <router-link to="/favoritos" class="navbar__link" id="nav-favs">
            Favoritos
          </router-link>
        </li>
        <li>
          <div class="nav-controls">
            <!-- Toggle de unidades -->
            <div class="unit-toggle" id="unit-toggle">
              <button
                class="unit-toggle__option"
                :class="{ 'unit-toggle__option--active': unidad === 'C' }"
                @click="cambiarUnidad('C')"
                id="btn-celsius"
              >
                °C
              </button>
              <button
                class="unit-toggle__option"
                :class="{ 'unit-toggle__option--active': unidad === 'F' }"
                @click="cambiarUnidad('F')"
                id="btn-fahrenheit"
              >
                °F
              </button>
            </div>

            <!-- Toggle de Tema -->
            <button 
              class="theme-toggle" 
              @click="cambiarTema" 
              id="theme-toggle-btn"
              :title="tema === 'dark' ? 'Modo Claro' : 'Modo Oscuro'"
            >
              {{ tema === 'dark' ? '☀️' : '🌙' }}
            </button>
          </div>
        </li>

        <!-- Área de Usuario / Auth -->
        <li class="navbar__auth">
          <template v-if="isAuthenticated">
            <span class="user-greeting">Hola, <strong>{{ user.name }}</strong></span>
            <button @click="handleLogout" class="navbar__btn-logout" id="btn-logout">
              Salir
            </button>
          </template>
          <template v-else>
            <router-link to="/login" class="navbar__link" id="nav-login">Login</router-link>
            <router-link to="/registro" class="navbar__link navbar__link--highlight" id="nav-reg">Registro</router-link>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar__auth {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-left: var(--space-md);
  padding-left: var(--space-lg);
  border-left: 1px solid var(--color-border);
}

.user-greeting {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.user-greeting strong {
  color: var(--color-text);
}

.navbar__btn-logout {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.navbar__btn-logout:hover {
  border-color: var(--color-hot);
  color: var(--color-hot);
}

.navbar__link--highlight {
  background: var(--color-accent);
  color: white !important;
  padding: 4px 12px;
  border-radius: var(--radius-md);
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.theme-toggle {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 1.1rem;
}

.theme-toggle:hover {
  transform: scale(1.1);
  border-color: var(--color-accent);
}

@media (max-width: 768px) {
  .navbar__auth {
    border-left: none;
    margin-left: 0;
    padding-left: 0;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
