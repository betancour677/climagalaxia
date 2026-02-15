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
