function frutas() {
  if (true) {
    var fruta1 = "Manzana"; // Function Scope
    let fruta2 = "Pera"; // Block Scope
    const fruta3 = "Banana"; // Block Scope
    console.log(fruta2, fruta3);
  }
  console.log(fruta1);
}
// NOTA: Solo var se puede redeclarar
frutas();

// Podemos editar solo la referencia de const, Ejm:
const caja = []; // Es un arreglo vacío
caja.push("Hola", "Mundo");
console.log(caja);
