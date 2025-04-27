const condicion = true;

// Sintaxis Función Generadora
function* holaMundo() {
  // Retornamos valores con la palabra reservada yield
  if (condicion) yield "Primer yield";
  if (condicion) yield "Segundo yield";
  if (condicion) yield "Tercer yield";
}

// Almacenamos yield en una constante
const resultado = holaMundo();

// Utilizamos la función next() - Recuerda en qué yield se quedó cada que lo ejecutes
// Colocamos value para obtener el valor
console.log(resultado.next().value); // Primer yield
console.log(resultado.next().value); // Segundo yield
console.log(resultado.next().value); // Tercer yield

// function* es ejecutado hasta la primera expresión yield
// o con yield* que delega a otra function*.
// Nota: yield especifica el valor que será retornado por el iterador.

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 1;
  yield i + 1;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 20;
}

const resultado2 = generator(10);

for (let i = 0; i < 5; i++) {
  console.log(resultado2.next().value);
}
