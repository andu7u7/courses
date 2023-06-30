export type Category = 'phone' | 'tablet' | 'laptop';
export type Product = {
    id: number;
    name: string;
    price: number;
    category: Category;
}