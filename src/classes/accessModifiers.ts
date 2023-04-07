//Private
class Person {
    protected ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //public
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('153-07-3130', 'John', 'Doe');
// console.log(person.ssn); // compile error

console.log(person.getFullName());

//Default : public

class Student extends Person {
    constructor(ssn: string, firstName: string, lastName: string) {
        super(ssn, firstName, lastName);
    }
    getSsn(): string {
        // private: not access
        // protected: access
        // return this.ssn;
        return super.ssn;
    }
}
const u = new Student('111111', 'Tran', 'Dung');
console.log(u.getSsn());
export {};
