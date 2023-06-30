import { products, calcTotalPrice, addProduct } from './test.service'

addProduct({ id: 1, name: 'Laptop ASUS', price: 1500, category: 'laptop' });
addProduct({ id: 2, name: 'iPhone13', price: 1300, category: 'phone' });
addProduct({ id: 3, name: 'Tablet Samsung', price: 500, category: 'tablet' });

const totalPrice = calcTotalPrice(products);
console.log({ products });
console.log(`Total price: $${totalPrice}`);