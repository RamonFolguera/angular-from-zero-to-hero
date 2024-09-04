/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}
// con F2 encima de calle y cambiamos a street y lo cambia todo
interface Address {
    street: string;
    country: string;
    city: string;
}


const address = superHeroe.showAddress();
console.log( address );


export {};