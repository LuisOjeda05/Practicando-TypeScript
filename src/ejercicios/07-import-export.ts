/*
    ===== Código de TypeScript =====
*/

import { Product, salesTax } from "./06-desestructuracion-funcion";

const shoppingCart: Product[] = [
    {
        description: 'Samsung A-71',
        price: 600
    },
    {
        description: 'HP Laptop',
        price: 800
    },
    {
        description: 'AirPods Pro',
        price: 240
    }
];

const [total, salesTaxes] = salesTax(shoppingCart);

console.log(shoppingCart);
console.log('Total:', total);
console.log('Impuesto de venta:', salesTaxes);