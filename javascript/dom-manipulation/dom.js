// Accediendo a las propiedades de cada elemento en el DOM

// Por ID
const p = document.querySelector("#parrafo1");
console.log(p.id);

// Por etiqueta
const h1 = document.querySelector("h1");
console.log(h1.textContent);

// Por clase
const p2 = document.querySelector(".parrafito");
console.log(p2.textContent);

// Ejemplo aplicado
const input = document.querySelector("#input1");
console.log(input.value);

// Editando elementos desde JS
h1.innerHTML = "Hola <br> Mundo"; // Permite adjuntar etiquetas html
p.innerText += " (Texto sumado desde js)"; // Permite adjuntar texto (+= concatena)

// Accediendo a los atributos de las etiquetas

// Modificando atributos
h1.setAttribute("class", "rojo"); // Cambiamos el valor de class por rojo (Quita los valores anteriores)

// Add - Añade al valor de class (SOLO SIRVE PARA CLASS)
h1.classList.add("azul", "amarillo");

// Remove - Eliminar valor de class (SOLO SIRVE PARA CLASS)
h1.classList.remove("azul");

// Obteniendo atributos
console.log(h1.getAttribute("class"));

// Creando elemento HTML
const nuevoImg = document.createElement("img"); // Creamos elemento img
nuevoImg.src =
  "https://www.google.com/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.8-ladc.gif";

// Cambiando contenido de un elemento p
p2.replaceWith(nuevoImg);

// Otra alternativa
// p2.appendChild(nuevoImg);  // Concatena el elemento que mandemos

// Realizar una suma | Eventos
const resultado = document.querySelector("#resultado");
const calc1 = document.querySelector("#calc1");
const calc2 = document.querySelector("#calc2");
const btnSuma = document.querySelector("#btnSumar");

 // Le añadimos un evento tipo click al botón
btnSuma.addEventListener("click", () => {
  resultado.innerText = `El resultado es ${+calc1.value + +calc2.value}`;
});
