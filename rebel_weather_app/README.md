# 🌌 Rebel Weather - App de Clima Galáctica

**Módulo 4 – App de Clima (Lógica y Estadísticas en JavaScript)**

Una aplicación web minimalista para consultar las condiciones atmosféricas de diferentes planetas y sistemas de la galaxia. Desarrollada con HTML, CSS/SASS, Bootstrap 4 y JavaScript vanilla.

## 📋 Descripción del Proyecto

Rebel Weather es una interfaz de clima con temática de Star Wars que muestra información meteorológica de diferentes planetas de la galaxia. La aplicación permite:

- Ver un listado de 10 planetas con su clima actual en cards responsivas
- Acceder a información detallada de cada planeta
- Consultar pronósticos semanales (7 días)
- **Ver estadísticas calculadas dinámicamente:**
  - Temperatura mínima, máxima y promedio de la semana
  - Distribución de días por tipo de clima
  - Resumen textual generado automáticamente
- Recibir consejos de supervivencia según las condiciones climáticas

## 📊 Modelado de Datos (Módulo 4)

Los datos de clima están organizados en un **array de objetos** (`PLANETAS`) definido en `assets/js/data.js`. Cada planeta contiene:

- Información básica: `id`, `nombre`, `descripcion`
- Datos climáticos actuales: `temperatura`, `estado`, `humedad`, `viento`
- Contenido adicional: `humor_clima`, `consejo_supervivencia`, `icono`
- **Pronóstico semanal**: Array `semanal` con 7 objetos, cada uno con `dia`, `temperatura`, `icono`, `estado`

### Estadísticas Calculadas

La aplicación calcula automáticamente en JavaScript:

1. **Temperatura mínima** de la semana (usando ciclo `for` y condicionales)
2. **Temperatura máxima** de la semana
3. **Temperatura promedio** (suma de temperaturas / cantidad de días)
4. **Conteo de días por tipo de clima** (usando objeto como contador)
5. **Resumen textual** generado según temperatura promedio y clima predominante

## 🎨 Metodología de Estilos

Este proyecto utiliza **BEM (Block Element Modifier)** como metodología de organización de estilos CSS.

### Ejemplos de nomenclatura BEM aplicada:

- **Bloques principales:**
  - `.weather-app` - Contenedor principal de la aplicación
  - `.place-card` - Tarjeta de lugar/planeta
  - `.detail-card` - Tarjeta de detalle
  - `.forecast-card` - Tarjeta de pronóstico semanal
  - `.survival-card` - Tarjeta de consejos de supervivencia

- **Elementos:**
  - `.weather-app__header` - Encabezado de la app
  - `.weather-app__navbar` - Barra de navegación
  - `.weather-app__footer` - Pie de página
  - `.place-card__image` - Imagen del planeta
  - `.place-card__title` - Título de la card
  - `.place-card__temp` - Temperatura
  - `.detail-card__icon` - Icono del detalle
  - `.detail-card__stats` - Sección de estadísticas

- **Modificadores:**
  - `.place-card--hover` - Variante con efecto hover

## 📁 Estructura SASS

El proyecto utiliza SASS para modularizar y organizar los estilos:

```
scss/
├── base/
│   ├── _variables.scss    # Variables de diseño (colores, tipografía, espaciado)
│   └── _mixins.scss        # Mixins reutilizables (hover, botones, etc.)
├── layout/
│   └── _layout.scss        # Estilos de layout (header, main, footer)
├── components/
│   ├── _place-card.scss    # Componente de tarjeta de lugar
│   ├── _detail-card.scss   # Componente de tarjeta de detalle
│   └── _buttons.scss       # Componente de botones
└── main.scss               # Archivo principal que importa todos los parciales
```

### Descripción de parciales:

- **`_variables.scss`**: Define todas las variables del proyecto (paleta de colores, fuentes, tamaños, espaciados, breakpoints)
- **`_mixins.scss`**: Contiene mixins para efectos hover, botones pill, tracking de texto y cards base
- **`_layout.scss`**: Estilos estructurales de la aplicación (header, navbar, main, footer)
- **`_place-card.scss`**: Estilos del componente de tarjeta de lugar con metodología BEM
- **`_detail-card.scss`**: Estilos de las tarjetas de detalle, pronóstico y supervivencia
- **`_buttons.scss`**: Estilos de botones reutilizables
- **`main.scss`**: Archivo de entrada que importa todos los parciales y compila a CSS

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **SASS** - Preprocesador CSS con modularización
- **Bootstrap 4.6.2** - Framework CSS para grid y componentes
- **JavaScript ES6** - Lógica de la aplicación
- **Google Fonts (Inter)** - Tipografía moderna

## 🎯 Características de Diseño

- **Paleta minimalista**: Colores neutros con acentos en negro
- **Tipografía moderna**: Inter con diferentes pesos
- **Responsividad completa**:
  - Mobile (≤420px): 1 columna
  - Tablet (768px): 2-3 columnas
  - Desktop (≥1024px): 4 columnas
- **Micro-animaciones**: Efectos hover suaves en cards
- **Sistema de grid Bootstrap**: Organización flexible del contenido

## 🚀 Instalación y Uso

### Requisitos previos:
- Node.js y npm instalados
- SASS instalado globalmente

### Pasos:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/betancour677/climagalaxia.git
cd rebel_weather_app
```

2. **Instalar SASS (si no lo tienes):**
```bash
npm install -g sass
```

3. **Compilar SASS a CSS:**
```bash
sass scss/main.scss assets/css/main.css
```

4. **Abrir en el navegador:**
Simplemente abre `index.html` en tu navegador favorito.

### Modo desarrollo (watch):
Para compilar automáticamente los cambios de SASS:
```bash
sass --watch scss/main.scss:assets/css/main.css
```

## 📂 Estructura del Proyecto

```
rebel_weather_app/
├── assets/
│   ├── css/
│   │   ├── main.css        # CSS compilado desde SASS
│   │   └── style.css       # CSS legacy (no usado)
│   ├── imagenes/           # Imágenes del proyecto
│   └── js/
│       ├── data.js         # Datos de planetas
│       └── script.js       # Lógica de la aplicación
├── scss/                   # Archivos SASS (ver estructura arriba)
├── index.html              # Página principal
├── detalle.html            # Página de detalle
├── about.html              # Página acerca de
└── README.md               # Este archivo
```

## 🔗 Enlaces

- **Repositorio GitHub**: https://github.com/betancour677/climagalaxia.git

## 👨‍💻 Autor

**Tu Nombre**
- Módulos 3 y 4 - Curso Frontend
- Año 2026

## 📝 Notas de Desarrollo

Este proyecto incluye las iteraciones de los Módulos 3 y 4:

**Módulo 3:**
- Refactorización de estilos con metodología BEM en español
- Implementación de SASS con arquitectura modular
- Uso de Bootstrap 4 para layout responsivo
- Mejora de la experiencia visual y mantenibilidad del código

**Módulo 4:**
- Modelado de datos con arrays y objetos en JavaScript
- Implementación de ciclos (`for`, `forEach`) para procesar pronósticos
- Uso de condicionales para generar resúmenes dinámicos
- Funciones reutilizables: `calcularEstadisticasSemana()`, `renderizarTarjetasPlanetas()`, `cargarDetallesPlaneta()`
- Manipulación del DOM para mostrar estadísticas calculadas

---

*© Rebel Alliance Systems - Módulos 3 y 4 – App de Clima*
