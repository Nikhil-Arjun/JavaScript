// A fibonacci sequence is written as:
// 0,1,1,2,3,5,8,13,21,34,55,89,144...

// Fibonacci Series Up to n terms

// Program to generate a fibonacci series upto n terms

const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter the number of terms: "));

let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series: ");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
