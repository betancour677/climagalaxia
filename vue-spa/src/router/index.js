/**
 * router/index.js
 *
 * Configuración de Vue Router para la SPA.
 * Define las rutas principales: Home, Detalle y Acerca.
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { title: 'Rebel Weather — Clima Galáctico' }
    },
    {
        path: '/lugar/:id',
        name: 'Detalle',
        // Lazy loading: el componente solo se carga cuando se necesita
        component: () => import('../views/DetalleView.vue'),
        meta: { title: 'Detalle — Rebel Weather' }
    },
    {
        path: '/acerca',
        name: 'Acerca',
        component: () => import('../views/AcercaView.vue'),
        meta: { title: 'Acerca — Rebel Weather' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // Al cambiar de ruta, hacer scroll al inicio de la página
    scrollBehavior() {
        return { top: 0 }
    }
})

// Actualizar el título de la página según la ruta actual
router.afterEach((to) => {
    document.title = to.meta.title || 'Rebel Weather'
})

export default router
