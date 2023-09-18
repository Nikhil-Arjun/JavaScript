// program to check if the number is even or odd
// take the input form the user

const number = 54;

if (number % 2 === 0) {
  console.log("Number is even :", number);
} else if (number % 2 === 1) {
  console.log("Number is odd :", number);
} else {
  console.log("Number is negative range");
}

// Using a ternary Operator

const num = 34;

const result =
  num % 2 === 0
    ? `Number is even number ${num}`
    : `Number is odd number ${num}`;

console.log(`${result}`);

function bark() {
  console.log("woof");
}

console.log((bark.animal = "dog"));
