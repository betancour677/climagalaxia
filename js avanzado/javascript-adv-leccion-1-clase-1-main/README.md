

# ⚔️ Taller Práctico: "CodeQuest: La Batalla de los Objetos"

**Contexto:**
El estudio de videojuegos "Javscript Games" te ha encargado programar el núcleo ("Core") de su nuevo RPG de estrategia. Tu misión es diseñar las clases que controlarán a los héroes y sus interacciones en la arena de combate.

El objetivo no es hacer gráficos, sino **modelar la lógica pura** del combate utilizando POO estricta.

---

## 🎯 Objetivos Técnicos

1. **Abstracción:** Modelar la entidad genérica "Personaje".
2. **Encapsulamiento:** Proteger la "Vida" (HP) para que no sea manipulada incorrectamente.
3. **Herencia:** Crear clases especializadas (Guerrero, Mago).
4. **Polimorfismo:** Que el método `atacar()` funcione diferente según la clase.
5. **Interacción:** Que los objetos se modifiquen entre sí (paso de mensajes).

---

## 🚀 Misión Paso a Paso (90 Minutos)

### Parte 1: El Molde del Héroe (Clase Base y Encapsulamiento)

Todos los combatientes comparten características básicas. No queremos repetir código.

1. Crea una clase `Personaje`.
2. **Propiedades:** Define en el constructor: `nombre` (string), `nivel` (number, inicialízalo en 1) y `_vida` (number).
* *Nota:* Usa la convención `_` para indicar que `vida` es privada y no debe tocarse directamente.


3. **Encapsulamiento (Getter):** Crea un método `get vida()` que retorne el valor actual de `_vida`.
4. **Métodos de Estado:**
* Crea un método `info()` que retorne un string: "[Nombre] (Lvl [Nivel]) - HP: [Vida]".
* Crea un método `estaVivo()` que retorne `true` si la vida es mayor a 0.



### Parte 2: Lógica de Daño y Curación (Validaciones)

La vida no puede subir infinitamente ni bajar de cero.

1. Dentro de `Personaje`, crea un método `sufrirDanio(cantidad)`.
* Resta la cantidad a `_vida`.
* **Regla:** Si la vida baja de 0, fuérzala a ser 0.
* Muestra un mensaje en consola: "[Nombre] ha recibido [X] de daño. Vida restante: [Y]".


2. Crea un método `curar(cantidad)`.
* Suma la cantidad a `_vida`.
* (Opcional: Puedes definir una vida máxima en el constructor para no sobrepasarla).



### Parte 3: Especialización de Clases (Herencia y Super)

Un "Personaje" genérico es aburrido. Vamos a crear roles.

1. Crea una clase `Guerrero` que **herede** (`extends`) de `Personaje`.
* En su **constructor**, recibe `nombre` y `fuerza`.
* Llama al constructor padre (`super`) pasando un valor de vida alto (ej. 100).
* Guarda `fuerza` como propiedad propia.


2. Crea una clase `Mago` que **herede** de `Personaje`.
* En su **constructor**, recibe `nombre` y `mana`.
* Llama al constructor padre con menos vida (ej. 60).
* Guarda `mana` como propiedad propia.



### Parte 4: El Arte de la Guerra (Polimorfismo)

Aquí es donde la POO brilla. Ambos atacan, pero de forma distinta.

1. En la clase base `Personaje`, define un método `atacar(objetivo)` (donde "objetivo" será otro objeto Personaje). Por defecto, que imprima: "¡[Nombre] no sabe cómo atacar!".
2. **Sobrescribe** `atacar(objetivo)` en la clase `Guerrero`:
* El daño debe ser igual a su `fuerza`.
* Invoca al método `sufrirDanio()` del **objeto objetivo**, pasándole ese valor.
* Imprime: "⚔️ [Nombre] ataca con su espada a [Objetivo.nombre]!".


3. **Sobrescribe** `atacar(objetivo)` en la clase `Mago`:
* El daño debe ser fijo (ej. 20) pero requiere `mana`.
* Si tiene `mana` suficiente (> 10):
* Resta el mana.
* Invoca `sufrirDanio()` en el objetivo.
* Imprime: "🔥 [Nombre] lanza una bola de fuego a [Objetivo.nombre]!".


* Si NO tiene mana:
* Imprime: "💨 [Nombre] intenta atacar pero no tiene maná...".





### Parte 5: El Motor de Probabilidad (Métodos Estáticos)

Necesitamos un elemento de suerte.

1. Crea una clase de utilidad llamada `Dados`.
2. Crea un método **estático** `lanzar(caras)`.
* Debe retornar un número aleatorio entre 1 y el número de caras.


3. **Integración:** Modifica el método `atacar` del Guerrero. Ahora el daño no es fijo, es `fuerza` + el resultado de `Dados.lanzar(10)`. ¡Daño crítico!

### Parte 6: La Arena (Lógica de Ejecución)

Es hora de probar todo en la consola.

1. Instancia un Guerrero llamado "Thor" (Fuerza 15).
2. Instancia un Mago llamado "Loki" (Mana 50).
3. Crea un script de batalla (sin clases extra, solo lógica imperativa simple):
* Muestra la información inicial de ambos (`.info()`).
* Haz que Thor ataque a Loki.
* Haz que Loki ataque a Thor.
* Haz que Loki se cure (puedes instanciar una poción o usar un turno para curar).
* Muestra el estado final.
* Verifica si alguno `estaVivo()` es false.



---

## 🏆 Desafíos Extra (Para los más rápidos)

* **El Berserker:** Agrega una lógica al Guerrero: si su vida es menor a 30, su daño se duplica (Furia).
* **Inventario (Composición):** Crea una clase `Item` (nombre, efecto) y haz que `Personaje` tenga un array `inventario` donde pueda guardar pociones y usarlas.
* **Torneo:** Crea un array con 5 personajes mezclados. Usa `forEach` para que todos ataquen al personaje siguiente en la lista (Polimorfismo en acción: no importa si es Mago o Guerrero, todos entienden el mensaje `atacar()`).

---

### ✅ Checklist de Autoevaluación

* [ ] ¿Usaste `extends` para Guerrero y Mago?
* [ ] ¿Usaste `super()` en los constructores hijos?
* [ ] ¿El método `atacar` recibe un **objeto** como parámetro y modifica el estado de ese objeto? (Esto demuestra interacción real entre objetos).
* [ ] ¿Usaste `static` para los dados?

¡A programar!,  Que comience la batalla. 🎮👨‍💻
