// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;
// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);

//Type any no check field
console.log(currentLocation.x); //undefined

let result: any;
result = 10.123;
console.log(result.toFixed()); //10
//Not warning
// result.willExist();

let rs: object;
// rs = 10.123; // Type 'number' is not assignable to type 'object'.
// rs.toFixed(); //Property 'toFixed' does not exist on type 'object'.
