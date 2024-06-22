import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Samsung Fe',
        price: 11500
    },
    {
        description: 'Nokia',
        price: 4500
    }
];

// Tax = 0.15
const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
}); 

console.log('Total: ',total);
console.log('Tax: ',tax);