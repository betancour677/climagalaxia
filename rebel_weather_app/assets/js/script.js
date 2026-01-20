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
 * Calcula estadísticas de la semana a partir del pronóstico
 * @param {Array} pronosticoSemanal - Array con datos de cada día
 * @returns {Object} Objeto con todas las estadísticas calculadas
 */
function calcularEstadisticasSemana(pronosticoSemanal) {
  // Validar que hay datos
  if (!pronosticoSemanal || pronosticoSemanal.length === 0) {
    return null;
  }

  // Variables para cálculos
  let temperaturaMinima = pronosticoSemanal[0].temperatura;
  let temperaturaMaxima = pronosticoSemanal[0].temperatura;
  let sumaTemperaturas = 0;
  const conteoClimas = {};

  // Recorrer cada día del pronóstico
  for (let i = 0; i < pronosticoSemanal.length; i++) {
    const dia = pronosticoSemanal[i];
    const temp = dia.temperatura;
    const estado = dia.estado;

    // Calcular mínima
    if (temp < temperaturaMinima) {
      temperaturaMinima = temp;
    }

    // Calcular máxima
    if (temp > temperaturaMaxima) {
      temperaturaMaxima = temp;
    }

    // Sumar para promedio
    sumaTemperaturas += temp;

    // Contar tipos de clima
    if (conteoClimas[estado]) {
      conteoClimas[estado]++;
    } else {
      conteoClimas[estado] = 1;
    }
  }

  // Calcular promedio
  const temperaturaPromedio = Math.round(sumaTemperaturas / pronosticoSemanal.length);

  // Determinar clima predominante
  let climaPredominante = "";
  let maxDias = 0;
  for (const clima in conteoClimas) {
    if (conteoClimas[clima] > maxDias) {
      maxDias = conteoClimas[clima];
      climaPredominante = clima;
    }
  }

  // Generar resumen textual
  let resumen = "";
  if (temperaturaPromedio > 30) {
    resumen = `Semana muy calurosa con temperaturas extremas. Predomina clima ${climaPredominante.toLowerCase()}.`;
  } else if (temperaturaPromedio > 20) {
    resumen = `Semana cálida y agradable. Mayormente ${climaPredominante.toLowerCase()}.`;
  } else if (temperaturaPromedio > 10) {
    resumen = `Semana templada con clima ${climaPredominante.toLowerCase()}.`;
  } else if (temperaturaPromedio > 0) {
    resumen = `Semana fresca. Predomina clima ${climaPredominante.toLowerCase()}.`;
  } else {
    resumen = `Semana muy fría con temperaturas bajo cero. Clima ${climaPredominante.toLowerCase()}.`;
  }

  // Retornar objeto con todas las estadísticas
  return {
    minima: temperaturaMinima,
    maxima: temperaturaMaxima,
    promedio: temperaturaPromedio,
    conteoClimas: conteoClimas,
    climaPredominante: climaPredominante,
    resumen: resumen
  };
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

  // Calcular estadísticas de la semana
  const estadisticas = calcularEstadisticasSemana(datosPlaneta.semanal);

  if (estadisticas) {
    // Mostrar estadísticas de temperatura
    document.getElementById('tempMinima').textContent = `${estadisticas.minima}°C`;
    document.getElementById('tempMaxima').textContent = `${estadisticas.maxima}°C`;
    document.getElementById('tempPromedio').textContent = `${estadisticas.promedio}°C`;

    // Mostrar resumen
    document.getElementById('resumenSemana').textContent = estadisticas.resumen;

    // Mostrar conteo de climas
    const contenedorConteo = document.getElementById('conteoClimas');
    contenedorConteo.innerHTML = ''; // Limpiar contenido previo

    for (const clima in estadisticas.conteoClimas) {
      const cantidad = estadisticas.conteoClimas[clima];
      const elemento = document.createElement('div');
      elemento.className = 'col-6 col-md-4 mb-2';
      elemento.innerHTML = `
        <div class="p-2 bg-white rounded text-center">
          <strong>${cantidad}</strong> día${cantidad !== 1 ? 's' : ''}
          <br>
          <small class="text-secondary">${clima}</small>
        </div>
      `;
      contenedorConteo.appendChild(elemento);
    }
  }

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
