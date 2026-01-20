// script.js - Lógica simplificada usando la URL

/**
 * Esperamos a que los elementos HTML estén listos
 */
document.addEventListener('DOMContentLoaded', () => {

  // Identificamos en qué página estamos
  const contenedorTarjetas = document.getElementById('contenedor-tarjetas'); // Página de Inicio
  const elementoNombrePlaneta = document.getElementById('nombrePlaneta');   // Página de Detalle

  if (contenedorTarjetas) {
    renderizarTarjetasPlanetas();
  }

  if (elementoNombrePlaneta) {
    cargarDetallesPlaneta();
  }
});

/**
 * PÁGINA DE INICIO: Dibuja las tarjetas
 */
function renderizarTarjetasPlanetas() {
  const contenedor = document.getElementById('contenedor-tarjetas');

  if (typeof PLANETAS === 'undefined') {
    contenedor.innerHTML = "<p>Error: No se encontraron datos.</p>";
    return;
  }

  PLANETAS.forEach(planeta => {
    const columna = document.createElement('div');
    columna.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4';

    columna.innerHTML = `
            <article class="tarjeta-lugar tarjeta-lugar--hover">
                <!-- Contenedor de Imagen -->
                <div class="tarjeta-lugar__imagen">
                    ${planeta.icono}
                </div>
                
                <div class="tarjeta-lugar__cuerpo">
                    <h5 class="tarjeta-lugar__titulo">${planeta.nombre}</h5>
                    <p class="tarjeta-lugar__estado">${planeta.estado}</p>
                    
                    <p class="tarjeta-lugar__descripcion">${planeta.descripcion}</p>
                    
                    <div class="tarjeta-lugar__pie">
                        <span class="tarjeta-lugar__temperatura">${planeta.temperatura}°C</span>
                        <a href="detalle.html?id=${planeta.id}" class="tarjeta-lugar__boton">
                            Ver
                        </a>
                    </div>
                </div>
            </article>
        `;

    contenedor.appendChild(columna);
  });
}

/**
 * PÁGINA DE DETALLE: Carga la información
 */
function cargarDetallesPlaneta() {
  const parametrosUrl = new URLSearchParams(window.location.search);
  const idPlaneta = parametrosUrl.get('id');
  const datosPlaneta = PLANETAS.find(p => p.id === idPlaneta);

  if (!datosPlaneta) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('nombrePlaneta').textContent = datosPlaneta.nombre;
  document.getElementById('iconoPlaneta').innerHTML = datosPlaneta.icono;
  document.getElementById('temperaturaPlaneta').textContent = `${datosPlaneta.temperatura}°C`;
  document.getElementById('estadoPlaneta').textContent = datosPlaneta.estado;

  // Inyectar contenido humorístico
  document.getElementById('humorPlaneta').textContent = datosPlaneta.humor_clima || "Sin datos adicionales.";
  document.getElementById('consejoSupervivencia').textContent = datosPlaneta.consejo_supervivencia || "Mantente alerta.";

  document.getElementById('humedadPlaneta').textContent = `${datosPlaneta.humedad}%`;
  document.getElementById('vientoPlaneta').textContent = datosPlaneta.viento;

  const contenedorPronostico = document.getElementById('pronostico');

  if (datosPlaneta.semanal) {
    datosPlaneta.semanal.forEach(infoDia => {
      const columnaDia = document.createElement('div');
      // Ancho responsivo para las tarjetas semanales
      columnaDia.className = 'col-6 col-sm-4 col-md-3 col-lg-2 mb-3';

      columnaDia.innerHTML = `
                <div class="tarjeta-pronostico">
                    <p class="tarjeta-pronostico__dia">${infoDia.dia}</p>
                    <div class="tarjeta-pronostico__icono">${infoDia.icono}</div>
                    <p class="tarjeta-pronostico__temperatura">${infoDia.temperatura}°C</p>
                    <small class="tarjeta-pronostico__estado">${infoDia.estado}</small>
                </div>
            `;
      contenedorPronostico.appendChild(columnaDia);
    });
  }
}
