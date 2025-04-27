// Creamos función que pida elementos para ser imprimidos
// Con ...rest almacenamos los datos restantes en un array
// NOTA: ...rest Siempre debe ir al final

const imprimeElementos = (primero, segundo, ...rest) => {
  console.log(primero, segundo);
  console.log(rest);
};

// Los valores de rest irán a un arreglo
imprimeElementos(1, 2, 3, 4, 5);

// Creamos un objeto
const user = {
  name: "Andy",
  age: 22,
  alias: "Penguin",
};
// Desestructuración del objeto y rest
const { alias, age, ...rest } = user;
// Imprimimos el atributo restante
console.log(rest);

// Declaramos e inicializamos un arreglo
const array = [0, 1, 2, 3, 4, 5];
// Desestructuración del array y rest
const [primer_elemento, segundo_elemento, ...elementosRestantes] = array;
// Imprimimos solo los elementos restantes
console.log(elementosRestantes);
