# **APUNTES GENERALES**

## **PARADIGMAS DE PROGRAMACIÓN**

### **IMPERATIVA**
- Se basa en la ejecución de instrucciones.
- Se centra en el cómo se ejecutan las instrucciones para lograr el resultado esperado.

### **DECLARATIVA**
- Se basa en la evaluación de expresiones.
- Se centra en el qué se ejecuta.
- Se basa en la inmutabilidad de variables.

### **ORIENTADA A OBJETOS**
- Se basa en la creación de objetos.
- Se centra en la interacción entre objetos.
- Se basa en la modificación de atributos.
- Se basa en la herencia de clases.

### **FUNCIONAL**
- Se basa en la creación de funciones.
- Se centra en la composición y aplicación de funciones.

### **LOGICA**
- Se basa en la lógica matemática.
- Se centra en la creación de hechos y reglas.

### **ESTRUCTURADA**
- Se organiza en estructuras de control (secuencias, bucles, y condicionales).
- Busca uso de estructuras claras y bien definidas.

---
## **CONCEPTOS**

### **REACTIVIDAD**
- Se basa en la reacción a eventos en tiempo real (automáticamente).
- Lineamientos a seguir:
    - Responsive:
        - Escalable: se adapta a la carga de trabajo y es fácil de mantener.
        - Resiliente: preparado para cualquier situación o error.
    - Message Driven:
        - Asíncrono: no bloquea el hilo de ejecución.
        - Orientado a eventos: reacciona a eventos.
- Tecnologías: _**RxJS, VueJS, ReactJS, AngularJS**_.

### **STATE**
- Se basa en el estado de la aplicación.

### **RENDER**
- Se basa en el renderizado de la aplicación.
- Tecnologías: _**ReactJS, VueJS, AngularJS**_.
- Estrategias:
    - Virtual DOM: se basa en la creación de un árbol de elementos en memoria (copia del DOM), y luego se renderiza en el DOM.
    - Incremental DOM: se basa en la modificación del DOM directamente, pero solo modifica los elementos que han cambiado.

### **ENFOQUES - RENDERING**
- **Server Side Rendering (SSR) (Viejo Jenkins en su camión)**: 
    - Renderizado del lado del servidor.
    - Se basa en la creación de una página HTML completa en el servidor.        
    - Proceso:
        1. El servidor genera el HTML completo de la página, incluyendo el contenido.
        2. El servidor envía el HTML renderizado al navegador.
        3. El navegador muestra directamente el contenido recibido.
        4. La página es interactiva y completamente funcional una vez que el contenido se muestra en el navegador.

- **Client Side Rendering (CSR)**: 
    - Renderizado del lado del cliente.
    - Se basa en la creación de una página HTML básica en el servidor, y luego se completa con JavaScript en el navegador.
    - Proceso:
        1. El servidor envía una versión básica de la página al navegador, junto con un archivo JavaScript.
        2. El navegador descarga el JavaScript y lo ejecuta.
        3. El JavaScript obtiene los datos necesarios y renderiza el contenido en el navegador.
        4. La página se vuelve interactiva una vez que el JavaScript finaliza la renderización y carga de datos.

- **Static Site Generation (SSG)**:
    - Se basa en la creación de una página HTML estática en el servidor.
    - Solo para páginas que no cambian frecuentemente.
    - Proceso:
        1. El servidor genera el HTML completo de la página, incluyendo el contenido.
        2. El servidor envía el HTML renderizado al navegador.
        3. El navegador muestra directamente el contenido recibido.
        4. La página es interactiva y completamente funcional una vez que el contenido se muestra en el navegador.

- **Progressive Server Side Rendering (SSR)**:
    - Se basa en la combinación de SSR y CSR.
    - Muestra rápidamente el contenido inicial renderizado en el servidor al usuario mientras el resto de recursos se cargan en segundo plano. 
    - Durante la solicitud:
        - El servidor genera y envía un HTML parcialmente renderizado al navegador. 
        - El navegador sigue cargando el resto de los recursos necesarios.
    - Finalizando la solicitud:
        - El navegador descarga y ejecuta el JavaScript necesario.
        - El JavaScript completa el renderizado y la interacción en el lado del cliente.

- **Extra**
    - **Progressive Web App (PWA)**:
        - Su proposito es mejorar la experiencia del usuario.
        - Requisitos para ser una PWA:
            - Utilizar HTTPS.
            - Contar con archivo Web App Manifest y conjunto de íconos.
            - Dar soport offline por Service Worker. 

### **FRAMEWORKS**
- Conjunto de herramientas.
- Cuentan con funcionalidades integradas para no requerir librerías externas.
- Define la forma en la que desarrollarás tu proyecto.
- Tecnologías: _**VueJS, AngularJS**_.

### **LIBRERÍAS**
- Herramienta con solo una utilidad específica.
- Puedes usar varias librerías (compatibles entre si) en un mismo proyecto.
- Tecnologías: _**ReactJS**_.

### **EMPAQUETADORES**
- Se basa en la unificación de archivos.
- Tecnologías: _**Webpack, Parcel, Rollup**_.

### **PREPROCESADORES CSS**
- Convertimos código CSS en código CSS válido.
- Se basa en la compilación de código CSS. 
- Tecnologías: _**SASS, LESS, Stylus**_.
