
const randomDecimal = Math.random();


const min = 3;
const max = 33;
const range = max - min + 1; 


const randomInRange = randomDecimal * range;


const randomInt = Math.floor(randomInRange);


const shiftValue = randomInt + min;


console.log("Random shift value:", shiftValue);
