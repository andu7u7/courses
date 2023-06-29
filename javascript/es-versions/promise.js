// Promise genera una sola respuesta
// NOTA: No puede cancelarse

const condicion = false;

// Creamos Promise usando arrow function
const promesa = () => {
  // Retornamos una promesa
  return new Promise((resolve, reject) => {
    condicion ? resolve("Hola mundo") : reject("Adiós mundo");
  });
};

// Llamamos a la función tipo Promise
promesa()
  // Promesa resuelta - Le enviamos resolve
  .then((resolve) => {
    console.log(resolve);
  })
  // Promesa resuelta - No le enviamos nada
  .then(() => {
    console.log("Mensaje de Prueba");
  })
  // Promesa rechazada - Le enviamos reject (puede omitirse)
  .catch((reject) => {
    console.log(`Error ${reject}`);
  })
  // Código final - Siempre correrá
  .finally(() => {
    console.log("Finalizado");
  });

// Promise - API
// Creamos una Promise
const doSomething = () => {
  return new Promise((resolve) => {
    resolve("Promise Mejorada: 1");
  });
};

// La llamamos sola - Contexto asíncrono
(async () => {
  const respuesta = await doSomething(); // await - Se demora el tiempo que deba
  console.log(respuesta);
})();
