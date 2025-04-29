document.addEventListener('DOMContentLoaded', () => {
  const exampleQuestions = document.querySelectorAll('.example-question');
  
  exampleQuestions.forEach(question => {
    question.addEventListener('click', async () => {
      try {
        // Obtener el texto de la pregunta
        const text = question.textContent;
        
        // Copiar al portapapeles
        await navigator.clipboard.writeText(text);
        
        // Añadir clase copiada
        question.classList.add('copied');
        
        // Eliminar la clase después de 1.5 segundos
        setTimeout(() => {
          question.classList.remove('copied');
        }, 1500);
      } catch (err) {
        console.error('Error al copiar:', err);
        alert('Error al copiar el texto. Por favor, inténtalo de nuevo.');
      }
    });
  });
});