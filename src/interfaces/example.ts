interface Person {
    firstName: string;
    lastName: string;
    middleName?: string; // string | undefined
}

function getFullName(person: Person): string {
    return person.firstName + ' ' + person.lastName;
}

let john = {
    firstName: 'John',
    lastName: 'Doe',
};
console.log(getFullName(john)); // John Doe

let jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22,
};
console.log(getFullName(jane)); //Jane Doe

interface Pr {
    readonly name: string;
    age: number;
}
let pr: Pr;
pr = {
    name: 'John',
    age: 22,
};
// pr.name = 'Jane';// error

interface StringFormat {
    (str: string, isUpper: boolean): string;
}

let format: StringFormat;
format = function (str: string, isUpper: boolean): string {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('Hi', true)); // HI

format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));

let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
};

console.log(lowerCase('Hi', false)); // hi

let test: StringFormat;
test = function () {
    return 'Oke';
};
console.log(test('Hi', true)); // Oke

interface Json {
    toJson: () => string;
    parseJson: (data: string) => object;
}
class P implements Json {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toJson(): string {
        return JSON.stringify(this);
    }
    parseJson(data: string): any {
        return JSON.parse(data);
    }
}
let person = new P('John', 'Doe');
const json = person.toJson();
console.log(json); //{"firstName":"John","lastName":"Doe"}
console.log(person.parseJson(json)); //{ firstName: 'John', lastName: 'Doe' }

export {};

export {};
