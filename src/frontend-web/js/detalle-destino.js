// Función para cargar y mostrar los datos del destino
async function loadDestinationDetails() {
  // Obtener el ID del destino de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const destinoId = urlParams.get('id');

  if (!destinoId) {
    console.error('No se proporcionó un ID de destino');
    return;
  }

  try {
    // Cargar los datos del destino
    const response = await fetch('../../db/destinos.json');
    const data = await response.json();
    const destinos = data.destinos; // Obtener el array de destinos del objeto
    const destino = destinos.find(d => d.id === destinoId);

    if (!destino) {
      console.error('Destino no encontrado');
      return;
    }

    // Actualizar el título de la página
    document.title = `${destino.nombre} - vIAjeros`;

    // Actualizar los elementos del DOM
    let direccion = destino.ubicacion.direccion.split(', ');
    let ubicacion = `${direccion[direccion.length - 2]}, ${direccion[direccion.length - 1]}`;
    // si la primera palabra de la ubicación es un número, quitarla
    const primeraPalabra = ubicacion.split(' ')[0];
    if (!isNaN(Number(primeraPalabra))) {
      ubicacion = ubicacion.slice(primeraPalabra.length + 1);
    }
    document.getElementById('destino-titulo').textContent = destino.nombre;
    document.getElementById('destino-ubicacion').textContent = ubicacion;
    document.getElementById('destino-precio').textContent = formatPrice(destino.precio);
    document.getElementById('destino-valoracion').textContent = destino.valoracion;
    document.getElementById('destino-opiniones').textContent = `(${destino.opiniones} opiniones)`;

    // Actualizar la descripción
    document.getElementById('destino-descripcion').innerHTML = `
      <p>${destino.descripcion}</p>
    `;

    // Actualizar las actividades
    const actividadesHTML = destino.actividades.map(activity => `
      <div class="activity-card">
        <div class="activity-image" style="background-color: #ddd;">
          <i class="${activity.icono}"></i>
        </div>
        <div class="activity-content">
          <h3>${activity.nombre}</h3>
          <p>${activity.descripcion}</p>
        </div>
      </div>
    `).join('');
    document.getElementById('destino-actividades').innerHTML = actividadesHTML;

    // Actualizar los comentarios
    const comentariosHTML = destino.comentarios.map(comentario => `
      <div class="review">
        <p><strong>${comentario.autor}:</strong> "${comentario.contenido}"</p>
        <span class="review-date">${comentario.fecha}</span>
      </div>
    `).join('');
    document.getElementById('destino-comentarios').innerHTML = comentariosHTML;

    // Actualizar la ubicación
    document.querySelector('.location-details').innerHTML = `
    <p><strong>Dirección:</strong> ${destino.ubicacion.direccion}</p>
    <p><strong>Horario:</strong> ${destino.ubicacion.horario.dias} de ${destino.ubicacion.horario.apertura} a ${destino.ubicacion.horario.cierre}</p>
    `;
    
    // Inicializar el mapa si hay coordenadas
    if (destino.mapa) {
      initializeMap(destino.mapa);
    }

  } catch (error) {
    console.error('Error al cargar los datos del destino:', error);
  }
}

// Función para formatear precios
function formatPrice(price) {
  return `${price} €`;
}

// Función para obtener el icono según el tipo de actividad
function getIconByType(type) {
  switch (type.toLowerCase()) {
    case 'visita guiada':
      return 'fas fa-church';
    case 'subida':
      return 'fas fa-binoculars';
    case 'experiencia':
      return 'fas fa-star';
    default:
      return 'fas fa-info-circle';
  }
}

// Función para inicializar el mapa
function initializeMap(mapa) {
  const mapContainer = document.getElementById('destino-ubicacion-map');
  if (!mapContainer) {
    console.error('No se encontró el contenedor del mapa');
    return;
  }

  mapContainer.innerHTML = `
    <iframe
      src="${mapa}"
      width="1100" height="200" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  `;
}

// Función para inicializar las pestañas
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Quitar la clase "active" de todos los botones y contenidos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Añadir la clase "active" al botón clickeado y su contenido correspondiente
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);

      // Mostrar la sección correspondiente
      targetContent.classList.add('active');

      // Desplazar la vista hacia la sección activa
      targetContent.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // Cargar los datos del destino
  loadDestinationDetails();
  
  // Inicializar las pestañas
  initializeTabs();
});
