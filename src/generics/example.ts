function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
const colors: string[] = ['red', 'green', 'yellow', 'blue', 'magenta'];

// console.log(getRandomElement(nums));
// console.log(getRandomElement(colors));
console.log(getRandomElement<string>(colors));

//issus number, string,...
function merge<U, V>(a: U, b: V): U & V {
    return {
        ...a,
        ...b,
    };
}
let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });

console.log(result); //{ name: 'John', jobTitle: 'Frontend Developer' }

// function merge<U extends object, V extends object>(a: U, b: V): U & V {
//     return {
//         ...a,
//         ...b,
//     };
// }

// let person = merge({ name: 'John' }, 25); //warning
// let person = merge({ name: 'John' }, { age: 21 }); //warning
// console.log(person); //{ name: 'John', age: 21 }

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);

export {};
