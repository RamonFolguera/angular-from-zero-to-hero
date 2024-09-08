

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
        public firstName: string,
        public lastName: string,
        // public name: string, 
        private address: string  = 'No Address'
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         // funcion especial que indica a typescript que tiene que llamar al constructor del padre
//         super( realName, 'New York' )
//     }
// }

// Priorizar composición sobre herencia

export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
}

// const ironman = new Person('Ironman', 'New York');
// const ironman = new Person('Ironman');
const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony);


console.log(ironman);

console.log(ironman.address);