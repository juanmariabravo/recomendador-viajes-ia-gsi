document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Botpress
    initializeBotpress();
    
    // Manejar ejemplos de preguntas
    setupExampleQuestions();
  });
  
  function initializeBotpress() {
    window.botpressWebChat.init({
      "botId": "9f472344-9c0d-40be-9fff-c3339d67a4c1",
      "clientId": "42883c3e-397b-4891-9f21-f88c10949060",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v2.3",
      "messagingUrl": "https://messaging.botpress.cloud",
      "stylesheet": "https://cdn.botpress.cloud/webchat/v2.3/standard.css",
      "botName": "Asistente de Viajes",
      "disableAnimations": false,
      "hideWidget": false,
      "useSessionStorage": true,
      "enableConversationDeletion": true,
      "showConversationButton": false,
      "showTimestamp": true,
      "enableTranscriptDownload": false,
      "showCloseButton": false,
      "containerWidth": "100%",
      "layoutWidth": "100%",
      "composerPlaceholder": "Escribe tu mensaje...",
      "enablePersistHistory": true,
      "enableReconnect": true,
      "frontendVersion": "v2.3",
      "theme": "light",
      "themeColor": "#2AABDE"
    });
  }
  
  function setupExampleQuestions() {
    const exampleQuestions = document.querySelectorAll('.example-question');
    
    if (exampleQuestions) {
      exampleQuestions.forEach(question => {
        question.addEventListener('click', function() {
          // Enviar la pregunta predefinida al chatbot
          const questionText = this.textContent.trim();
          window.botpressWebChat.sendEvent({ type: 'message', payload: { text: questionText } });
        });
      });
    }
  }
  
  // Función para el chatbot flotante
  function setupFloatingChatbot() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    
    if (chatButton && chatWindow && chatClose) {
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
      const sendButton = document.querySelector('.chat-input button');
      
      if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' && chatInput.value.trim() !== '') {
            sendChatMessage(chatInput);
          }
        });
      }
      
      // Botón de enviar mensaje
      if (sendButton && chatInput) {
        sendButton.addEventListener('click', () => {
          if (chatInput.value.trim() !== '') {
            sendChatMessage(chatInput);
          }
        });
      }
    }
  }
  
  function sendChatMessage(inputElement) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = inputElement.value;
    
    document.querySelector('.chat-messages').appendChild(userMessage);
    
    // Limpiar input
    const messageText = inputElement.value;
    inputElement.value = '';
    
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
  
  // Inicializar el chatbot flotante si existe en la página
  document.addEventListener('DOMContentLoaded', function() {
    setupFloatingChatbot();
  });