// Program to check if a number is odd or even.

const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");

// check if the number is even
if (number % 2 == 0) {
  console.log("The number is even.");
} else if (number % 2 == 1) {
  // if the number is odd
  console.log("The number is odd.");
} else {
  console.log("Entered number is in negative range.");
}

// Using Ternary Operator

const result = number % 2 == 0 ? "Even" : "Odd";
console.log(`The number os ${result}`);
