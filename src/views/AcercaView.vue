<script>
/**
 * AcercaView.vue
 * Página de información del proyecto utilizando el diseño premium.
 */
export default {
    name: 'AcercaView'
}
</script>

<template>
    <div class="about-page">
        <div class="display-1 mb-4">🚀</div>
        <h1 class="about-page__title">Sobre el Proyecto</h1>
        <p class="about-page__description">
            <strong>Rebel Weather</strong> es una terminal táctica diseñada para la Alianza Rebelde. 
            Esta versión ha sido completamente reconstruida como una <strong>SPA (Single Page Application)</strong> 
            utilizando <strong>Vue.js 3</strong> y <strong>Vite</strong> para garantizar la máxima velocidad 
            en el campo de batalla frente al Imperio.
        </p>

        <div class="about-features">
            <div class="about-feature">
                <div class="about-feature__icon">⚛️</div>
                <h4 class="about-feature__title">Vue.js 3</h4>
                <p class="about-feature__text">Arquitectura reactiva basada en componentes para una interfaz fluida.</p>
            </div>
            <div class="about-feature">
                <div class="about-feature__icon">🛣️</div>
                <h4 class="about-feature__title">Vue Router</h4>
                <p class="about-feature__text">Navegación instantánea entre sectores galácticos sin recarga de página.</p>
            </div>
            <div class="about-feature">
                <div class="about-feature__icon">📡</div>
                <h4 class="about-feature__title">Open-Meteo</h4>
                <p class="about-feature__text">Intercepción de datos meteorológicos reales mediante transmisiones de la Holonet.</p>
            </div>
            <div class="about-feature">
                <div class="about-feature__icon">🎨</div>
                <h4 class="about-feature__title">Premium UI</h4>
                <p class="about-feature__text">Diseño minimalista y oscuro optimizado para naves de reconocimiento.</p>
            </div>
        </div>

        <div class="mt-5">
            <router-link to="/" class="planet-card__btn" style="display: inline-block; padding: 1rem 3rem;">
                Volver al Mapa
            </router-link>
        </div>
    </div>
</template>
