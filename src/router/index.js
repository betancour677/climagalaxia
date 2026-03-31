/**
 * router/index.js
 *
 * Configuración de Vue Router para la SPA.
 * Define las rutas principales: Home, Detalle y Acerca.
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store' // Importamos el store para chequear auth

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
        component: () => import('../views/DetalleView.vue'),
        meta: { title: 'Detalle — Rebel Weather' }
    },
    {
        path: '/acerca',
        name: 'Acerca',
        component: () => import('../views/AcercaView.vue'),
        meta: { title: 'Acerca — Rebel Weather' }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue'),
        meta: { title: 'Iniciar Sesión — Rebel Weather' }
    },
    {
        path: '/registro',
        name: 'Registro',
        component: () => import('../views/RegistroView.vue'),
        meta: { title: 'Registro — Rebel Weather' }
    },
    {
        path: '/favoritos',
        name: 'Favoritos',
        component: () => import('../views/FavoritosView.vue'),
        meta: { 
            title: 'Mis Favoritos — Rebel Weather',
            requiresAuth: true 
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

// Guard de Navegación: Proteger rutas privadas
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated
    
    // Si la ruta requiere auth y no está logueado
    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login', query: { redirect: to.fullPath } })
    } 
    // Si ya está logueado e intenta ir a login/registro
    else if ((to.name === 'Login' || to.name === 'Registro') && isAuthenticated) {
        next({ name: 'Home' })
    }
    else {
        next()
    }
})

// Actualizar el título de la página según la ruta actual
router.afterEach((to) => {
    document.title = to.meta.title || 'Rebel Weather'
})

export default router
