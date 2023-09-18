// Program to check if a number is prime or not.
const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a Positive Number: "));

let isPrime = true;

// check if a number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is prime number`);
  } else {
    console.log(`${number} is not prime number`);
  }
} else {
  console.log("The number is not a prime number");
}
