// Today's temperature in Kelvin
let Kelvin = 293;
// Today's temperature in Celsius
let Celsius = Kelvin - 273;
// Today's temperature in Farenheit
let Fahrenheit = Celsius*(9/5) + 32;
console.log(Fahrenheit);
// Round down a probably decimal number
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Kelvin} degrees Kelvin.`);
console.log(`The temperature is ${Celsius} degrees Celsius.`);
console.log(`The temperature is ${Fahrenheit} degrees Farenheit.`);
// Let's change our today's temperature to 0 in Kelvin to find out how much it will be in Farenheit.
Kelvin = 0;
Celsius = Kelvin - 273;
Fahrenheit = Celsius*(9/5) + 32;
Fahrenheit = Math.floor(Fahrenheit);
console.log(`The temperature is ${Kelvin} degrees Kelvin.`);
console.log(`The temperature is ${Celsius} degrees Celsius.`);
console.log(`The temperature is ${Fahrenheit} degrees Farenheit.`);
// Let's convert Celsius to the Newton scale
let Newton = Celsius * (33/100);
console.log(Newton);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton.`);
