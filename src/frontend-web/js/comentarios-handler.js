document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('review-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const reviewText = document.getElementById('review-text').value;
      const author = 'Usuario Anónimo';
      
      if (!reviewText.trim()) {
        alert('Por favor, escribe un comentario');
        return;
      }
      
      try {
        const comentarios = document.getElementById('destino-comentarios');
        const newComment = `
          <div class="review">
            <p><strong>${author}:</strong> "${reviewText}"</p>
            <span class="review-date">Publicado el ${(new Date()).toLocaleDateString('es-AR', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
          </div>
        `;
        comentarios.insertAdjacentHTML('beforeend', newComment);
        
        form.reset();
        //alert('¡Gracias por tu comentario!');
      } catch (error) {
        console.error('Error al enviar comentario:', error);
        alert('Error al enviar el comentario. Por favor, intenta de nuevo.');
      }
    });
  }
});