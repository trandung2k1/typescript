class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;
    constructor(age: number, firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person(21, 'Tran', 'Dung');
person.age = 10; //set age
console.log(person); //Person { _firstName: 'Tran', _lastName: 'Dung', _age: 10 }
export {};
