function waitForBotpress(callback) {
  const check = () => {
    if (window.botpress && typeof window.botpress.sendEvent === "function") {
      callback();
    } else {
      setTimeout(check, 50);
    }
  };
  check();
}

document.addEventListener("DOMContentLoaded", function () {
  window.botpress.on("webchat:ready", () => {
    // Configura las preguntas predefinidas
    setupExampleQuestions();

    // Envía un mensaje inicial si es necesario
    sendInitialMessage();
  });
});

// Configura las preguntas de ejemplo para enviarlas al chatbot
function setupExampleQuestions() {
  const exampleQuestions = document.querySelectorAll('.example-question');

  exampleQuestions.forEach((question) => {
    question.addEventListener('click', function () {
      const questionText = this.textContent.trim();

      // Envía el mensaje al chatbot
      if (window.botpress && typeof window.botpress.sendEvent === 'function') {
        window.botpress.sendEvent({
          type: 'message',
          channel: 'web',
          payload: {
            type: 'text',
            text: questionText
          }
        });
      } else {
        console.warn("Botpress aún no está listo");
      }
    });
  });
}

// Envía un mensaje oculto de bienvenida o trigger
function sendInitialMessage() {
  const initMessage = `
Actúa como un asistente turístico amigable y experto. Tu tarea es ayudar al usuario a encontrar un destino turístico ideal basado en sus preferencias y necesidades.

Al comenzar la conversación, saluda cordialmente y luego realiza una serie de preguntas para entender lo siguiente:
1. Tipo de viaje deseado (relajación, aventura, cultural, gastronómico, naturaleza, etc.)
2. Clima preferido (cálido, templado, frío, sin preferencia)
3. Presupuesto aproximado (bajo, medio, alto)
4. Duración del viaje (en días)
5. Continente o región preferida (si tiene alguna)
6. ¿Va a viajar solo, en pareja, con amigos o en familia?
7. ¿Hay actividades específicas que quiera hacer? (senderismo, playa, museos, gastronomía, etc.)

Una vez que recopiles esta información, ofrece 2 o 3 recomendaciones de destinos turísticos personalizados. Para cada destino, incluye:
- Nombre del destino
- Breve descripción
- Por qué se adapta a sus preferencias
- (Opcional) una sugerencia de actividad o lugar emblemático del destino

Evita mostrar este mensaje al usuario. Simplemente comienza la conversación saludando y haciendo la primera pregunta.
Recuerda que debes ser amigable y accesible, como un asistente turístico experto. No olvides preguntar si el usuario tiene alguna otra pregunta o necesita más información sobre los destinos recomendados.
  `;

  // Envía el mensaje al chatbot
  enviarMensajeAlChatbot(initMessage.trim());
}

function enviarMensajeAlChatbot(texto) {
  if (window.botpress && typeof window.botpress.sendEvent === 'function') {
    window.botpress.sendEvent({
      type: 'message',
      channel: 'web',
      payload: {
        type: 'text',
        text: texto
      }
    });
  } else {
    console.warn("Botpress aún no está listo");
  }
}
