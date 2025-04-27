const AMOUNT_COWS = 9;

const countCows = new Promise((resolve, reject) => {
  if (AMOUNT_COWS < 10) reject("Nos faltan vacas!");
  else resolve(`Excelente, contamos con ${AMOUNT_COWS} vacas`);
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("La promesa finalizó");
  });
