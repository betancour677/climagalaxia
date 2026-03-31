# ⚔️ Rebel Weather SPA - Terminal Táctica Galáctica

**Versión 4.0 - Usuarios, Autenticación y Estado Global (Vuex)**

Bienvenido a la terminal de clima oficial de la Alianza Rebelde. Esta aplicación ha sido modernizada en el **Módulo 7** para incluir un sistema de usuarios que permite a los operativos rebeldes personalizar su experiencia, guardar sectores favoritos y gestionar sus preferencias climáticas de forma persistente.

## 🌌 Sistema de Usuarios y Autenticación

La terminal ahora cuenta con una capa de seguridad y personalización gestionada mediante **Vuex**:

- **Autenticación (Mock)**: Sistema de login y registro simulado. Las credenciales se verifican contra un servicio interno y la sesión se mantiene activa mediante `localStorage`.
- **Estado Global (Vuex)**: Centralización de los datos del usuario, estado de autenticación y preferencias (unidad de medida).
- **Rutas Protegidas**: Acceso restringido a secciones críticas como "Mis Favoritos" mediante Navigation Guards en Vue Router.
- **Personalización**:
    - Guardado/Eliminado de planetas favoritos desde las tarjetas de la Home o el listado de favoritos.
    - Sincronización de la unidad de temperatura (°C/°F) en todo el sistema según la preferencia del usuario.

### 🔑 Credenciales de Acceso (Simuladas)
Para probar las funcionalidades de usuario, puedes usar estos perfiles:
1. **Luke Skywalker**: `luke@rebellion.com` / clave: `force`
2. **Han Solo**: `han@falcon.com` / clave: `kesselrun`

## 🖼️ Vistas Principales

1. **Inicio (Home)**: Listado de todos los sectores galácticos. Los usuarios logueados pueden marcar planetas como favoritos directamente desde aquí.
2. **Login / Registro**: Formularios de acceso y creación de cuenta con validaciones de éxito y error.
3. **Mis Favoritos**: Vista privada que muestra únicamente los sectores que el usuario ha marcado como preferidos para un monitoreo rápido.
4. **Detalle del Planeta**: Informe exhaustivo del clima con pronóstico de 7 días.
5. **Acerca de**: Información técnica sobre la terminal.

## 🛣️ Enrutamiento (Vue Router)

Nuevas rutas añadidas para la gestión de usuarios:
- `/login`: Formulario de acceso.
- `/registro`: Formulario de alta de nuevos reclutas.
- `/favoritos` (**Privada**): Listado de sectores preferidos del usuario (requiere login).

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3**: Framework base.
- **Vuex**: Gestión de estado global de auth y preferencias.
- **Vue Router**: Navegación SPA y protección de rutas.
- **Vite**: Build tool.
- **Axios**: (Opcional) Preparado para integraciones con APIs externas.
- **Open-Meteo API**: Datos climáticos en tiempo real.

## 🚀 Instrucciones de Ejecución

1. **Instalar dependencias**: `npm install`
2. **Lanzar servidor**: `npm run dev`

## 🌐 Demo en Vivo
Puedes probar la terminal táctica en el siguiente enlace:
[https://climagalaxia.netlify.app/](https://climagalaxia.netlify.app/)

## 🔗 Enlace al Repositorio
[https://github.com/betancour677/climagalaxia.git](https://github.com/betancour677/climagalaxia/tree/v3-vue-version)

---
*Que la Fuerza acompañe tu código.*
