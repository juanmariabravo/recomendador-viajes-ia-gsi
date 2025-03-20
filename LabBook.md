# 📓 **LabBook (contenidos)**

- Título del proyecto: Sistema Recomendador de Viajes y Destinos Turísticos con Chatbot Interactivo
- Grupo de trabajo: Bravo (Juan María Bravo López)
- Fecha de inicio del proyecto: 24/02/2025
- Gestión de Sistemas de Información (GSI) - Escuela Superior de Informática - Universidad de Castilla-La Mancha

---

### 2. **Introducción**
- #### Breve descripción del proyecto y su objetivo.
El objetivo de este proyecto es desarrollar un sistema de una plataforma web que ayude a los usuarios a elegir destinos turísticos basados en sus preferencias y necesidades. Un chatbot interactivo realizará preguntas al usuario para obtener información relevante sobre sus preferencias de viaje y sus intereses (naturaleza, cultura, gastronomía, aventura, presupuesto, clima preferido, etc.), y en base a sus respuestas, le recomendará y sugerirá destinos turísticos personalizados.
- #### Contexto y motivación del proyecto.
Este proyecto surge de la necesidad de simplificar y personalizar la búsqueda de destinos turísticos para los usuarios, ofreciendo recomendaciones basadas en sus gustos y preferencias. La interacción con un chatbot facilita la comunicación y la recopilación de información de manera amigable y rápida.
- #### Objetivos y alcance del proyecto.
- Crear un sistema recomendador de viajes y destinos turísticos basado en las preferencias del usuario.
- Desarrollar un chatbot interactivo para realizar preguntas y recoger información del usuario.
- Implementar una interfaz web accesible y atractiva para interactuar con el chatbot.
- Ofrecer recomendaciones personalizadas de destinos turísticos utilizando un motor de recomendación basado en reglas.
- Registrar las interacciones del usuario para futuras mejoras y análisis.
- Almacenar en una base de datos los destinos turísticos y su información relevante.

---

### 3. **Planificación Inicial**
- #### Desglose de fases y cronograma.
<img src="../assets/planificacion_proyecto_lab_gsi.png" alt="Planificación Inicial del Desarrollo" width="100%"/>

- #### Herramientas y tecnologías seleccionadas.
- **Frontend:** HTML, CSS y JavaScript para la interfaz web.
- **Chatbot:** Botpress (intentamos configurarlo antes, pero podemos evaluar otras opciones si hay problemas)
- **Motor de Recomendación:** Basado en reglas simples con JavaScript y uso de datos estructurados en SQLite.
- **Backend:** Aún por definir, pero se considerará si es necesario para la lógica de negocio.
- **Control de Versiones:** Git y GitHub para gestionar el repositorio y colaboraciones.
- #### Requisitos iniciales (funcionales y no funcionales).
##### Requisitos Funcionales:
1. El usuario debe poder interactuar con el chatbot a través de texto.
2. El sistema debe realizar preguntas clave para conocer las preferencias del usuario: intereses, presupuesto, clima preferido, etc.
3. El sistema debe mostrar recomendaciones de destinos basadas en las respuestas del usuario.
4. El usuario debe poder reiniciar el proceso de consulta en cualquier momento.
5. Las recomendaciones deben incluir información básica del destino (descripción, imagen y enlaces relevantes).
##### Requisitos No Funcionales:
1. La interfaz debe ser amigable, intuitiva y receptiva (responsive).
2. El chatbot debe tener tiempos de respuesta rápidos y ser preciso en la interpretación de las respuestas.
3. La plataforma debe ser accesible desde dispositivos móviles y escritorios.
4. No se utilizarán servicios de pago ni APIs con costes asociados.

---

### 4. **Entradas Diarias o Semanales**
```
🗓️ Fecha: 18/03/2025  
🔹 Actividades realizadas: Investigación sobre herramientas para chatbots gratuitos. Pruebas iniciales con BotPress y configuración del entorno de desarrollo. Creación de un prototipo rápido de web para comprobar la integración del bot een la misma.
🔹 Dificultades encontradas: Error con la instalación de BotPress usando pnpm.  
🔹 Soluciones aplicadas: Se ha trabajado la configuración del bot mediante la web de Botpress (https://app.botpress.cloud/)
🔹 Posibles contratiempos: No podemos asegurar la disponibilidad del chatbot de Botpress a largo plazo, ya que la versión gratuita cuenta con un número limitado de llamadas al bot. 
```
```
🗓️ Fecha: 20/03/2025
🔹 Actividades realizadas: Creación del repositorio de GitHub y estructuraión de directorios. Creación del documento de [Definición del Proyecto](../docs/definicion_proyecto.md), [LabBook](../LabBook.md) y [README.md](README.md).

---

### 5. **Referencias**
- Página web de Botpress: https://app.botpress.cloud/