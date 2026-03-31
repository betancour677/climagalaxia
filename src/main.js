/**
 * main.js
 *
 * Punto de entrada de la aplicación Vue.
 * Crea la instancia de Vue y registra Vue Router.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.css'

const app = createApp(App)

// Inicializar sesión desde localStorage
store.dispatch('restoreSession')

app.use(router)
app.use(store)

app.mount('#app')
