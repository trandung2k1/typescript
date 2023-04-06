// let add: (x: number, y: number) => number;

// add = function (x: number, y: number): number {
//     return x + y;
// };

// or

let add: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
console.log(add(2, 2));
export {};
