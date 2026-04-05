import { taxCalculation, type Product } from "./06-funtion-destructuring";


const shoopingCart: Product[] = [
    {
        description: 'nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
]

const tax = 0.15;
const [total, taxTotal] = taxCalculation({ tax, products: shoopingCart });

console.log('Total import', total);
console.log('Tax import', taxTotal);
