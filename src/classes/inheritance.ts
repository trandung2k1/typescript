class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person {
    private jobTitle: string;
    constructor(firstName: string, lastName: string, jobTitle: string) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    //overriding
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let employee = new Employee('John', 'Doe', 'Front-end Developer');
console.log(employee.getFullName()); //John Doe
// if overriding:This is John Doe.I'm a Front-end Developer. else This is John Doe.
console.log(employee.describe());
export {};
