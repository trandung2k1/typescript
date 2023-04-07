interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'Jan',
    value: 1,
};
console.log(month); //{ key: 'Jan', value: 1 }

interface Collection<T> {
    add(value: T): void;
    remove(value: T): void;
}

class List<T> implements Collection<T> {
    private items: T[] = [];
    add(value: T): void {
        this.items.push(value);
    }
    remove(value: T): void {
        let index = this.items.indexOf(value);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}
let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list);

interface Options<T> {
    [name: string]: T;
}

let inputOptions: Options<boolean> = {
    disabled: true,
    visible: false,
};
console.log(inputOptions); //{ disabled: true, visible: false }
