// Scope => Availability of variables and function in certain parts of the code.

// Two types of scope: 1.Global Scope   2.Local Scope
// var c = 300;

// Global Scope ->
// A variable declared at the outside of a function is considered a global scope variable.

// Avoid using global variables -> value of global variables can change in different areas in the program .
let a = 300;
if (true) {
  let a = 10; // Local Scope -> accessed within a function
  const b = 20;
  // console.log('INNER: ', a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = 'hitesh';

  function two() {
    const website = 'youtube';
    console.log(username);
  }
  // console.log(website)

  two();
}

// one()

if (true) {
  const username = 'Nikhil';
  if (username === 'Nikhil') {
    const website = ' youtube';
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ************** Interesting ************************************************

// Function Declaration
addone(5);
function addone(num) {
  return num + 1;
}

// Function Expression
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));

// Hoisting => JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of function, variables or classes to the top of their scope, prior to execution of the code.

// Any of the following behaviors may be regarded as hoisting:

// 1. Being able to use a variable's value in its scope before the line it declared("Value hoisting")

// 2. being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration Hoisting")

// 3. The Declaration of the
