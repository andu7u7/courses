// Expresiones Regulares
// Son patrones de búsqueda y manipulación de cadenas de caracteres
// Sintanxis: /patrón/

// ==================== CLASES ====================

// . = Cualquier caracter
// \w = Cualquier caracter alfanumérico incluyendo el guión bajo
// \d = Cualquier dígito
// \s = Cualquier espacio en blanco

// [0-9] ~ \d
// [0-9a-zA-Z_] ~ \w

// ==================== CONTADORES ====================

// * = 0 o más
// + = 1 o más
// ? = 0 o 1
// {n} = exactamente n
// {min,} = minimo a infinito
// {min,max} = minimo y maximo

// Creamos patrón
const regexDate = /(\d{4}-\d{2}-\d{2})/;
const regexEmail = /^[\w.+-]+@[a-zA-Z]+\.[a-z]{2,}\.?[a-z]{0,5}$/;

const testsDate = ["2018-04-20", "2018/04/20", "2018-0420", "20180420"];
const testsEmail = [
  "ajrm0330@gmail.com",
  "ajrm0330@gmail.com.br",
  "hola@hola",
  "ejemplo@ejemplo.ejemplo.jiji",
];
testsEmail.forEach((test) => console.log(regexEmail.test(test)));
// for (const test of testsDate) {
//   console.log(regexDate.test(test));
// }

// const match = regexData.exec("2018-04-20");

// console.log(regexData.test("2018-04-20"));
// console.log(match);
