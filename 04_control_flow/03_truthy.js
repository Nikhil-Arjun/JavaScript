const userEmail = 'N@Nikhil.ai';

if (userEmail) {
  console.log('Got user Email');
} else {
  console.log("Don't have user email");
}

// falsy values =>
// All values are truthy except,
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values => In JS, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.
// "0", "false", " ", [], {}, function() {}

// if (userEmail.length === 0) {
//   console.log('Arr is empty');
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  // console.log('Object is empty');
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator (Conditional Operator)
// The conditional (ternary) operator is the only JavaScript operator that takes three operands:

// a condition followed by a question mark (?), then an expression to execute if the condition is truthy, followef by a colon(:), and finally the expression to execute if the condition is false.

// Alternative to an if....else statement.

// Syntax -> condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('Less than 80') : console.log('More than 80');
