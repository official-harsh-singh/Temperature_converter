const kelvin = 293;
//const kelvin
const celsius = kelvin - 273;
//const celsius
let fahrenheit = celsius * (9 / 5) + 32;
//let fahrenheit
let newton = celsius * (33 / 10);
//let newton
fahrenheit = Math.floor(fahrenheit);
//fahreinheit
newton = Math.floor(newton);
//newton
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperaute is ${newton} degrees newton.`);