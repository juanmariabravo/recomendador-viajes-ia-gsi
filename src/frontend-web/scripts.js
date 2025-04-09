
window.botpress.on("webchat:ready", () => {
    window.botpress.open();
  });
  window.botpress.init({
    "botId": "9f472344-9c0d-40be-9fff-c3339d67a4c1",
    "configuration": {
      "website": {},
      "email": {},
      "phone": {},
      "termsOfService": {},
      "privacyPolicy": {},
      "color": "#FF7F50",
      "variant": "solid",
      "themeMode": "light",
      "fontFamily": "inter",
      "radius": 1
    },
    "clientId": "42883c3e-397b-4891-9f21-f88c10949060",
    "selector": "#webchat"
    });
    // Mostrar/Ocultar Chatbot
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    
    chatButton.addEventListener('click', () => {
      chatWindow.style.display = 'flex';
    });
    
    chatClose.addEventListener('click', () => {
      chatWindow.style.display = 'none';
    });
    
    // Interacción con opciones de chat
    const chatOptions = document.querySelectorAll('.chat-option');
    
    chatOptions.forEach(option => {
      option.addEventListener('click', () => {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = option.textContent;
        
        document.querySelector('.chat-messages').appendChild(userMessage);
        
        // Simular respuesta del bot
        setTimeout(() => {
          const botResponse = document.createElement('div');
          botResponse.classList.add('message', 'bot-message');
          botResponse.textContent = '¡Excelente elección! Te mostraré algunas opciones basadas en tu selección.';
          
          document.querySelector('.chat-messages').appendChild(botResponse);
          
          // Scroll to bottom
          const chatMessages = document.querySelector('.chat-messages');
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Scroll to bottom
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
      });
    });
    
    // Enviar mensaje con Enter
    const chatInput = document.querySelector('.chat-input input');
    
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = chatInput.value;
        
        document.querySelector('.chat-messages').appendChild(userMessage);
        
        // Limpiar input
        chatInput.value = '';
        
        // Simular respuesta del bot
        setTimeout(() => {
          const botResponse = document.createElement('div');
          botResponse.classList.add('message', 'bot-message');
          botResponse.textContent = 'Gracias por tu mensaje. ¿Te gustaría ver algunas recomendaciones personalizadas?';
          
          document.querySelector('.chat-messages').appendChild(botResponse);
          
          // Scroll to bottom
          const chatMessages = document.querySelector('.chat-messages');
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Scroll to bottom
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
    
    // Botón de enviar mensaje
    const sendButton = document.querySelector('.chat-input button');
    
    sendButton.addEventListener('click', () => {
      if (chatInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = chatInput.value;
        
        document.querySelector('.chat-messages').appendChild(userMessage);
        
        // Limpiar input
        chatInput.value = '';
        
        // Simular respuesta del bot
        setTimeout(() => {
          const botResponse = document.createElement('div');
          botResponse.classList.add('message', 'bot-message');
          botResponse.textContent = 'Entendido. Voy a buscar algunas opciones que se ajusten a tus preferencias.';
          
          document.querySelector('.chat-messages').appendChild(botResponse);
          
          // Scroll to bottom
          const chatMessages = document.querySelector('.chat-messages');
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Scroll to bottom
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
    
    // Toggle de filtros
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Quitar active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Añadir active al botón clickeado
        button.classList.add('active');
      });
    });
    
    // Toggle de detalles de sección
    const detailSectionHeaders = document.querySelectorAll('.detail-section h3');
    
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