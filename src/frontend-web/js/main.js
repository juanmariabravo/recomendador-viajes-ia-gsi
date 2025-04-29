// Funciones compartidas por todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Toggle de filtros
    const filterButtons = document.querySelectorAll('.filter-button');
    
    if (filterButtons) {
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Quitar active de todos los botones
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Añadir active al botón clickeado
          button.classList.add('active');
        });
      });
    }
    
    // Toggle de detalles de sección
    const detailSectionHeaders = document.querySelectorAll('.detail-section h3');
    
    if (detailSectionHeaders) {
      detailSectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
          const content = header.nextElementSibling;
          const icon = header.querySelector('i');
          
          if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
          } else {
            content.style.display = 'none';
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
          }
        });
      });
    }
    
    // Manejo de tabs en la página de detalle de destino
    const tabButtons = document.querySelectorAll('.tab-button');
    
    if (tabButtons) {
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Quitar active de todos los botones y contenidos
          document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
          
          // Activar el botón clickeado
          button.classList.add('active');
          
          // Activar el contenido correspondiente
          const tabId = button.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
        });
      });
    }
    
    // Manejo de filtros en la página de destinos
    const filterTags = document.querySelectorAll('.filter-tag');
    
    if (filterTags) {
      filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
          // Obtener el grupo de filtros al que pertenece este tag
          const filterGroup = tag.closest('.filter-group');
          
          // Quitar active de todos los tags en este grupo
          filterGroup.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
          
          // Añadir active al tag clickeado
          tag.classList.add('active');
        });
      });
    }
  });