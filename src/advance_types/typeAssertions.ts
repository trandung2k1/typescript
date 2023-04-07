// let input = document.querySelector('input["type="text"]');
// let input = document.querySelector('input["type="text"]') as HTMLInputElement;
// let enterText = (input as HTMLInputElement).value;

// let el: HTMLElement;
// el = new HTMLInputElement();

// let element = <HTMLInputElement>document.querySelector('input[type="text"]');
const b: string = 'Hehe';
type DynamicType = string | number;
let a = <DynamicType>b;
console.log(typeof a);

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPriceS = getNetPrice(100, 0.05, true) as string;
console.log(netPriceS); //$95

let netPriceN = getNetPrice(100, 0.05, false) as number;
console.log(netPriceN); //95
export {};
