// Program to print prime number between the two numbers

const prompt = require("prompt-sync")();

const lowerNumber = parseInt(prompt("Enter lower Number: "));
const higherNumber = parseInt(prompt("Enter higher Number: "));

console.log(
  `The prime numbers between ${lowerNumber} and ${higherNumber} are : `
);

// looping from lower to higher

for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
