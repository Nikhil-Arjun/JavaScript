/*Comparison Operators => 
< | (less than) 
> | (greater than)
<= | (less than or equal to)
>= | (greater than or equal to)
== | (equal to)  
!= | (not equal to)  
=== | (Strict equal = Checks type of data and value)
*/

// Truthy values => In JS, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy.

// Falsy values => All values are truthy except,
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// if statement

// The if...else statement executes a statement if a specified condition is truthy values.
// If the condition is falsy, another statement in the optional else clause will be executed.

// const isUserloggedIn = true;
const temperature = 38;

if (temperature > 30) {
  // console.log('less than 41');
} else {
  // else statement
  // console.log('temperature is greater than 41');
}
// console.log('Execute');

const score = 200;

if (score > 100) {
  const power = 'fly';
  // console.log(`User power: ${power}`);
}

// it will not execute because of scope
// console.log(`User power: ${power}`);

const balance = 8;

// Implicit scope
// Bad practice
// if (balance > 500) console.log('test'), console.log('test2');

// else if condition
if (balance < 500) {
  // console.log('less than 500');
} else if (balance < 750) {
  // console.log('less than 750');
} else if (balance < 900) {
  // console.log('less than 900');
} else {
  // console.log('less than 1200');
}

/*
Logical Operator =>
&& | AND Operator
|| | OR Operator
!  | NOT Operator


*/

const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = false;

if (isUserloggedIn && debitCard && 2 === 3) {
  console.log('Allow to buy course');
} else if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('User logged in');
} else {
  console.log('Welcome Guest user.');
}
