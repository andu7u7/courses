// Creamos un objeto
const persona = {
  name: "Andy",
  age: 22,
};

// Creamos un objeto a partir de otro
const usuario = {
  ...persona,
  alias: "Penguin",
};

console.log(usuario);
