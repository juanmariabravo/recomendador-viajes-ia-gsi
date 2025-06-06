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
🔹 Actividades realizadas:
- Creación del repositorio de GitHub y estructuración de directorios.
- Creación del documento de [Definición del Proyecto](docs/definicion_proyecto.md),
- [LabBook](../LabBook.md) y
- [README.md](README.md).
🔹No ha habido dificultades relevantes.
```

```

🗓️ Fecha: 25/03/2025
🔹 Actividades realizadas:
- Creación de prototipos de baja fidelidad para las ventanas principales de la web.
- Revisión y ajustes en la estructura inicial del diseño para garantizar una navegación intuitiva.

🔹 Dificultades encontradas:
- Dudas sobre la disposición óptima de algunos elementos en las ventanas principales.

🔹 Soluciones aplicadas:
- Se realizaron pruebas con diferentes disposiciones y se seleccionó la más clara y funcional.

🔹 Posibles contratiempos:
- Es posible que los prototipos requieran ajustes adicionales posteriormente.
```

```
🗓️ Fecha: 01/04/2025
🔹 Actividades realizadas:
- Añadidas todas las páginas del sistema con un estilo unificado y moderno.
- Incorporados numerosos destinos de ejemplo en la base de datos.
- Implementada la funcionalidad de paginación en la sección de Destinos.
- Desarrolladas las funciones de búsqueda y filtrado de Destinos.
- Añadidas imágenes representativas de todos los destinos mediante URLs.

🔹 Dificultades encontradas:
- Ajustes en el diseño responsivo para garantizar una experiencia óptima en dispositivos móviles.

🔹 Soluciones aplicadas:
- Se realizaron pruebas en diferentes resoluciones y se ajustaron los estilos CSS para mejorar la responsividad.

🔹 Posibles contratiempos:
- Verificar la estabilidad de las URLs de las imágenes a largo plazo, ya que algunas podrían no estar disponibles en el futuro.
```

A continuación, se muestran capturas de pantalla de las páginas principales del sistema, con su nuevo diseño moderno, usable, unificado y atractivo.

<img src="assets/aspecto_web_1.png" alt="Captura de pantalla de la página principal" width="100%"/>
<hr>
<img src="assets/aspecto_web_2.png" alt="Captura de pantalla de la página de destinos" width="100%"/>
<hr>
<img src="assets/aspecto_web_3.png" alt="Captura de pantalla de la página de contacto" width="100%"/>
<hr>

```
🗓️ Fecha: 13/04/2025
🔹 Actividades realizadas:
- Finalizado el diseño de la página del chatbot.
- Entrenado el bot para que sea consciente de su rol como asistente de viajes y formule preguntas relacionadas con preferencias de viaje.  Como podemos ver en la siguiente captura de pantalla, el bot ya es capaz de preguntar al usuario por sus preferencias de viaje sin necesidad de que el usuario le indique que lo haga.
```

<img src="assets/consciencia_bot_asistente_de_viajes.png" alt="Captura de pantalla del bot" width="100%"/>

```
- Integrado el chatbot en la página web con funcionalidad completa y operativa.

🔹 Dificultades encontradas:
- Ajustes en el entrenamiento del bot para mejorar la precisión de las preguntas y respuestas.

🔹 Soluciones aplicadas:
- Se realizaron iteraciones en el entrenamiento del bot y pruebas exhaustivas para garantizar su correcto funcionamiento.

🔹 Posibles contratiempos:
- Monitorear el rendimiento del chatbot en escenarios reales para identificar posibles mejoras.

🔹 Futuras tareas y aproximaciones:
Se debe conseguir que la página de detalles muestre información y detalles sobre cada uno de los destinos. Por el momento, esta página solo actúa como una plantilla modelo con la misma información.
Se ha de mejorar y perfeccionar el uso del chatbot, así como las recomendaciones de mensajes predefinidos.

```

```
🗓️ Fecha: 22/04/2025
🔹 Actividades realizadas:
- Tras encontrarse con grandes problemas de integración del chatbot en un frame de la web, se ha decidido crear una página independiente para el chatbot.
- Se han completado las tareas pendientes, como la mejora de las recomendaciones del bot o la mejora del estilo de la página de detalles de los eventos. 
```

Ahora el bot entrenado será usable desde la siguiente URL: https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/18/16/20250318165501-WZ7ZXGB7.json


```
🗓️ Fecha: 24/04/2025
🔹 Actividades principales realizadas:
- Ahora cada destino permite visualizar todos sus detalles en la página de detalles-destino. Por tanto, ahora esta página tiene un uso real y no es solo una plantilla de muestra
- Se ha creado la base de datos, en formato json, con todos los destinos turísticos que se pueden mostrar en la web.
- Se ha conseguido que las páginas de la web lean la base de datos y muestren los destinos turísticos de manera dinámica.
- Se han perfeccionado los filtros para que el usuario pueda buscar destinos turísticos de manera dinámica.
- Se han perfeccionado los comentarios para que el usuario pueda comentar los destinos turísticos de manera dinámica.
- Añadidos nuevos recursos gráficos y refactorizada la integración del chatbot
- Se ha reemplazado el script de webchat por un iframe para mejorar carga y experiencia de usuario, solucionando el problema de integración del chatbot en un html. Ahora el chatbot se muestra en una página personalizada, que sigue la estética y los estilos de la web.

🔹 Actividades secundarias realizadas:
- Actualizados scripts y estilos del chatbot con soporte para portapapeles en preguntas ejemplo
- Mejorada la página principal con una imagen con nuestro logo
- Implementado gestor para comentarios y actualizado enlace del botón a detalles
- Refactorizada página de detalles con carga dinámica y mejoras en actualización del DOM
- Añadido botón para limpiar filtros con funcionalidad completa
- Consolidada lógica de inicialización y mejorado manejo de filtros en destinos.js
- Actualizados estilos CSS para tarjetas y filtros, implementada carga dinámica desde JSON

🔹 Dificultades encontradas:
- Problemas de rendimiento con la integración inicial del chatbot
- Inconsistencias en el posicionamiento del overlay
- Complejidad en la sincronización del estado de los filtros

🔹 Soluciones aplicadas:
- Migración a iframe para  que el chatbot cargue en cualquier navegador sin dificultades
- Ajustes finos en los z-index y posicionamiento absoluto para el overlay
- Implementación de un sistema centralizado de gestión de estado para los filtros
- Optimización del código de filtrado (reducción del 30% en líneas de código)

🔹 Posibles contratiempos:
- Para aumentar la velocidad y los tiempos de respuesta, se han tomado imágenes de otros dominios públicos de la web. Si alguna dejara de existir en dichos dominios la perderíamos en nuestra web.

```


<p align="center">
  <img src="./assets/chatbot_page.png" alt="Integración del chatbot en la página de chatbot.html, ahora funcional y compatible con cualquier navegador" width="100%"/>
  Integración del chatbot en la página de chatbot.html, ahora funcional y compatible con cualquier navegador
</p>


---

### 5. **Referencias**

- Página web de Botpress: https://app.botpress.cloud/
