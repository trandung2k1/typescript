class Employee {
    static headcount: number = 0;
    constructor(private firstName: string, private lastName: string, private jobTitle: string) {
        Employee.headcount++;
    }
    public static getHeadeCount() {
        return Employee.headcount;
    }
}
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2
console.log(Employee.getHeadeCount()); // 2
// console.log(this.constructor.field); JavaScript
