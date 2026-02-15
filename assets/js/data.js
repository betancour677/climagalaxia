/**
 * data.js
 * 
 * Base de datos de planetas con coordenadas terrestres mapeadas para simulación de clima real.
 */

const PLANETAS = [
    {
        id: "tatooine",
        nombre: "Tatooine",
        lat: 33.8869, 
        lon: 9.5375, // Túnez (Desierto)
        icono: `<img src="assets/imagenes/tatooine.png" alt="Tatooine" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        descripcion: "Dos soles y arena interminable.",
        humor_clima: "Ideal si te gusta el bronceado extremo instantáneo. La probabilidad de sudar es del 110%.",
        consejo_supervivencia: "Si ves gente caminando en fila india, escóndete. Son Tusken Raiders."
    },
    {
        id: "hoth",
        nombre: "Hoth",
        lat: 64.1814, 
        lon: -51.6941, // Nuuk, Groenlandia (Frío/Nieve)
        descripcion: "Viento helado y superficies congeladas.",
        humor_clima: "El lugar perfecto para mantener tu bebida fría... y congelar tus pestañas.",
        consejo_supervivencia: "¿Tienes frío? Duerme dentro de un Tauntaun. Huele mal, pero salva vidas.",
        icono: `<img src="assets/imagenes/hoth.png" alt="Hoth" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "endor",
        nombre: "Endor",
        lat: 41.2132, 
        lon: -124.0046, // Redwood National Park, USA (Bosque)
        descripcion: "Bosques densos y clima templado.",
        humor_clima: "Húmedo y lleno de pelusas. Cuidado con tropezar con trampas de troncos.",
        consejo_supervivencia: "No subestimes a los osos de peluche con lanzas. Son carnívoros.",
        icono: `<img src="assets/imagenes/endor.png" alt="Endor" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "mustafar",
        nombre: "Mustafar",
        lat: 19.4069, 
        lon: -155.2833, // Kilauea, Hawaii (Volcánico)
        descripcion: "Ríos de lava y calor extremo.",
        humor_clima: "Trae malvaviscos. En serio, el suelo es literalmente una estufa.",
        consejo_supervivencia: "Ten el terreno alto (High Ground). Créeme, es importante aquí.",
        icono: `<img src="assets/imagenes/mustafar.png" alt="Mustafar" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "bespin",
        nombre: "Bespin",
        lat: 51.5074, 
        lon: -0.1278, // Londres, UK (Nublado/Viento)
        descripcion: "Ciudad de las Nubes.",
        humor_clima: "Hermosas vistas, cero suelo firme. No se te ocurra mirar abajo.",
        consejo_supervivencia: "Si un viejo amigo te invita a cenar, verifica que no haya Siths en el comedor.",
        icono: `<img src="assets/imagenes/bespin.png" alt="Bespin" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "dagobah",
        nombre: "Dagobah",
        lat: -3.1190, 
        lon: -60.0217, // Manaos, Amazonas (Húmedo/Pantano)
        descripcion: "Pantanos y misterio.",
        humor_clima: "100% de probabilidad de mojarte los calcetines. Huele a sopa vieja.",
        consejo_supervivencia: "La fuerza es intensa aquí, pero también los mosquitos gigantes.",
        icono: `<img src="assets/imagenes/dagobah.png" alt="Dagobah" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "naboo",
        nombre: "Naboo",
        lat: 46.0160, 
        lon: 9.2572, // Lago Como, Italia (Agradable)
        descripcion: "Praderas verdes y lagos.",
        humor_clima: "Demasiado perfecto. Seguramente hay algo escondido bajo el agua.",
        consejo_supervivencia: "Soporta a los Gungans con paciencia. Son molestos, pero tienen escudos.",
        icono: `<img src="assets/imagenes/naboo.png" alt="Naboo" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "coruscant",
        nombre: "Coruscant",
        lat: 35.6762, 
        lon: 139.6503, // Tokio, Japón (Urbano)
        descripcion: "La ciudad que nunca duerme.",
        humor_clima: "Clima controlado artificialmente. Si llueve, es porque el alcalde está triste.",
        consejo_supervivencia: "No compres Death Sticks. Ve a casa y replantea tu vida.",
        icono: `<img src="assets/imagenes/coruscant.png" alt="Coruscant" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "kamino",
        nombre: "Kamino",
        lat: 60.3913, 
        lon: 5.3221, // Bergen, Noruega (Lluvia constante)
        descripcion: "Océanos infinitos y clonación.",
        humor_clima: "¿Te gusta el agua? Bien, porque no hay nada más. Trae paraguas.",
        consejo_supervivencia: "Todos se parecen aquí. Asegúrate de hablar con el clon correcto.",
        icono: `<img src="assets/imagenes/kamino.png" alt="Kamino" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    },
    {
        id: "geonosis",
        nombre: "Geonosis",
        lat: 36.1069, 
        lon: -112.1129, // Gran Cañón, USA (Roca roja/Seco)
        descripcion: "Roca roja y colmenas.",
        humor_clima: "Polvo rojo en tu ropa para siempre. Garantizado.",
        consejo_supervivencia: "Los locales hablan raro y fabrican robots. No confíes en ellos.",
        icono: `<img src="assets/imagenes/geonosis.png" alt="Geonosis" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`
    }
];
