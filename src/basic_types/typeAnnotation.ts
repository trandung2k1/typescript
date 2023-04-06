let counter: number;
counter = 10;
// counter = "Hi" //error

let fullName: string = 'Tran Van Dung';
let age: number = 21;
let active: boolean = false;

//Array
let numbers: number[] = [1, 2, 3];
console.log(numbers);
const names: string[] = ['John', 'Jane', 'Peter'];

//Object
let person: {
    name: string;
    age: number;
};
person = {
    name: 'John',
    age: 21,
};

//Function arguments & return types
let greeting: (name: string, age: number) => string;

greeting = function (name: string): string {
    return 'Hi ' + name;
};

type Sum = (a: number, b: number) => number;
const sum: Sum = function (a: number, b: number) {
    return a + b;
};
