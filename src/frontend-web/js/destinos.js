document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.destination-card'));
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  const filterTags = document.querySelectorAll('.filter-tag');
  const applyButton = document.querySelector('.apply-button');
  const paginationContainer = document.querySelector('.pagination');
  const cardsContainer = document.querySelector('.destinations-grid');

  let activeFilters = {
    tipo: 'Todos',
    presupuesto: null,
    valoracion: null
  };

  let currentPage = 1;
  const cardsPerPage = 6;
  let filteredCards = cards;

  // Manejar el clic en los filtros
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const group = tag.closest('.filter-group');
        const allGroupTags = group.querySelectorAll('.filter-tag');

        // Quitar la clase "active" de todos los filtros del grupo
        allGroupTags.forEach(t => t.classList.remove('active'));

        // Añadir la clase "active" al filtro clickeado
        tag.classList.add('active');

        // Aplicar los filtros
        applyFilters();
    });
});

  // Actualiza clases activas en los filtros
  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const group = tag.closest('.filter-group');
      const allGroupTags = group.querySelectorAll('.filter-tag');
      allGroupTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      if (group.querySelector('label').textContent.includes('Tipo')) {
        activeFilters.tipo = tag.textContent.trim().replace(/^\D*/, '');
      }
      if (group.querySelector('label').textContent.includes('Presupuesto')) {
        activeFilters.presupuesto = tag.textContent.trim();
      }
      if (group.querySelector('label').textContent.includes('Valoración')) {
        activeFilters.valoracion = tag.textContent.trim();
      }

      // Aplicar los filtros
      applyFilters();
    });
  });

  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const group = tag.closest('.filter-group');
      const allGroupTags = group.querySelectorAll('.filter-tag');

      // Quitar la clase "active" de todos los filtros del grupo
      allGroupTags.forEach(t => t.classList.remove('active'));

      // Añadir la clase "active" al filtro clickeado
      tag.classList.add('active');

      // Actualizar el filtro de tipo
      if (group.querySelector('label')?.textContent.includes('Tipo')) {
        activeFilters.tipo = tag.textContent.trim();
        console.log('Filtro de tipo actualizado:', activeFilters.tipo);
      }

      // Aplicar los filtros
      applyFilters();
    });
  });

  
  function applyFiltersAndSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    filteredCards = cards.filter(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const price = parseInt(card.querySelector('.card-price').textContent.replace(/\D/g, ''));
      const tagText = card.querySelector('.card-tag').textContent.toLowerCase();

      // Coincidencia con la búsqueda
      let matchSearch = title.includes(searchTerm);

      // Coincidencia con el filtro de tipo
      // Imprimir el texto del filtro de tipo
      console.log('Filtro de tipo:', activeFilters.tipo);
      // Imprimir el texto de la tarjeta
      console.log('Texto de la tarjeta:', tagText);
      // Comprobar si el filtro de tipo es "Todos" o si el texto de la tarjeta incluye el filtro
      let matchTipo = activeFilters.tipo === 'Todos' || tagText.includes(activeFilters.tipo.toLowerCase());

      // Coincidencia con el filtro de presupuesto
      let matchPresupuesto = true;
      if (activeFilters.presupuesto) {
        if (activeFilters.presupuesto.includes('<')) {
          matchPresupuesto = price < 1000;
        } else if (activeFilters.presupuesto.includes('1000€ - 2000')) {
          matchPresupuesto = price >= 1000 && price <= 2000;
        } else if (activeFilters.presupuesto.includes('>')) {
          matchPresupuesto = price > 2000;
        }
      }

      // Coincidencia con el filtro de valoración (si se implementa en el futuro)
      let matchValoracion = true; // Actualmente no implementado

      // Retornar true si todos los filtros coinciden
      return matchSearch && matchTipo && matchPresupuesto && matchValoracion;
    });

    // Reiniciar la paginación y renderizar las tarjetas filtradas
    currentPage = 1;
    renderCards();
    renderPagination();
  }

  function renderCards() {
    cards.forEach(card => card.style.display = 'none');

    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    filteredCards.slice(start, end).forEach(card => {
      card.style.display = 'block';
    });
  }

  function renderPagination() {
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

    if (totalPages <= 1) return;

    const createButton = (page, content, isActive = false) => {
      const btn = document.createElement('button');
      btn.className = 'pagination-button';
      if (isActive) btn.classList.add('active');
      btn.textContent = content;
      btn.addEventListener('click', () => {
        currentPage = page;
        renderCards();
        renderPagination();
      });
      return btn;
    };

    // Prev
    const prev = document.createElement('button');
    prev.className = 'pagination-button';
    prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prev.disabled = currentPage === 1;
    prev.addEventListener('click', () => {
      currentPage--;
      renderCards();
      renderPagination();
    });
    paginationContainer.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
      paginationContainer.appendChild(createButton(i, i, i === currentPage));
    }

    // Next
    const next = document.createElement('button');
    next.className = 'pagination-button';
    next.innerHTML = '<i class="fas fa-chevron-right"></i>';
    next.disabled = currentPage === totalPages;
    next.addEventListener('click', () => {
      currentPage++;
      renderCards();
      renderPagination();
    });
    paginationContainer.appendChild(next);
  }

  // Eventos
  searchButton.addEventListener('click', applyFiltersAndSearch);
  searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') applyFiltersAndSearch();
  });
  applyButton.addEventListener('click', applyFiltersAndSearch);

  // Inicialización
  applyFiltersAndSearch();
});

document.addEventListener('DOMContentLoaded', function() {
  // Manejar filtros de destinos
  setupDestinationFilters();
  
  // Manejar búsqueda
  setupSearch();
  
  // Manejar paginación
  setupPagination();
});

function setupDestinationFilters() {
  const filterTags = document.querySelectorAll('.filter-tag');
  
  filterTags.forEach(tag => {
    tag.addEventListener('click', function() {
      // Obtener el grupo de filtros
      const filterGroup = this.closest('.filter-group');
      
      // Quitar active de todos los tags en este grupo
      filterGroup.querySelectorAll('.filter-tag').forEach(t => {
        t.classList.remove('active');
      });
      
      // Añadir active al tag clickeado
      this.classList.add('active');
      
      // Aplicar filtros (simulado)
      applyFilters();
    });
  });
}

function setupSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  
  if (searchButton && searchInput) {
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      filterDestinations(searchTerm);
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterDestinations(searchTerm);
      }
    });
  }
}

function setupPagination() {
  const paginationButtons = document.querySelectorAll('.pagination-button');
  
  if (paginationButtons) {
    paginationButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Quitar active de todos los botones
        paginationButtons.forEach(btn => btn.classList.remove('active'));
        
        // Añadir active al botón clickeado
        this.classList.add('active');
        
        // Simular cambio de página
        // Aquí iría el código para cargar diferentes destinos
      });
    });
  }
}

function applyFilters() {
  // Obtener filtros activos
  const typeFilter = document.querySelector('.filter-group:nth-child(1) .filter-tag.active')?.textContent.trim() || 'Todos';
  const priceFilter = document.querySelector('.filter-group:nth-child(2) .filter-tag.active')?.textContent.trim() || null;
  const ratingFilter = document.querySelector('.filter-group:nth-child(3) .filter-tag.active')?.textContent.trim() || null;

  // Filtrar tarjetas
  filteredCards = cards.filter(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const price = parseInt(card.querySelector('.card-price').textContent.replace(/\D/g, ''));
    const tagText = card.querySelector('.card-tag').textContent;

    let matchType = typeFilter === 'Todos' || tagText.includes(typeFilter);
    let matchPrice = true;
    let matchRating = true;

    // Filtrar por precio
    if (priceFilter) {
      if (priceFilter.includes('<')) {
        matchPrice = price < 1000;
      } else if (priceFilter.includes('1000 - 2000')) {
        matchPrice = price >= 1000 && price <= 2000;
      } else if (priceFilter.includes('>')) {
        matchPrice = price > 2000;
      }
    }

    // Filtrar por valoración (si se implementa en el futuro)
    // Aquí podrías añadir lógica basada en un atributo de datos o contenido

    return matchType && matchPrice && matchRating;
  });

  // Actualizar título de resultados
  const resultsTitle = document.querySelector('.section-title');
  if (typeFilter === 'Todos') {
    resultsTitle.textContent = 'Todos los destinos';
  } else {
    resultsTitle.textContent = `Destinos: ${typeFilter}`;
  }

  // Reiniciar la paginación y renderizar las tarjetas filtradas
  currentPage = 1;
  renderCards();
  renderPagination();
}

function filterDestinations(searchTerm) {
  // Obtener todas las tarjetas de destinos
  const destinationCards = document.querySelectorAll('.destination-card');
  
  if (searchTerm === '') {
    // Si la búsqueda está vacía, mostrar todos los destinos
    destinationCards.forEach(card => {
      card.style.display = 'block';
    });
    return;
  }
  
  // Filtrar destinos por término de búsqueda
  let foundResults = false;
  
  destinationCards.forEach(card => {
    const destinationName = card.querySelector('.card-title').textContent.toLowerCase();
    
    if (destinationName.includes(searchTerm)) {
      card.style.display = 'block';
      foundResults = true;
    } else {
      card.style.display = 'none';
    }
  });
  
  // Actualizar título de resultados
  const resultsTitle = document.querySelector('.section-title');
  if (foundResults) {
    resultsTitle.textContent = `Resultados para "${searchTerm}"`;
  } else {
    resultsTitle.textContent = `No hay resultados para "${searchTerm}"`;
  }
}
