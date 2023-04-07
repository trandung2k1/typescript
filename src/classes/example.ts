//ES5
// function Person(ssn, firstName, lastName) {
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// let person = new Person('171-28-0926', 'John', 'Doe');
// console.log(person.getFullName());

//ES6 : constructor and prototypal inheritance
// class Person {
//     ssn;
//     firstName;
//     lastName;

//     constructor(ssn, firstName, lastName) {
//         this.ssn = ssn;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let person = new Person('171-28-0926', 'John', 'Doe');
// console.log(person.getFullName());

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('171280926', 'John', 'Doe');

console.log(person);

// let person = new Person(171280926, 'John', 'Doe'); //warning
export {};
