function handleAdd(a: number, b: number): number {
    return a + b;
}

function echo(msg: string): void {
    console.log(msg);
}
//TypeScript will try to infer an appropriate type: union or any
// => number
function create(a: number, b: number) {
    return a + b;
}
