document.addEventListener('DOMContentLoaded', () => {
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
});