/**
 * data.js
 * 
 * Este archivo contiene la "base de datos" simulada de nuestra aplicación.
 * Es un array de objetos, donde cada objeto representa un planeta (localidad).
 */

const PLANETS = [
    {
        id: "tatooine",
        name: "Tatooine",
        icon: `<img src="assets/imagenes/tatooine.png" alt="Tatooine" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        desc: "Dos soles y arena interminable.",
        // NUEVOS CAMPOS:
        weather_humor: "Ideal si te gusta el bronceado extremo instantáneo. La probabilidad de sudar es del 110%.",
        survival_tip: "Si ves gente caminando en fila india, escóndete. Son Tusken Raiders.",
        state: "Soleado",
        temp: 38,
        humidity: 12,
        wind: "35 km/h",
        weekly: [
            { day: "Lun", temp: 39, icon: "🌩️", state: "Tormenta iden" },
            { day: "Mar", temp: 37, icon: "☀️", state: "Soleado" },
            { day: "Mié", temp: 36, icon: "🔥", state: "Calor intenso" },
            { day: "Jue", temp: 38, icon: "💨", state: "Dunas móviles" },
            { day: "Vie", temp: 40, icon: "☢️", state: "Alta radiación" },
            { day: "Sáb", temp: 39, icon: "🌅", state: "Amanecer brillante" },
            { day: "Dom", temp: 37, icon: "🌬️", state: "Viento cálido" }
        ]
    },
    {
        id: "hoth",
        name: "Hoth",
        desc: "Viento helado y superficies congeladas.",
        weather_humor: "El lugar perfecto para mantener tu bebida fría... y congelar tus pestañas.",
        survival_tip: "¿Tienes frío? Duerme dentro de un Tauntaun. Huele mal, pero salva vidas.",
        state: "Nevando",
        temp: -22,
        icon: `<img src="assets/imagenes/hoth.png" alt="Hoth" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 78,
        wind: "80 km/h",
        weekly: [
            { day: "Lun", temp: -25, icon: "🌨️", state: "Ventisca" },
            { day: "Mar", temp: -20, icon: "❄️", state: "Nieve ligera" },
            { day: "Mié", temp: -28, icon: "🥶", state: "Frío extremo" },
            { day: "Jue", temp: -22, icon: "🌫️", state: "Niebla helada" },
            { day: "Vie", temp: -18, icon: "⛅", state: "Nublado" },
            { day: "Sáb", temp: -24, icon: "🎐", state: "Viento fuerte" },
            { day: "Dom", temp: -30, icon: "🧊", state: "Congelación" }
        ]
    },
    {
        id: "endor",
        name: "Endor",
        desc: "Bosques densos y clima templado.",
        weather_humor: "Húmedo y lleno de pelusas. Cuidado con tropezar con trampas de troncos.",
        survival_tip: "No subestimes a los osos de peluche con lanzas. Son carnívoros.",
        state: "Nublado",
        temp: 18,
        icon: `<img src="assets/imagenes/endor.png" alt="Endor" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 60,
        wind: "12 km/h",
        weekly: [
            { day: "Lun", temp: 19, icon: "🌥️", state: "Parcialmente nublado" },
            { day: "Mar", temp: 17, icon: "🌧️", state: "Llovizna" },
            { day: "Mié", temp: 20, icon: "🌤️", state: "Soleado" },
            { day: "Jue", temp: 18, icon: "🌲", state: "Fresco" },
            { day: "Vie", temp: 16, icon: "🌫️", state: "Niebla matinal" },
            { day: "Sáb", temp: 21, icon: "☀️", state: "Despejado" },
            { day: "Dom", temp: 19, icon: "🍃", state: "Brisa suave" }
        ]
    },
    {
        id: "mustafar",
        name: "Mustafar",
        desc: "Ríos de lava y calor extremo.",
        weather_humor: "Trae malvaviscos. En serio, el suelo es literalmente una estufa.",
        survival_tip: "Ten el terreno alto (High Ground). Créeme, es importante aquí.",
        state: "Volcánico",
        temp: 120,
        icon: `<img src="assets/imagenes/mustafar.png" alt="Mustafar" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 0,
        wind: "5 km/h",
        weekly: [
            { day: "Lun", temp: 125, icon: "🔥", state: "Erupción" },
            { day: "Mar", temp: 118, icon: "🌋", state: "Lava activa" },
            { day: "Mié", temp: 130, icon: "🌫️", state: "Ceniza" },
            { day: "Jue", temp: 122, icon: "🔥", state: "Calor extremo" },
            { day: "Vie", temp: 115, icon: "🌑", state: "Humo denso" },
            { day: "Sáb", temp: 119, icon: "🌡️", state: "Sofocante" },
            { day: "Dom", temp: 121, icon: "💥", state: "Explosiones" }
        ]
    },
    {
        id: "bespin",
        name: "Bespin",
        desc: "Ciudad de las Nubes.",
        weather_humor: "Hermosas vistas, cero suelo firme. No se te ocurra mirar abajo.",
        survival_tip: "Si un viejo amigo te invita a cenar, verifica que no haya Siths en el comedor.",
        state: "Ventoso",
        temp: 15,
        icon: `<img src="assets/imagenes/bespin.png" alt="Bespin" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 80,
        wind: "45 km/h",
        weekly: [
            { day: "Lun", temp: 14, icon: "🌫️", state: "Niebla" },
            { day: "Mar", temp: 16, icon: "🌥️", state: "Nublado" },
            { day: "Mié", temp: 13, icon: "💨", state: "Viento fuerte" },
            { day: "Jue", temp: 15, icon: "☁️", state: "Cielo cubierto" },
            { day: "Vie", temp: 17, icon: "🌤️", state: "Claros" },
            { day: "Sáb", temp: 14, icon: "⛈️", state: "Tormenta eléctrica" },
            { day: "Dom", temp: 15, icon: "🌬️", state: "Brisas altas" }
        ]
    },
    {
        id: "dagobah",
        name: "Dagobah",
        desc: "Pantanos y misterio.",
        weather_humor: "100% de probabilidad de mojarte los calcetines. Huele a sopa vieja.",
        survival_tip: "La fuerza es intensa aquí, pero también los mosquitos gigantes.",
        state: "Lluvioso",
        temp: 28,
        icon: `<img src="assets/imagenes/dagobah.png" alt="Dagobah" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 98,
        wind: "2 km/h",
        weekly: [
            { day: "Lun", temp: 29, icon: "🌧️", state: "Lluvia intensa" },
            { day: "Mar", temp: 28, icon: "🌫️", state: "Humedad alta" },
            { day: "Mié", temp: 27, icon: "⛈️", state: "Tormenta" },
            { day: "Jue", temp: 28, icon: "🌿", state: "Bochornoso" },
            { day: "Vie", temp: 29, icon: "🌧️", state: "Llovizna" },
            { day: "Sáb", temp: 30, icon: "⛅", state: "Vapor" },
            { day: "Dom", temp: 28, icon: "☔", state: "Aguacero" }
        ]
    },
    {
        id: "naboo",
        name: "Naboo",
        desc: "Praderas verdes y lagos.",
        weather_humor: "Demasiado perfecto. Seguramente hay algo escondido bajo el agua.",
        survival_tip: "Soporta a los Gungans con paciencia. Son molestos, pero tienen escudos.",
        state: "Agradable",
        temp: 24,
        icon: `<img src="assets/imagenes/naboo.png" alt="Naboo" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 45,
        wind: "10 km/h",
        weekly: [
            { day: "Lun", temp: 25, icon: "☀️", state: "Soleado" },
            { day: "Mar", temp: 23, icon: "🌤️", state: "Parcialmente nublado" },
            { day: "Mié", temp: 26, icon: "🌼", state: "Primaveral" },
            { day: "Jue", temp: 24, icon: "🦋", state: "Brisa suave" },
            { day: "Vie", temp: 22, icon: "🌧️", state: "Lluvia ligera" },
            { day: "Sáb", temp: 25, icon: "🌈", state: "Arcoíris" },
            { day: "Dom", temp: 24, icon: "☀️", state: "Despejado" }
        ]
    },
    {
        id: "coruscant",
        name: "Coruscant",
        desc: "La ciudad que nunca duerme.",
        weather_humor: "Clima controlado artificialmente. Si llueve, es porque el alcalde está triste.",
        survival_tip: "No compres Death Sticks. Ve a casa y replantea tu vida.",
        state: "Artificial",
        temp: 20,
        icon: `<img src="assets/imagenes/coruscant.png" alt="Coruscant" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 50,
        wind: "15 km/h",
        weekly: [
            { day: "Lun", temp: 21, icon: "🚦", state: "Tráfico" },
            { day: "Mar", temp: 20, icon: "🌃", state: "Noche clara" },
            { day: "Mié", temp: 19, icon: "🏭", state: "Smog ligero" },
            { day: "Jue", temp: 22, icon: "💡", state: "Luces de neón" },
            { day: "Vie", temp: 20, icon: "🌧️", state: "Lluvia ácida" },
            { day: "Sáb", temp: 23, icon: "🌤️", state: "Controlado" },
            { day: "Dom", temp: 21, icon: "🏙️", state: "Urbano" }
        ]
    },
    {
        id: "kamino",
        name: "Kamino",
        desc: "Océanos infinitos y clonación.",
        weather_humor: "¿Te gusta el agua? Bien, porque no hay nada más. Trae paraguas.",
        survival_tip: "Todos se parecen aquí. Asegúrate de hablar con el clon correcto.",
        state: "Tormentoso",
        temp: 18,
        icon: `<img src="assets/imagenes/kamino.png" alt="Kamino" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 100,
        wind: "60 km/h",
        weekly: [
            { day: "Lun", temp: 17, icon: "⛈️", state: "Tormenta severa" },
            { day: "Mar", temp: 18, icon: "🌧️", state: "Lluvia torrencial" },
            { day: "Mié", temp: 16, icon: "🌊", state: "Marea alta" },
            { day: "Jue", temp: 18, icon: "🌩️", state: "Rayos" },
            { day: "Vie", temp: 17, icon: "☔", state: "Lluvia constante" },
            { day: "Sáb", temp: 19, icon: "🌫️", state: "Niebla marina" },
            { day: "Dom", temp: 18, icon: "⛈️", state: "Temporal" }
        ]
    },
    {
        id: "geonosis",
        name: "Geonosis",
        desc: "Roca roja y colmenas.",
        weather_humor: "Polvo rojo en tu ropa para siempre. Garantizado.",
        survival_tip: "Los locales hablan raro y fabrican robots. No confíes en ellos.",
        state: "Árido",
        temp: 45,
        icon: `<img src="assets/imagenes/geonosis.png" alt="Geonosis" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humidity: 5,
        wind: "20 km/h",
        weekly: [
            { day: "Lun", temp: 46, icon: "☀️", state: "Sol abrasador" },
            { day: "Mar", temp: 44, icon: "🏜️", state: "Seco" },
            { day: "Mié", temp: 47, icon: "🔥", state: "Ola de calor" },
            { day: "Jue", temp: 45, icon: "🌪️", state: "Remolinos" },
            { day: "Vie", temp: 43, icon: "🪨", state: "Polvo" },
            { day: "Sáb", temp: 46, icon: "☄️", state: "Lluvia meteoros" },
            { day: "Dom", temp: 45, icon: "🦗", state: "Zumbidos" }
        ]
    }
];
