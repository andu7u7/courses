// Creamos un objeto
const person = {
  name: "No tengo identidad",
  age: 18,
  country: "PE",
  atributo_secret: "sabes, yo perdi algo una vez... perdí mi identidad",
};
// Imprimimos
console.log(person.country, person.name, person.age);

// DESTRUCTURIZANDO ATRIBUTOS DE UN OBJETO
// Colocamos las variables que sacaremos del objeto
const { name, age, country } = person;

// Imprimimos de manera más corta
console.log(country, name, age);
