// Program to find the factorial of a number

// 5! = 5 * 4 * 3* 2* 1 = 120

// factorial of n (n!)

const prompt = require("prompt-sync")();

const num = parseInt(prompt("Enter a positive number: "));

if (num < 0) {
  console.log("Negative number, Error!");
} else if (num === 0) {
  console.log(`The factorial if ${num} is 1.`);
} else {
  let fact = 1;
  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }

  console.log(`The factorial of ${num} is ${fact}`);
}
