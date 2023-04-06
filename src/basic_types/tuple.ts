//Tuple
let skill: [string, number];
skill = ['TypeScript', 1];
console.log(skill); //[ 'TypeScript', 1 ]
console.log(typeof skill); //object

//Example rgb

let color: [number, number, number] = [255, 0, 0];
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log(bgColor); //[ 0, 255, 255, 0.5 ]
console.log(headerColor); //[ 0, 255, 255 ]
