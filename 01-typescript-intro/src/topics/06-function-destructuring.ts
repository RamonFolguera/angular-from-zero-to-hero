// exportar para el capítulo 07

export interface Product {
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

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation( options: TaxCalculationOptions ) : number[] {
//     let total = 0;

//     options.products.forEach( product => {
//         total += product.price
//     })

//     return [total, total * options.tax]
// }


const shoppingCart = [ phone, tablet ];
const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax 
//     // no hace falta poner tax : tax
// });


// console.log('Total', result[0])
// console.log('Total', result[1])


// ejercicio resuelto

// function taxCalculation({ tax, products }: TaxCalculationOptions ) : [ number, number] {    acabariamos con 20 variables desestructurando ahi
export function taxCalculation( options: TaxCalculationOptions ) : [ number, number] {
// añadimos la linea siguiente con la ultima options
    const { tax, products } = options;  

        let total = 0;

    products.forEach( ({ price }) => {
        total += price
    })

    return [total, total * tax]
}



const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax 
    // no hace falta poner tax : tax
});

console.log('Total', total )
console.log('Total', taxTotal )



