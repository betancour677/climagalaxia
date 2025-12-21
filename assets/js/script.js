// script.js - Lógica simplificada usando la URL

/**
 * Esperamos a que los elementos HTML estén listos
 */
document.addEventListener('DOMContentLoaded', () => {

  // Identificamos en qué página estamos
  const cardsContainer = document.getElementById('cards-container'); // Página de Inicio
  const planetNameElement = document.getElementById('planetName');   // Página de Detalle

  if (cardsContainer) {
    renderPlanetCards();
  }

  if (planetNameElement) {
    loadPlanetDetails();
  }
});

/**
 * PÁGINA DE INICIO: Dibuja las tarjetas (DISEÑO LIGHT & IMAGEN GRANDE)
 */
function renderPlanetCards() {
  const container = document.getElementById('cards-container');

  if (typeof PLANETS === 'undefined') {
    container.innerHTML = "<p>Error: No se encontraron datos.</p>";
    return;
  }

  PLANETS.forEach(planet => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
            <article class="card h-100 border-0 shadow-sm overflow-hidden hover-effect" style="border-radius: 20px; background: #fff;">
                <!-- Contenedor de Imagen -->
                <div class="card-img-top position-relative" style="height: 260px; overflow: hidden; background: #000;">
                    ${planet.icon}
                </div>
                
                <div class="card-body text-center p-4">
                    <h5 class="card-title fw-bold text-dark mb-1" style="font-size: 1.4rem;">${planet.name}</h5>
                    <p class="text-secondary small text-uppercase tracking-wide mb-3">${planet.state}</p>
                    
                    <p class="card-text text-muted mb-4 small">${planet.desc}</p>
                    
                    <div class="d-flex justify-content-between align-items-center border-top pt-3">
                        <span class="fs-3 fw-bold text-dark">${planet.temp}°C</span>
                        <a href="detalle.html?id=${planet.id}" class="btn btn-dark rounded-pill px-4 py-1 small">
                            Ver
                        </a>
                    </div>
                </div>
            </article>
        `;

    container.appendChild(col);
  });
}

/**
 * PÁGINA DE DETALLE: Carga la info
 */
function loadPlanetDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const planetId = urlParams.get('id');
  const planetData = PLANETS.find(p => p.id === planetId);

  if (!planetData) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('planetName').textContent = planetData.name;
  document.getElementById('planetIcon').innerHTML = planetData.icon; // Usamos innerHTML para renderizar la IMG
  document.getElementById('planetTemp').textContent = `${planetData.temp}°C`;
  document.getElementById('planetState').textContent = planetData.state;

  // Inject Humorous Content
  document.getElementById('planetHumor').textContent = planetData.weather_humor || "Sin datos adicionales.";
  document.getElementById('survivalTip').textContent = planetData.survival_tip || "Mantente alerta.";

  document.getElementById('planetHumidity').textContent = `${planetData.humidity}%`;
  document.getElementById('planetWind').textContent = planetData.wind;

  const forecastContainer = document.getElementById('forecast');

  if (planetData.weekly) {
    planetData.weekly.forEach(dayInfo => {
      const dayCol = document.createElement('div');
      // Ancho responsivo para las tarjetas semanales
      dayCol.className = 'col-6 col-sm-4 col-md-3 col-lg-2';

      dayCol.innerHTML = `
                <div class="card border-0 shadow-sm text-center p-3 h-100 rounded-4">
                    <p class="mb-1 text-muted fw-bold text-uppercase small">${dayInfo.day}</p>
                    <div class="fs-2 my-2">${dayInfo.icon}</div>
                    <p class="mb-0 fw-bold fs-5">${dayInfo.temp}°C</p>
                    <small class="text-secondary" style="font-size: 0.75rem;">${dayInfo.state}</small>
                </div>
            `;
      forecastContainer.appendChild(dayCol);
    });
  }
}
