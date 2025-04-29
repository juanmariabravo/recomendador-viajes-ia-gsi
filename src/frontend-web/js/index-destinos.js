async function loadAndRenderPopularDestinations() {
  try {
    // Cargar datos del JSON
    const response = await fetch('../../db/destinos.json');
    const data = await response.json();
    
    // Seleccionar los 9 primeros destinos
    const popularDestinos = data.destinos.slice(0, 9);
    
    // Referencia al contenedor de las cards
    const cardsContainer = document.querySelector('.popular-destinations-grid');
    
    // Función para crear una card de destino
    function createDestinationCard(destino) {
      const card = document.createElement('div');
      card.className = 'popular-destination-card';
      
      // Crear la imagen con manejo de errores
      const imgDiv = document.createElement('div');
      imgDiv.className = 'card-image';
      imgDiv.style.backgroundSize = 'cover';
      imgDiv.style.backgroundPosition = 'center';
      imgDiv.style.backgroundImage = `url('${destino.imagenPrincipal}')`;
      
      // Crear el contenido
      const contentDiv = document.createElement('div');
      contentDiv.className = 'card-content';
      contentDiv.innerHTML = `
        <h3 class="card-title">${destino.nombre}</h3>
        <p class="card-price">${formatPrice(destino.precio)}</p>
        <span class="card-tag"><i class="${getIconByType(destino.tipo)}"></i> ${destino.tipo.charAt(0).toUpperCase() + destino.tipo.slice(1)}</span>
        <div>
          <button class="button-secondary" onclick="window.location.href='destinos.html'">Ver más</button>
        </div>
      `;
      
      // Combinar todo
      card.appendChild(imgDiv);
      card.appendChild(contentDiv);
      
      return card;
    }
    
    // Función para renderizar las cards
    function renderCards() {
      cardsContainer.innerHTML = '';
      popularDestinos.forEach(destino => {
        const card = createDestinationCard(destino);
        cardsContainer.appendChild(card);
      });
    }
    
    // Inicializar
    renderCards();
  } catch (error) {
    console.error('Error al cargar los destinos:', error);
  }
}

// Llamar la función cuando la página cargue
document.addEventListener('DOMContentLoaded', loadAndRenderPopularDestinations);