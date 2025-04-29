async function loadAndRenderDestinations() {
    try {
      // Cargar datos del JSON
      //console.log('Iniciando carga de destinos...');
      const response = await fetch('../../db/destinos.json');
      const data = await response.json();
  
      // Referencia al contenedor de las cards
      const cardsContainer = document.querySelector('.destinations-grid');
  
      // Función para crear una card de destino
      function createDestinationCard(destino) {
        const card = document.createElement('div');
        card.className = 'destination-card';
        
        // Crear la imagen con manejo de errores
        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-image';
        imgDiv.style.backgroundSize = 'cover';
        imgDiv.style.backgroundPosition = 'center';
        imgDiv.style.backgroundImage = `url('${destino.imagenPrincipal}')`;
        
        // Agregar un manejo de error para la imagen
        const img = new Image();
        img.src = destino.imagenPrincipal;
        img.onload = () => {
          // La imagen se cargó correctamente
          //console.log('Imagen cargada correctamente:', destino.nombre);
        };
        img.onerror = () => {
          // Si la imagen falla, usar una imagen por defecto
          imgDiv.style.backgroundImage = 'url("ruta/a/una/imagen/por/defecto.jpg")';
          //console.log('Error al cargar la imagen:', destino.nombre);
        };
        
        // Crear el contenido
        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';
        contentDiv.innerHTML = `
          <h3 class="card-title">${destino.nombre}</h3>
          <p class="card-price">${formatPrice(destino.precio)}</p>
          <span class="card-tag"><i class="${getIconByType(destino.tipo)}"></i> ${destino.tipo.charAt(0).toUpperCase() + destino.tipo.slice(1)}</span>
          <div>
            <button class="button-secondary" onclick="window.location.href='detalle-destino.html?id=${destino.id}'">Ver detalles</button>
          </div>
        `;
        
        // Combinar todo
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        
        return card;
      }
  
      // Función para renderizar las cards
      function renderCards() {
        //console.log('Renderizando cards...');
        cardsContainer.innerHTML = '';
        data.destinos.forEach(destino => {
          const card = createDestinationCard(destino);
          //console.log('Card creada para:', destino.nombre);
          cardsContainer.appendChild(card);
        });
        //console.log('Cards renderizadas correctamente');
      }
  
      // Inicializar
      renderCards();
    } catch (error) {
      console.error('Error al cargar los destinos:', error);
    }
  }