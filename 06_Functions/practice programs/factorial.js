// JavaScript Program to find factorial of number using recursion

// factorial of 5 is equal to 1*2*3*4*5 = 120

// factorial of n(n!) = 1*2*3*4*5...n
const prompt = require("prompt-sync")();
const factorial = x => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

const num = prompt("Enter a positive number: ");

if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
} else {
  console.log(`Enter a positive number.`);
}
