/*
    ===== Código de TypeScript =====
*/

export interface Product {
    description: string,
    price: number
}

const phone: Product = {
    description: 'iPhone 14',
    price: 1400
}

const laptop: Product = {
    description: 'Macbook',
    price: 2700
}

export function salesTax(products: Product[]): [number, number] {
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * 0.16];
}

const items = [phone, laptop];

const [ , salesTaxes ] = salesTax(items);

console.log(salesTaxes);