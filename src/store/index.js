import { createStore } from 'vuex'

/**
 * Módulo de autenticación y usuario para la App de Clima.
 * Maneja el estado global de la sesión y las preferencias.
 */
const store = createStore({
  state: {
    user: null, // Datos del usuario logueado (nombre, email, preferencias, favoritos)
    isAuthenticated: false,
    // Preferencias por defecto si no hay usuario
    defaultPreferences: {
      unit: 'C', // 'C' para Celsius, 'F' para Fahrenheit
      theme: 'dark'
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    },
    CLEAR_USER(state) {
      state.user = null
      state.isAuthenticated = false
    },
    UPDATE_PREFERENCES(state, preferences) {
      if (state.user) {
        state.user.preferences = { ...state.user.preferences, ...preferences }
      }
    },
    TOGGLE_FAVORITE(state, planetId) {
      if (state.user) {
        const index = state.user.favorites.indexOf(planetId)
        if (index === -1) {
          state.user.favorites.push(planetId)
        } else {
          state.user.favorites.splice(index, 1)
        }
        // Persistir cambios en localStorage
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    },
    TOGGLE_THEME(state) {
      if (state.user) {
        state.user.preferences.theme = state.user.preferences.theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('user', JSON.stringify(state.user))
      } else {
        state.defaultPreferences.theme = state.defaultPreferences.theme === 'dark' ? 'light' : 'dark'
      }
    }
  },
  actions: {
    /**
     * Simula un proceso de login con credenciales mock.
     */
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        // Simulación de delay de red
        setTimeout(() => {
          // Usuarios mock para pruebas
          const mockUsers = [
            {
              id: 1,
              name: 'Luke Skywalker',
              email: 'luke@rebellion.com',
              password: 'force',
              preferences: { unit: 'C', theme: 'dark' },
              favorites: ['coruscant', 'naboo']
            },
            {
              id: 2,
              name: 'Han Solo',
              email: 'han@falcon.com',
              password: 'kesselrun',
              preferences: { unit: 'F', theme: 'dark' },
              favorites: ['tatooine']
            }
          ]

          const user = mockUsers.find(u => u.email === email && u.password === password)

          if (user) {
            // No guardamos la contraseña en el estado
            const { password, ...userData } = user
            commit('SET_USER', userData)
            // Persistencia básica en localStorage para no perder sesión al recargar
            localStorage.setItem('user', JSON.stringify(userData))
            resolve(userData)
          } else {
            reject(new Error('Usuario o contraseña incorrectos.'))
          }
        }, 800)
      })
    },
    /**
     * Cierra la sesión del usuario.
     */
    logout({ commit }) {
      commit('CLEAR_USER')
      localStorage.removeItem('user')
    },
    /**
     * Intenta restaurar la sesión desde localStorage al iniciar la app.
     */
    restoreSession({ commit }) {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        commit('SET_USER', JSON.parse(savedUser))
      }
    }
  },
  getters: {
    userPreferences: (state) => {
      return state.user ? state.user.preferences : state.defaultPreferences
    },
    isFavorite: (state) => (planetId) => {
      return state.user ? state.user.favorites.includes(planetId) : false
    }
  }
})

export default store
