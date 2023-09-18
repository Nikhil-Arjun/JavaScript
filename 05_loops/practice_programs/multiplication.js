/*
// Program to generate a multiplication table

const num = parseInt(prompt("Enter a integer: "));

for (let i = 1; i <= 10; i++) {
  const result = i * num;
  
  console.log(`${num} * ${i} = ${result}`);
}
*/

// Multiplication table up to a range
const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter an int: "));

const range = parseInt(prompt("Enter a range: "));

for (let i = 1; i <= range; i++) {
  const result = i * number;

  console.log(`${number} * ${i} = ${result}`);
}
