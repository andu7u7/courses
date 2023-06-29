// Acceden al ámbito de una función exterior desde una función interior (función anidada)
// Se crean cada que una función es creada
// Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto (LA RECUERDA)

function myGlobal(num1 = 0) {
  function aumentar() {
    return num1 + 1;
  }

  function decremento() {
    return num1 - 1;
  }

  function valor() {
    return num1;
  }

  return {
    aumentar: aumentar(),
    valor: valor(),
    decremento: decremento(),
  };
}
const resultado = myGlobal(90);
const { aumentar, valor, decremento } = resultado;
console.log(aumentar, decremento, valor);

// Ejemplo 2
function sumarValues(firstNum) {
  return function second(secondNum = 0) {
    return firstNum + secondNum;
  };
}
console.log(sumarValues(5)(5));

// Ejemplo 3
function alcancia() {
  let dineroTotal = 0;
  return function acumDinero(moneda) {
    dineroTotal += moneda;
    console.log(`Tienes ${dineroTotal} en tu alcancía.`);
  };
}
const persona1 = alcancia();
persona1(5);
persona1(5);
persona1(5);
persona1(5);
const persona2 = alcancia();
persona2(3);
persona2(7);
persona2(10);
persona2(20);

// Ejemplo 4
function createPetList() {
  // Tu código aquí 👈
  const petsList = [];
  return function addPet(pet) {
    return pet ? pushPet(pet) : petsList;
  };

  function pushPet(pet) {
    petsList.push(pet);
    return petsList;
  }
}
const myPetList = createPetList();
console.log(myPetList("michi"));
console.log(myPetList("firulais"));
console.log(myPetList());
