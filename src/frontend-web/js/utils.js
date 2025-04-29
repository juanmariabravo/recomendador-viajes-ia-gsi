// Función para cargar datos del JSON
async function loadDestinosData() {
  try {
    const response = await fetch('../db/destinos.json');
    if (!response.ok) {
      throw new Error('Error al cargar los datos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Función para obtener un destino por ID
function getDestinoById(destinos, id) {
  return destinos.find(destino => destino.id === id);
}

// Función para formatear el precio
function formatPrice(price) {
  return `€${price.toLocaleString()}`;
}

// Función para obtener el ícono según el tipo
function getIconByType(type) {
  const icons = {
    'playa': 'fas fa-water',
    'montaña': 'fas fa-mountain',
    'monumento': 'fas fa-church',
    'ciudad': 'fas fa-city',
    'rio': 'fas fa-water',
    'naturaleza': 'fas fa-tree'
  };
  return icons[type] || 'fas fa-map-marker-alt';
}

