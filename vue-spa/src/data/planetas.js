/**
 * planetas.js
 *
 * Base de datos estática de planetas de Star Wars.
 * Cada planeta tiene coordenadas terrestres reales mapeadas
 * para simular su clima a través de la API Open-Meteo.
 */

export const PLANETAS = [
  {
    id: 'tatooine',
    nombre: 'Tatooine',
    lat: 33.8869,
    lon: 9.5375,
    imagen: '/imagenes/tatooine.png',
    descripcion: 'Dos soles y arena interminable.',
    humor_clima: 'Ideal si te gusta el bronceado extremo instantáneo. La probabilidad de sudar es del 110%.',
    consejo_supervivencia: 'Si ves gente caminando en fila india, escóndete. Son Tusken Raiders.',
    region: 'Borde Exterior'
  },
  {
    id: 'hoth',
    nombre: 'Hoth',
    lat: 64.1814,
    lon: -51.6941,
    imagen: '/imagenes/hoth.png',
    descripcion: 'Viento helado y superficies congeladas.',
    humor_clima: 'El lugar perfecto para mantener tu bebida fría... y congelar tus pestañas.',
    consejo_supervivencia: '¿Tienes frío? Duerme dentro de un Tauntaun. Huele mal, pero salva vidas.',
    region: 'Borde Exterior'
  },
  {
    id: 'endor',
    nombre: 'Endor',
    lat: 41.2132,
    lon: -124.0046,
    imagen: '/imagenes/endor.png',
    descripcion: 'Bosques densos y clima templado.',
    humor_clima: 'Húmedo y lleno de pelusas. Cuidado con tropezar con trampas de troncos.',
    consejo_supervivencia: 'No subestimes a los osos de peluche con lanzas. Son carnívoros.',
    region: 'Territorios del Borde'
  },
  {
    id: 'mustafar',
    nombre: 'Mustafar',
    lat: 19.4069,
    lon: -155.2833,
    imagen: '/imagenes/mustafar.png',
    descripcion: 'Ríos de lava y calor extremo.',
    humor_clima: 'Trae malvaviscos. En serio, el suelo es literalmente una estufa.',
    consejo_supervivencia: 'Ten el terreno alto (High Ground). Créeme, es importante aquí.',
    region: 'Borde Exterior'
  },
  {
    id: 'bespin',
    nombre: 'Bespin',
    lat: 51.5074,
    lon: -0.1278,
    imagen: '/imagenes/bespin.png',
    descripcion: 'Ciudad de las Nubes.',
    humor_clima: 'Hermosas vistas, cero suelo firme. No se te ocurra mirar abajo.',
    consejo_supervivencia: 'Si un viejo amigo te invita a cenar, verifica que no haya Siths en el comedor.',
    region: 'Borde Exterior'
  },
  {
    id: 'dagobah',
    nombre: 'Dagobah',
    lat: -3.119,
    lon: -60.0217,
    imagen: '/imagenes/dagobah.png',
    descripcion: 'Pantanos y misterio.',
    humor_clima: '100% de probabilidad de mojarte los calcetines. Huele a sopa vieja.',
    consejo_supervivencia: 'La fuerza es intensa aquí, pero también los mosquitos gigantes.',
    region: 'Borde Exterior'
  },
  {
    id: 'naboo',
    nombre: 'Naboo',
    lat: 46.016,
    lon: 9.2572,
    imagen: '/imagenes/Naboo.png',
    descripcion: 'Praderas verdes y lagos.',
    humor_clima: 'Demasiado perfecto. Seguramente hay algo escondido bajo el agua.',
    consejo_supervivencia: 'Soporta a los Gungans con paciencia. Son molestos, pero tienen escudos.',
    region: 'Borde Medio'
  },
  {
    id: 'coruscant',
    nombre: 'Coruscant',
    lat: 35.6762,
    lon: 139.6503,
    imagen: '/imagenes/coruscant.png',
    descripcion: 'La ciudad que nunca duerme.',
    humor_clima: 'Clima controlado artificialmente. Si llueve, es porque el alcalde está triste.',
    consejo_supervivencia: 'No compres Death Sticks. Ve a casa y replantea tu vida.',
    region: 'Núcleo'
  },
  {
    id: 'kamino',
    nombre: 'Kamino',
    lat: 60.3913,
    lon: 5.3221,
    imagen: '/imagenes/kamino.png',
    descripcion: 'Océanos infinitos y clonación.',
    humor_clima: '¿Te gusta el agua? Bien, porque no hay nada más. Trae paraguas.',
    consejo_supervivencia: 'Todos se parecen aquí. Asegúrate de hablar con el clon correcto.',
    region: 'Extra-galáctico'
  },
  {
    id: 'geonosis',
    nombre: 'Geonosis',
    lat: 36.1069,
    lon: -112.1129,
    imagen: '/imagenes/geonosis.png',
    descripcion: 'Roca roja y colmenas.',
    humor_clima: 'Polvo rojo en tu ropa para siempre. Garantizado.',
    consejo_supervivencia: 'Los locales hablan raro y fabrican robots. No confíes en ellos.',
    region: 'Borde Exterior'
  }
]
