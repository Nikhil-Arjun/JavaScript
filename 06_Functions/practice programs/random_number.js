// Generating a random number
// Number between more than 0 and less than 1
const number = Math.random();
// console.log(number);

// To find the random value between any two numbers we

// Math.random() * (highestNumber - lowestNumber) + lowestNumber

// Get a random number between 1 to 10

const result = Math.floor(Math.random() * (10 - 1) + 1);
console.log(`Random number between 1 and 10 is ${result}`);

// between 1 to 100
const result2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log(`Random number between 1 and 100 is ${result2}`);

// Similarly, if you want to find the random integer in betwwn min(inclusive) to max (inclusive), you can use the following formula:

// Math.floor(Math.random() * (max -min + 1) + min)

const prompt = require("prompt-sync")();

const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

const result3 = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random number between ${max} and ${min} is ${result3}`);
