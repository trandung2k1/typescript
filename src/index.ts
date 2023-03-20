const fullName: string = 'Tran Van Dung';
const age: number = 21;
const isAdmin: boolean = false;
console.log(fullName); //Tran Van Dung
console.log(age); // 21
console.log(isAdmin); // false

// Array
const numbers: number[] = [1, 2, 3];
console.log(numbers); // [1, 2, 3]

const names: string[] = ['Nam', 'Mai', 'Lan'];
console.log(names); // ['Nam', 'Mai', 'Lan']

//Object

let person: {
    name: string;
    age: number;
};

// person.name = 'Nam';
// person.age = 21;

person = {
    name: 'Nam',
    age: 21,
};
console.log(person); // { name: 'Nam', age: 21 }

//Function arguments & return types

let greeting: (name: string) => string;

greeting = function (name: string): string {
    return `Hi ${name}`;
};
console.log(greeting('Dung!')); // Hi Dung!
