

interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

// function taxCalculation( options:TaxCalculationOptions ): [ number, number ]{
// function taxCalculation( { tax, products }:TaxCalculationOptions ): [ number, number ]{
function taxCalculation( options:TaxCalculationOptions ): [ number, number ]{
    let total = 0;

    const { products, tax } = options;

    products.forEach( ({price}) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [ phone , tablet ];
const tax = 0.15;

const [ total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax,
});

const {description:descriptionPhone,price:pricePhone} = phone;
const {description:descriptionTablet,price:priceTablet} = tablet;

console.log('Descripcion: ', descriptionPhone);
console.log('Precio: ', pricePhone);
console.log('Descripcion: ', descriptionTablet);
console.log('Precio: ', priceTablet);

console.log('Total', total);
console.log('Tax', taxTotal);

// * La tarea es aplicar la destructuracion de todo el ejercicio.


export{};