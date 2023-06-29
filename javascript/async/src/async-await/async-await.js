const condition = true;

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    condition
      ? setTimeout(() => {
          resolve("Sin problemas! - Async!!!");
        }, 2000)
      : reject(new Error("Error!"));
  });
};

// Usando async | await
const anotherFnAsync = async () => {
  const something = await fnAsync(); // El bloque de código no continúa hasta que termine el await
  console.log(something);
  console.log("Prueba");
};

console.log("Before anotherFnAsync");
anotherFnAsync();
console.log("After anotherFnAsync");
