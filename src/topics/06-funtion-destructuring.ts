export interface Product {
    description: string;
    price: number;
}

/* const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
} */

export interface TaxCalculation {
    tax: number;
    products: Product[];
}

//function taxCalculation(option: TaxCalculation): [number, number]{
//function taxCalculation({tax, products}: TaxCalculation): [number, number]{
export function taxCalculation(option: TaxCalculation): [number, number]{
    let total = 0;

    const {products, tax} = option;

    products.forEach( ({price}) => {
        total += price;
    });
    return [total, total*tax];
}

/* const shopingCart = [phone, tablet];
const tax = 0.15; */

/* const [total, taxTotal] = taxCalculation({
    products: shopingCart,
    tax: tax
}); */

/* console.log('Total', total);
console.log('Tax', taxTotal); */
