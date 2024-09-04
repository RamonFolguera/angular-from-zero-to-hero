

// class Person {
//     public name: string;
//     private address: string;
    
//     constructor( name: string, address: string ) {
//         this.name = name;
//         this.address = address;
//     }
// }

// forma corta de definir clases en typescript
class Person {
    
    constructor( 
        public name: string, 
        private address: string  = 'No Address'
    ) {}
}


// const ironman = new Person('Ironman', 'New York');
const ironman = new Person('Ironman');


console.log(ironman);

console.log(ironman.address);