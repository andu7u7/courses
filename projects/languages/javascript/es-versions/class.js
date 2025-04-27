// Iniciar una clase
class calculator {
  // Función constructora de la clase
  constructor() {
    // Declaramos o inicializamos variables
    this.valorA;
    this.valorB;
  }
  // Funciones de la clase
  suma(a, b) {
    this.valorA = a;
    this.valorB = b;
    return this.valorA + this.valorB;
  }
}

// Creamos una instancia de la clase
const calc = new calculator();
console.log(calc.suma(5, 5));
