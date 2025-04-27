import { products, calcTotalPrice, addProduct } from "./services/test.service";

(function main() {
  addProduct({ id: 1, name: "Laptop ASUS", price: 1500, category: "laptop" });
  addProduct({ id: 2, name: "iPhone13", price: 1300, category: "phone" });
  addProduct({ id: 3, name: "Tablet Samsung", price: 500, category: "tablet" });

  const totalPrice = calcTotalPrice(products);
  console.log({ products });
  console.log(`Total price: $${totalPrice}`);
})();

const sayHello = () => {
  // Inferido (En este caso el tipo de dato es string)
  const myName = "Andy";
  console.log(`My name is ${myName}`);

  // Explicito
  const myAge: number = 32;
  console.log(`My age is ${myAge}`);

  // Union
  let idUser: number | string;
  const randomId = Math.random() < 0.5;
  idUser = randomId ? "10" : 10;
  if (typeof idUser === "string")
    console.log(`User name (string) is ${idUser}`);
  else console.log(`User id (number) is ${idUser}`);

  // Any - Un gran poder conlleva una gran responsabilidad
  const anyVariable: any = "Hello";
  anyVariable as string;
  <string>anyVariable;

  // Alias
  type IdUser = number | string;
  let idUser2: IdUser = 10;
  console.log(`User id (number) is ${idUser2}`);

  // Literal
  type SquareSize = "100x100" | "500x500" | "1000x1000";
  let smallPicture: SquareSize = "100x100";
  console.log(`Picture size is ${smallPicture}`);

  // ===== SISTEMAS NUMÉRICOS =====

  // Binario
  let binario: number = 0b1010;
  console.log(`Binario: ${binario}`);

  // Hexadecimal
  let hexadecimal: number = 0xa;
  console.log(`Hexadecimal: ${hexadecimal}`);

  // Octal
  let octal: number = 0o12;
  console.log(`Octal: ${octal}`);
};
