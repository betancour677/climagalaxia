import { createStore } from 'vuex'
import { PLANETAS } from '../data/planetas'
import { getWeather, calcularEstadisticas } from '../services/weatherApi'

/**
 * Módulo Central de Estado Galáctico (Vuex)
 * Maneja autenticación, preferencias y datos climáticos de la galaxia.
 */
const store = createStore({
  state: {
    // --- USUARIO Y SESIÓN ---
    user: null, 
    isAuthenticated: false,
    defaultPreferences: {
      unit: 'C', 
      theme: 'dark'
    },

    // --- DATOS CLIMÁTICOS (Módulo 8) ---
    planetas: PLANETAS.map(p => ({ 
      ...p, 
      temperatura: null, 
      estadoClima: null 
    })),
    selectedPlanetWeather: {
      current: null,
      daily: null,
      stats: null,
      info: null // Datos del planeta (nombre, img, etc)
    },
    loading: false,
    error: null
  },

  mutations: {
    // Mutaciones de Usuario
    SET_USER(state, user) {
      state.user = user
      state.isAuthenticated = !!user
    },
    CLEAR_USER(state) {
      state.user = null
      state.isAuthenticated = false
    },
    TOGGLE_FAVORITE(state, planetId) {
      if (state.user) {
        const index = state.user.favorites.indexOf(planetId)
        if (index === -1) {
          state.user.favorites.push(planetId)
        } else {
          state.user.favorites.splice(index, 1)
        }
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    },

    // Mutaciones de Clima
    SET_PLANETS_WEATHER(state, planetasConClima) {
      state.planetas = planetasConClima
    },
    SET_SELECTED_PLANET_WEATHER(state, payload) {
      state.selectedPlanetWeather = payload
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, message) {
      state.error = message
    },
    // Mutación para actualizar preferencias (Unidad, Tema)
    UPDATE_PREFERENCES(state, preferences) {
      if (state.user) {
        state.user.preferences = { ...state.user.preferences, ...preferences }
        localStorage.setItem('user', JSON.stringify(state.user))
      } else {
        state.defaultPreferences = { ...state.defaultPreferences, ...preferences }
      }
    },
    // Mutación para alternar el tema (Claro/Oscuro)
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
    // --- ACCIONES DE CLIMA (MÓDULO 8) ---
    
    /**
     * Carga el clima de todos los planetas para la Home.
     */
    async loadAllPlanetsWeather({ commit, state }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      
      try {
        const nuevosPlanetas = await Promise.all(state.planetas.map(async (planeta) => {
          const data = await getWeather(planeta.lat, planeta.lon)
          if (data && data.current) {
            return {
              ...planeta,
              temperatura: data.current.temperature_2m,
              estadoClima: data.current.weather_code
            }
          }
          return planeta
        }))
        commit('SET_PLANETS_WEATHER', nuevosPlanetas)
      } catch (e) {
        commit('SET_ERROR', 'Falla en la red de sensores galácticos.')
      } finally {
        commit('SET_LOADING', false)
      }
    },

    /**
     * Carga el detalle profundo de un planeta específico.
     */
    async loadPlanetDetail({ commit }, planetId) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      
      const planeta = PLANETAS.find(p => p.id === planetId)
      if (!planeta) {
        commit('SET_ERROR', 'Planeta no encontrado en la base de datos.')
        commit('SET_LOADING', false)
        return
      }

      try {
        const data = await getWeather(planeta.lat, planeta.lon)
        if (data) {
          commit('SET_SELECTED_PLANET_WEATHER', {
            current: data.current,
            daily: data.daily,
            stats: calcularEstadisticas(data.daily),
            info: planeta
          })
        } else {
          commit('SET_ERROR', 'Sin respuesta de los satélites locales.')
        }
      } catch (e) {
        commit('SET_ERROR', 'Error crítico en la conexión con el sector.')
      } finally {
        commit('SET_LOADING', false)
      }
    },

    // --- ACCIONES DE USUARIO ---
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const mockUsers = [
            { id: 1, name: 'Luke Skywalker', email: 'luke@rebellion.com', password: 'force', preferences: { unit: 'C', theme: 'dark' }, favorites: ['coruscant', 'naboo'] },
            { id: 2, name: 'Han Solo', email: 'han@falcon.com', password: 'kesselrun', preferences: { unit: 'F', theme: 'dark' }, favorites: ['tatooine'] }
          ]
          const user = mockUsers.find(u => u.email === email && u.password === password)
          if (user) {
            const { password, ...userData } = user
            commit('SET_USER', userData)
            localStorage.setItem('user', JSON.stringify(userData))
            resolve(userData)
          } else {
            reject(new Error('Credenciales inválidas.'))
          }
        }, 800)
      })
    },
    logout({ commit }) {
      commit('CLEAR_USER')
      localStorage.removeItem('user')
    },
    restoreSession({ commit }) {
      const savedUser = localStorage.getItem('user')
      if (savedUser) commit('SET_USER', JSON.parse(savedUser))
    }
  },

  getters: {
    userPreferences: (state) => state.user ? state.user.preferences : state.defaultPreferences,
    isFavorite: (state) => (planetId) => state.user ? state.user.favorites.includes(planetId) : false,
    allPlanetas: (state) => state.planetas,
    currentWeather: (state) => state.selectedPlanetWeather
  }
})

export default store
