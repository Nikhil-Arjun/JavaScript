/*
    Create a program that starts with a number variable.
    The program will print out whether the variable is
    even or odd to the screen when run.

    Change the variable to test it works in both cases.

    HINT: modulus operator ( % ) is your friend
*/

let number = 89;

if (number % 2 == 0) {
  console.log("Given number is even number");
} else {
  console.log("Given number is odd number");
}

// Using Ternary Operator

let num = 45;

const result = num % 2 == 0 ? "Num is even" : "Num is odd";

console.log(`The number is ${result}`);
