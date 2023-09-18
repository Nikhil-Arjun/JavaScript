// Program to find the largest among three numbers

const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));
const num3 = parseInt(prompt("Enter third number: "));

// let largest;
// check the condition (largest number)

// if (num1 >= num2 && num1 >= num3) {
//   largest = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   largest = num2;
// } else {
//   largest = num3;
// }

let smallest;
if (num1 <= num2 && num1 <= num3) {
  smallest = num1;
} else if (num2 <= num1 && num2 <= num3) {
  smallest = num2;
} else {
  smallest = num3;
}

// display the result
// console.log(`The largest number is ${largest}`);
console.log(`The smallest number is ${smallest}`);

//Using Math.max()
const largestNumber = Math.max(num1, num2, num3);
console.log(`The largest number is ${largestNumber}`);

// Using Math.min()
const smallestNumber = Math.min(num1, num2, num3);
console.log(`The smallest number is ${smallestNumber}`);
