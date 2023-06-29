// Expresiones Regulares
// Son patrones de búsqueda y manipulación de cadenas de caracteres
// Sintanxis: /patrón/

// Creamos patrón
const regexData = /([0-9]{4}-[0-9]{2}-[0-9]{2})/;
const match = regexData.exec("2018-04-20");

console.log(match);
