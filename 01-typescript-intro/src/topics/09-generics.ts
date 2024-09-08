// hay que evitar usar any.


// export function whatsMyType( argument: any ) {
//     return argument;
// }

export function whatsMyType<T>( argument: T ): T {
    return argument;
}


const amIString = whatsMyType<string>('hola mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);

// console.log ( amIString.split2(' ' ));
// console.log ( amINumber.split2(' ' ));
// console.log ( amIArray.split2(' ' ));

console.log ( amIString.split(' '));
console.log ( amINumber.toFixed());
console.log ( amIArray.join('-'));


