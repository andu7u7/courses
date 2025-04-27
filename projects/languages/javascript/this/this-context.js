// Contexto: global (object window)
console.log(`this-global: ${this}`);

// Contexto: function (object window)
function whoIsThis() {
  return this;
}
console.log(`this-function: ${whoIsThis()}`);

// Contexto: en un objeto (hace referencia al objeto)
const person = {
  name: "Andy",
  saludar: function () {
    return `Mi nombre es ${this.name}`;
  },
};
console.log(`this-object: ${person.saludar()}`);

// Contexto: lo sacamos de un objeto (undefined, no existe)
const accion = person.saludar;
console.log(`this-object-fuera: ${accion()}`);

// Contexto: strict mode (undefined)
(function strictThis() {
  "use strict";
  console.log(`this-strict: ${this}`);
})();

// Contexto: Class (no, pero sí)
function personClass(name = "") {
  // this = { }
  this.nombre = name;
}

personClass.prototype.saludar = function () {
  console.log(`this-class: Hola, me llamo ${this.nombre}`);
};

const andy = new personClass("Andy");
andy.saludar();
