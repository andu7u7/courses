// Observable genera stream de respuestas
// NOTA: Puede cancelarse

// La librería rxjs contiene este patrón
const { Observable } = require("rxjs");
// Permite realizar filtros antes del subscribe
const { filter } = require("rxjs/operators");

const tiempoMiliSeg = 3000;
// NOTA: Las variables tipo observable terminan con $
const doSomething$ = () => {
  return new Observable((observer) => {
    observer.next("Observable: 1 $");
    observer.next("Observable: 2 $");
    observer.next("Observable: 3 $");
    observer.next(null);
    // Ejecutamos este paso según el tiempo dado
    setTimeout(() => {
      observer.next("Observable: 4 $");
    }, tiempoMiliSeg);
  });
};

(() => {
  const respuesta = doSomething$();
  respuesta
    // Utilizamos pipe para agregar un filtro de datos
    .pipe(filter((value) => value !== null))
    .suscribe((respuesta) => {
      console.log(respuesta);
    });
})();
