/**
 * data.js
 * 
 * Este archivo contiene la "base de datos" simulada de nuestra aplicación.
 * Es un array de objetos, donde cada objeto representa un planeta (localidad).
 */

const PLANETAS = [
    {
        id: "tatooine",
        nombre: "Tatooine",
        icono: `<img src="assets/imagenes/tatooine.png" alt="Tatooine" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        descripcion: "Dos soles y arena interminable.",
        humor_clima: "Ideal si te gusta el bronceado extremo instantáneo. La probabilidad de sudar es del 110%.",
        consejo_supervivencia: "Si ves gente caminando en fila india, escóndete. Son Tusken Raiders.",
        estado: "Soleado",
        temperatura: 38,
        humedad: 12,
        viento: "35 km/h",
        semanal: [
            { dia: "Lun", temperatura: 39, icono: "🌩️", estado: "Tormenta arena" },
            { dia: "Mar", temperatura: 37, icono: "☀️", estado: "Soleado" },
            { dia: "Mié", temperatura: 36, icono: "🔥", estado: "Calor intenso" },
            { dia: "Jue", temperatura: 38, icono: "💨", estado: "Dunas móviles" },
            { dia: "Vie", temperatura: 40, icono: "☢️", estado: "Alta radiación" },
            { dia: "Sáb", temperatura: 39, icono: "🌅", estado: "Amanecer brillante" },
            { dia: "Dom", temperatura: 37, icono: "🌬️", estado: "Viento cálido" }
        ]
    },
    {
        id: "hoth",
        nombre: "Hoth",
        descripcion: "Viento helado y superficies congeladas.",
        humor_clima: "El lugar perfecto para mantener tu bebida fría... y congelar tus pestañas.",
        consejo_supervivencia: "¿Tienes frío? Duerme dentro de un Tauntaun. Huele mal, pero salva vidas.",
        estado: "Nevando",
        temperatura: -22,
        icono: `<img src="assets/imagenes/hoth.png" alt="Hoth" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 78,
        viento: "80 km/h",
        semanal: [
            { dia: "Lun", temperatura: -25, icono: "🌨️", estado: "Ventisca" },
            { dia: "Mar", temperatura: -20, icono: "❄️", estado: "Nieve ligera" },
            { dia: "Mié", temperatura: -28, icono: "🥶", estado: "Frío extremo" },
            { dia: "Jue", temperatura: -22, icono: "🌫️", estado: "Niebla helada" },
            { dia: "Vie", temperatura: -18, icono: "⛅", estado: "Nublado" },
            { dia: "Sáb", temperatura: -24, icono: "🎐", estado: "Viento fuerte" },
            { dia: "Dom", temperatura: -30, icono: "🧊", estado: "Congelación" }
        ]
    },
    {
        id: "endor",
        nombre: "Endor",
        descripcion: "Bosques densos y clima templado.",
        humor_clima: "Húmedo y lleno de pelusas. Cuidado con tropezar con trampas de troncos.",
        consejo_supervivencia: "No subestimes a los osos de peluche con lanzas. Son carnívoros.",
        estado: "Nublado",
        temperatura: 18,
        icono: `<img src="assets/imagenes/endor.png" alt="Endor" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 60,
        viento: "12 km/h",
        semanal: [
            { dia: "Lun", temperatura: 19, icono: "🌥️", estado: "Parcialmente nublado" },
            { dia: "Mar", temperatura: 17, icono: "🌧️", estado: "Llovizna" },
            { dia: "Mié", temperatura: 20, icono: "🌤️", estado: "Soleado" },
            { dia: "Jue", temperatura: 18, icono: "🌲", estado: "Fresco" },
            { dia: "Vie", temperatura: 16, icono: "🌫️", estado: "Niebla matinal" },
            { dia: "Sáb", temperatura: 21, icono: "☀️", estado: "Despejado" },
            { dia: "Dom", temperatura: 19, icono: "🍃", estado: "Brisa suave" }
        ]
    },
    {
        id: "mustafar",
        nombre: "Mustafar",
        descripcion: "Ríos de lava y calor extremo.",
        humor_clima: "Trae malvaviscos. En serio, el suelo es literalmente una estufa.",
        consejo_supervivencia: "Ten el terreno alto (High Ground). Créeme, es importante aquí.",
        estado: "Volcánico",
        temperatura: 120,
        icono: `<img src="assets/imagenes/mustafar.png" alt="Mustafar" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 0,
        viento: "5 km/h",
        semanal: [
            { dia: "Lun", temperatura: 125, icono: "🔥", estado: "Erupción" },
            { dia: "Mar", temperatura: 118, icono: "🌋", estado: "Lava activa" },
            { dia: "Mié", temperatura: 130, icono: "🌫️", estado: "Ceniza" },
            { dia: "Jue", temperatura: 122, icono: "🔥", estado: "Calor extremo" },
            { dia: "Vie", temperatura: 115, icono: "🌑", estado: "Humo denso" },
            { dia: "Sáb", temperatura: 119, icono: "🌡️", estado: "Sofocante" },
            { dia: "Dom", temperatura: 121, icono: "💥", estado: "Explosiones" }
        ]
    },
    {
        id: "bespin",
        nombre: "Bespin",
        descripcion: "Ciudad de las Nubes.",
        humor_clima: "Hermosas vistas, cero suelo firme. No se te ocurra mirar abajo.",
        consejo_supervivencia: "Si un viejo amigo te invita a cenar, verifica que no haya Siths en el comedor.",
        estado: "Ventoso",
        temperatura: 15,
        icono: `<img src="assets/imagenes/bespin.png" alt="Bespin" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 80,
        viento: "45 km/h",
        semanal: [
            { dia: "Lun", temperatura: 14, icono: "🌫️", estado: "Niebla" },
            { dia: "Mar", temperatura: 16, icono: "🌥️", estado: "Nublado" },
            { dia: "Mié", temperatura: 13, icono: "💨", estado: "Viento fuerte" },
            { dia: "Jue", temperatura: 15, icono: "☁️", estado: "Cielo cubierto" },
            { dia: "Vie", temperatura: 17, icono: "🌤️", estado: "Claros" },
            { dia: "Sáb", temperatura: 14, icono: "⛈️", estado: "Tormenta eléctrica" },
            { dia: "Dom", temperatura: 15, icono: "🌬️", estado: "Brisas altas" }
        ]
    },
    {
        id: "dagobah",
        nombre: "Dagobah",
        descripcion: "Pantanos y misterio.",
        humor_clima: "100% de probabilidad de mojarte los calcetines. Huele a sopa vieja.",
        consejo_supervivencia: "La fuerza es intensa aquí, pero también los mosquitos gigantes.",
        estado: "Lluvioso",
        temperatura: 28,
        icono: `<img src="assets/imagenes/dagobah.png" alt="Dagobah" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 98,
        viento: "2 km/h",
        semanal: [
            { dia: "Lun", temperatura: 29, icono: "🌧️", estado: "Lluvia intensa" },
            { dia: "Mar", temperatura: 28, icono: "🌫️", estado: "Humedad alta" },
            { dia: "Mié", temperatura: 27, icono: "⛈️", estado: "Tormenta" },
            { dia: "Jue", temperatura: 28, icono: "🌿", estado: "Bochornoso" },
            { dia: "Vie", temperatura: 29, icono: "🌧️", estado: "Llovizna" },
            { dia: "Sáb", temperatura: 30, icono: "⛅", estado: "Vapor" },
            { dia: "Dom", temperatura: 28, icono: "☔", estado: "Aguacero" }
        ]
    },
    {
        id: "naboo",
        nombre: "Naboo",
        descripcion: "Praderas verdes y lagos.",
        humor_clima: "Demasiado perfecto. Seguramente hay algo escondido bajo el agua.",
        consejo_supervivencia: "Soporta a los Gungans con paciencia. Son molestos, pero tienen escudos.",
        estado: "Agradable",
        temperatura: 24,
        icono: `<img src="assets/imagenes/naboo.png" alt="Naboo" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 45,
        viento: "10 km/h",
        semanal: [
            { dia: "Lun", temperatura: 25, icono: "☀️", estado: "Soleado" },
            { dia: "Mar", temperatura: 23, icono: "🌤️", estado: "Parcialmente nublado" },
            { dia: "Mié", temperatura: 26, icono: "🌼", estado: "Primaveral" },
            { dia: "Jue", temperatura: 24, icono: "🦋", estado: "Brisa suave" },
            { dia: "Vie", temperatura: 22, icono: "🌧️", estado: "Lluvia ligera" },
            { dia: "Sáb", temperatura: 25, icono: "🌈", estado: "Arcoíris" },
            { dia: "Dom", temperatura: 24, icono: "☀️", estado: "Despejado" }
        ]
    },
    {
        id: "coruscant",
        nombre: "Coruscant",
        descripcion: "La ciudad que nunca duerme.",
        humor_clima: "Clima controlado artificialmente. Si llueve, es porque el alcalde está triste.",
        consejo_supervivencia: "No compres Death Sticks. Ve a casa y replantea tu vida.",
        estado: "Artificial",
        temperatura: 20,
        icono: `<img src="assets/imagenes/coruscant.png" alt="Coruscant" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 50,
        viento: "15 km/h",
        semanal: [
            { dia: "Lun", temperatura: 21, icono: "🚦", estado: "Tráfico" },
            { dia: "Mar", temperatura: 20, icono: "🌃", estado: "Noche clara" },
            { dia: "Mié", temperatura: 19, icono: "🏭", estado: "Smog ligero" },
            { dia: "Jue", temperatura: 22, icono: "💡", estado: "Luces de neón" },
            { dia: "Vie", temperatura: 20, icono: "🌧️", estado: "Lluvia ácida" },
            { dia: "Sáb", temperatura: 23, icono: "🌤️", estado: "Controlado" },
            { dia: "Dom", temperatura: 21, icono: "🏙️", estado: "Urbano" }
        ]
    },
    {
        id: "kamino",
        nombre: "Kamino",
        descripcion: "Océanos infinitos y clonación.",
        humor_clima: "¿Te gusta el agua? Bien, porque no hay nada más. Trae paraguas.",
        consejo_supervivencia: "Todos se parecen aquí. Asegúrate de hablar con el clon correcto.",
        estado: "Tormentoso",
        temperatura: 18,
        icono: `<img src="assets/imagenes/kamino.png" alt="Kamino" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 100,
        viento: "60 km/h",
        semanal: [
            { dia: "Lun", temperatura: 17, icono: "⛈️", estado: "Tormenta severa" },
            { dia: "Mar", temperatura: 18, icono: "🌧️", estado: "Lluvia torrencial" },
            { dia: "Mié", temperatura: 16, icono: "🌊", estado: "Marea alta" },
            { dia: "Jue", temperatura: 18, icono: "🌩️", estado: "Rayos" },
            { dia: "Vie", temperatura: 17, icono: "☔", estado: "Lluvia constante" },
            { dia: "Sáb", temperatura: 19, icono: "🌫️", estado: "Niebla marina" },
            { dia: "Dom", temperatura: 18, icono: "⛈️", estado: "Temporal" }
        ]
    },
    {
        id: "geonosis",
        nombre: "Geonosis",
        descripcion: "Roca roja y colmenas.",
        humor_clima: "Polvo rojo en tu ropa para siempre. Garantizado.",
        consejo_supervivencia: "Los locales hablan raro y fabrican robots. No confíes en ellos.",
        estado: "Árido",
        temperatura: 45,
        icono: `<img src="assets/imagenes/geonosis.png" alt="Geonosis" class="img-fluid rounded-3" style="width: 100%; height: 100%; object-fit: cover;">`,
        humedad: 5,
        viento: "20 km/h",
        semanal: [
            { dia: "Lun", temperatura: 46, icono: "☀️", estado: "Sol abrasador" },
            { dia: "Mar", temperatura: 44, icono: "🏜️", estado: "Seco" },
            { dia: "Mié", temperatura: 47, icono: "🔥", estado: "Ola de calor" },
            { dia: "Jue", temperatura: 45, icono: "🌪️", estado: "Remolinos" },
            { dia: "Vie", temperatura: 43, icono: "🪨", estado: "Polvo" },
            { dia: "Sáb", temperatura: 46, icono: "☄️", estado: "Lluvia meteoros" },
            { dia: "Dom", temperatura: 45, icono: "🦗", estado: "Zumbidos" }
        ]
    }
];
