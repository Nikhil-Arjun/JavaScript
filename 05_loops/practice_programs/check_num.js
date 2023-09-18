// Program to check if a number is positive , negative or zero

const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a number: "));

// check if number is greater than zero
if (number > 0) {
  console.log("The number is positive");
} else if (number === 0) {
  // check if number is zero
  console.log("The number is zero. Type greater than zero number");
} else {
  // if number is less thamm 0
  console.log("The number is negative");
}
