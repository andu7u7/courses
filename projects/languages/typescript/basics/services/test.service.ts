import { Product } from "../models/test.model";

// Exportamos products array
export const products: Product[] = [];

// Exportamos addProduct function
export const addProduct = (product: Product): void => {
  products.push(product);
};

export const calcTotalPrice = (products: Product[]): number => {
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
};
