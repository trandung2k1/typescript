// function add(a: any, b: any) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     if (typeof a === 'string' && typeof b === 'string') {
//         return a.concat(b);
//     }
//     throw new Error('Parameters must be numbers or strings');
// }

// add(true, false); // error and stop execute not warning

//Example union
let data: number | string;
data = 10;
data = 'Hi';
// data = false; // error: Type 'boolean' is not assignable to type 'string | number'.

//fix issue
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// add(true, false); // warning
