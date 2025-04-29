// Función para inicializar el componente de destinos
async function initDestinations() {
  try {
    // Cargar y renderizar los destinos
    await loadAndRenderDestinations();

    // Variables locales al componente
    let cards = [];
    let activeFilters = {
      tipo: 'Todos',
      presupuesto: null,
      valoracion: null
    };
    let currentPage = 1;
    const cardsPerPage = 6;
    let filteredCards = [];

    // Referencias a elementos del DOM
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const filterTags = document.querySelectorAll('.filter-tag');
    const applyButton = document.querySelector('.apply-button');
    const paginationContainer = document.querySelector('.pagination');
    const cardsContainer = document.querySelector('.destinations-grid');

    // Inicializar cards
    cards = Array.from(document.querySelectorAll('.destination-card'));
    filteredCards = [...cards];

    // Verificar si hay cards
    //console.log('Número total de cards:', cards.length);
    //console.log('Número de cards filtradas inicialmente:', filteredCards.length);

    // Animación de aparición de tarjetas
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100);
    });

    // Eventos
    searchButton.addEventListener('click', applyFilters);
    searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') applyFilters();
    });
    applyButton.addEventListener('click', applyFilters);

    // Botón para limpiar filtros
    const clearFiltersButton = document.querySelector('.clear-filters-button');
    clearFiltersButton.addEventListener('click', () => {
      // Restablecer filtros
      activeFilters.tipo = 'Todos';
      activeFilters.presupuesto = null;
      activeFilters.valoracion = null;

      // Limpiar búsqueda
      searchInput.value = '';

      // Quitar la clase active de todos los filtros
      filterTags.forEach(tag => tag.classList.remove('active'));

      // Aplicar los filtros limpios
      applyFilters();
    });

    // Manejar clic en filtros
    filterTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const group = tag.closest('.filter-group');
        const allGroupTags = group.querySelectorAll('.filter-tag');
        
        // Quitar clase active de todos los tags del grupo
        allGroupTags.forEach(t => t.classList.remove('active'));
        
        // Añadir clase active al tag clickeado
        tag.classList.add('active');
        
        // Actualizar filtros activos
        updateActiveFilters(tag, group);
        
        // Aplicar filtros
        applyFilters();
      });
    });

    // Función para actualizar filtros activos
    function updateActiveFilters(tag, group) {
      const labelText = group.querySelector('label').textContent;
      
      if (labelText.includes('Tipo')) {
        activeFilters.tipo = tag.textContent.trim();
      } else if (labelText.includes('Presupuesto')) {
        activeFilters.presupuesto = tag.textContent.trim();
      } else if (labelText.includes('Valoración')) {
        activeFilters.valoracion = tag.textContent.trim();
      }
    }

    // Función principal para aplicar filtros
    function applyFilters() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      
      filteredCards = cards.filter(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const priceText = card.querySelector('.card-price').textContent;
        const price = parseInt(priceText.replace(/\D/g, ''));
        const tagText = card.querySelector('.card-tag').textContent.toLowerCase();
        
        // Coincidencia con búsqueda
        const matchesSearch = title.includes(searchTerm);
        
        // Coincidencia con tipo
        const matchesType = activeFilters.tipo === 'Todos' || 
                           tagText.includes(activeFilters.tipo.toLowerCase());
        
        // Coincidencia con presupuesto
        let matchesBudget = true;
        if (activeFilters.presupuesto) {
          if (activeFilters.presupuesto.includes('<')) {
            matchesBudget = price < 1000;
          } else if (activeFilters.presupuesto.includes('1000€ - 2000€')) {
            matchesBudget = price >= 1000 && price <= 2000;
          } else if (activeFilters.presupuesto.includes('>')) {
            matchesBudget = price > 2000;
          }
        }
        
        // Coincidencia con valoración
        const matchesRating = true; // Placeholder para futura implementación
        
        return matchesSearch && matchesType && matchesBudget && matchesRating;
      });

      // Reiniciar paginación y renderizar
      currentPage = 1;
      renderCards();
      renderPagination();
    }

    // Función para renderizar tarjetas visibles
    function renderCards() {
      cards.forEach(card => card.style.display = 'none');
      
      const start = (currentPage - 1) * cardsPerPage;
      const end = start + cardsPerPage;
      
      filteredCards.slice(start, end).forEach(card => {
        card.style.display = 'block';
      });
    }

    // Función para renderizar controles de paginación
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

      // Números de página
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

    // Renderizado inicial
    applyFilters();
  } catch (error) {
    console.error('Error al cargar los destinos:', error);
  }
}

// Inicializar el componente
document.addEventListener('DOMContentLoaded', initDestinations);