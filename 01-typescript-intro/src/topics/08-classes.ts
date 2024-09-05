

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

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        // funcion especial que indica a typescript que tiene que llamar al constructor del padre
        super( realName, 'New York' )
    }
}

// const ironman = new Person('Ironman', 'New York');
// const ironman = new Person('Ironman');
const ironman = new Hero('Ironman', 45, 'Tony');


console.log(ironman);

console.log(ironman.address);