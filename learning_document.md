# Documento de Aprendizaje: Modernizando la Web con JS, APIs y POO

¡Hola! En esta sesión estamos dando un gran paso en el desarrollo web. Vamos a pasar de mostrar datos estáticos (escritos fijamente en el código) a una aplicación dinámica que "vive" y consulta información real en internet. Aquí te explico los conceptos clave que estamos aplicando, como si estuviéramos tomando un café.

## 1. Clases y Objetos (POO) 🏗️

Imagina que quieres construir casas. En lugar de construir cada casa desde cero improvisando, creas un **plano** (Blueprit).
En programación, ese plano es una **Clase**.

-   **Clase (`class`)**: Es la plantilla. Por ejemplo, `ApiClient` es nuestro plano para alguien que sabe buscar datos en internet.
-   **Objeto (`new ApiClient()`)**: Es la "casa" construida usando el plano. Es la herramienta real que usaremos.
-   **Constructor**: Es lo primero que se ejecuta al crear el objeto. Aquí preparamos las herramientas necesarias (como la URL base de la API).

```javascript
class WeatherApp {
    constructor() {
        this.lugares = []; // Empezamos con una lista vacía
    }
}
```

## 2. Asincronía: El arte de esperar sin bloquear ⏳

Cuando pides una pizza por teléfono, no te quedas congelado en la línea esperando a que la cocinen. Cuelgas, haces otras cosas, y esperas a que llegue el repartidor.
En JavaScript, esto es **Asincronía**.

-   **`fetch()`**: Es como llamar a la pizzería (API).
-   **`await`**: Es la instrucción de "esperar aquí a que llegue la respuesta antes de seguir, pero sin congelar el navegador".
-   **`async`**: Es una etiqueta que le ponemos a una función para avisar que "dentro de esta función vamos a tener que esperar cosas".

```javascript
async function cargarDatos() {
    // ¡Espera a que internet responda!
    const respuesta = await fetch("https://api.clima.com/...");
    const datos = await respuesta.json();
    console.log(datos);
}
```

## 3. APIs REST 🌐

Una API (Interfaz de Programación de Aplicaciones) es como un camarero. Tú (el cliente) le pides algo del menú (datos), el camarero va a la cocina (servidor), y te trae el plato.
-   **Endpoint**: Es la dirección específica a la que llamamos (ej. `/v1/forecast`).
-   **JSON**: Es el formato en el que nos traen la comida. Es texto, pero organizado de una forma que JavaScript entiende perfectamente.

## 4. ES6+ Moderno ✨

Estamos usando las últimas mejoras de JavaScript para escribir código más limpio:
-   **`const` y `let`**: Para declarar variables de forma segura (evitamos el viejo `var`).
-   **Arrow Functions (`=>`)**: Una forma más corta de escribir funciones.
-   **Template Literals (`` `texto ${variable}` ``)**: Para mezclar texto y variables fácilmente, ideal para crear HTML dinámico.

---
*Este documento se actualizará a medida que avancemos con la implementación.*

---

# Nivel 2: La Revolución de las SPAs con Vue 3 🚀

Ahora que entendemos las clases e internet, vamos a llevarlo al siguiente nivel: **Single Page Applications (SPA)**.

## 5. ¿Qué es una SPA? 📄

Tradicionalmente, cuando hacías clic en un enlace, el navegador pedía una página nueva al servidor y la pantalla parpadeaba en blanco un segundo mientras cargaba todo (HTML, CSS, JS).
Una **SPA** carga una sola vez y, cuando navegas, **Vue** simplemente intercambia las piezas de la interfaz que han cambiado. Es como cambiar el escenario de una obra de teatro sin que el público se vaya de la sala.

## 6. Componentes Vue (`.vue`) 🧩

En lugar de tener archivos HTML gigantes, dividimos la web en piezas pequeñas y lógicas. Cada archivo `.vue` tiene tres partes:
1.  **`<script>`**: El cerebro (la lógica en JavaScript).
2.  **`<template>`**: El cuerpo (la estructura en HTML).
3.  **`<style>`**: La ropa (el diseño en CSS, opcionalmente "scoped" para que solo afecte a ese componente).

## 7. Navegación con Vue Router 🛣️

Para que la SPA sepa qué componente mostrar en qué URL (ej. `/acerca`), usamos un "mapeador" llamado **Vue Router**.
-   **`<router-link>`**: Es el reemplazo del enlace `<a>`. No recarga la página, solo avisa al Router que cambie la vista.
-   **`<router-view>`**: Es el lugar de la página donde se "inyectan" las vistas (Home, Detalle, etc.).

## 8. Props: Comunicación de Padres a Hijos 👨‍👩‍👦

En Vue, la información viaja de arriba hacia abajo. 
Si el componente principal (`App.vue`) tiene seleccionada la unidad de temperatura (°C), se la pasa a sus hijos (las vistas) usando algo llamado **Props**.
Es como si el padre le prestara una herramienta al hijo para que la use.

```vue
<!-- En el Padre -->
<MiComponente :unidad="unidadSeleccionada" />

<!-- En el Hijo -->
<script>
export default {
  props: ['unidad']
}
</script>
```

## 9. El Ciclo de Vida: `created()` 🐣

Los componentes tienen momentos clave. Por ejemplo, `created()` es el momento en que el componente "nace". Es el lugar ideal para empezar a pedir datos a la API para que, cuando el usuario vea la pantalla, la información ya esté en camino.

## 10. CSS Moderno: Grids y Flexbox vs Bootstrap 🎨

En esta actualización, aprendimos que no siempre necesitamos un framework gigante como Bootstrap para que nuestra web se vea bien. 

- **Custom CSS (Design System)**: Hemos usado un archivo `main.css` que define nuestro propio lenguaje visual (colores `--color-bg`, espaciados `--space-md`). Esto nos da control total y un acabado mucho más "premium" y único.
- **Grids Propios**: En lugar de usar filas y columnas genéricas (`row`, `col`), creamos rejillas específicas como `.planet-grid` o `.stats-grid`. Esto hace que el código sea más descriptivo y fácil de mantener.
- **Variables CSS**: Al usar variables (como `--color-accent`), si mañana queremos cambiar el color de la Alianza de morado a azul, solo tenemos que cambiarlo en un lugar y se actualizará en toda la galaxia.

## 11. Carga masiva con `Promise.all` ⚡

Cuando tenemos una lista de planetas y queremos el clima de todos, podríamos pedir uno, esperar, pedir el otro, esperar... pero eso sería muy lento (como si en un restaurante los camareros solo pudieran llevar un plato a la vez).

- **Paralelismo**: Con `Promise.all`, enviamos todas las peticiones a la vez. Es como si 10 camareros salieran al mismo tiempo. El resultado es que la aplicación se siente mucho más rápida y profesional.
- **Reactividad**: Al actualizar los datos en el array `planetas`, Vue se encarga automáticamente de "repintar" las tarjetas con las temperaturas correctas en cuanto llegan los datos de internet.

## 12. Flexbox: Controlando el espacio galáctico 🌌

Lograr que los elementos no se choquen es vital en el diseño web.

- **`gap`**: Es la forma más fácil de separar hijos de un contenedor flexible. En lugar de poner márgenes a cada elemento uno por uno, le decimos al contenedor: "queremos X espacio entre tus hijos".
- **`white-space: nowrap`**: A veces el texto es muy largo y el navegador intenta "doblarlo" para que quepa. Con esto, obligamos a que el nombre de nuestra marca se mantenga siempre en una sola línea, manteniendo la elegancia.

## 13. El README: El manual de vuelo de tu código 📖

Documentar es tan importante como programar. Un buen programador profesional siempre deja un mapa para que otros sepan usar su trabajo.

- **Descripción**: No asumas que todos saben qué hace tu app. Explica el "qué" y el "por qué".
- **Instrucciones**: Enumera los comandos necesarios (`npm install`, `npm run dev`) para que cualquier colega pueda clonar tu proyecto y verlo funcionar en segundos.
- **Rutas**: En una SPA, dejar claro cuáles son las URLs disponibles ayuda a entender la arquitectura de navegación rápidamente.

---
*Seguimos aprendiendo y construyendo el futuro de la galaxia.*
