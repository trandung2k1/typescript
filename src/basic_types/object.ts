let employee: object;

employee = {
    firstName: 'Tran',
    lastName: 'Dung',
    age: 21,
    jobTitle: 'Web developer',
};

console.log(employee);
// {
//   firstName: 'Tran',
//   lastName: 'Dung',
//   age: 21,
//   jobTitle: 'Web developer'
// }

// employee = 'Nam'//error: Type 'string' is not assignable to type 'object'.

// console.log(employee.name); // error: Property 'name' does not exist on type 'object'

// Explicitly specify properties

// let e: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     jobTitle: string;
// };
// e = {
//     firstName: 'Tran',
//     lastName: 'Dung',
//     age: 21,
//     jobTitle: 'Web developer',
// };

//or
let e: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'Tran',
    lastName: 'Dung',
    age: 21,
    jobTitle: 'Web developer',
};
console.log(e);
// {
//   firstName: 'Tran',
//   lastName: 'Dung',
//   age: 21,
//   jobTitle: 'Web developer'
// }

//Note object vs Object

//object including: number, boolean, string, bigint, null, undefined, symbol
//Object: methods toString() and valueOf()

// /The empty type {}

let vacant: {};

// vacant.firstName = 'Nam'; //error: The empty type {}Property 'firstName' does not exist on type '{}'

vacant = {};
console.log(vacant.toString()); //[object Object]
console.log(vacant.valueOf()); //{}
