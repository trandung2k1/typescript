function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//Default parameter
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

let promotion: (price: number, discount?: number) => number;

function applyDis(price: number, discount?: number): number {
    if (discount) {
        return discount * price;
    }
    return price;
}

//Rest parameters

function getTotal(...numbers: number[]): number {
    let total: number = 0;
    numbers.forEach((n) => (total += n));
    return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

//Overloading

function addNumbers(a: number, b: number): number {
    return a + b;
}
function addStrings(a: string, b: string): string {
    return a + b;
}
// Merge addNumbers and addStrings
function add(a: number | string, b: number | string): number | string | never {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return a + b;
    throw new Error('Invalid argument');
}

//Example overloading: Establish the relationship between the parameter types and result types of a function.

function adds(a: number, b: number): number;
function adds(a: string, b: string): string;
function adds(a: boolean, b: boolean): string;
function adds(a: any, b: any): any {
    return a + b;
}
adds(1, 2);

//Function overloading with optional parameters

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

//Method overloading
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array

export {};
