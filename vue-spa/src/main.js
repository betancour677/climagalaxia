/**
 * main.js
 *
 * Punto de entrada de la aplicación Vue.
 * Crea la instancia de Vue y registra Vue Router.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
