// Immediately Invoked Function Expressions (IIFE)
// JavaScript Function that runs as soon as it is defined.

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator(). This PRevents accessing variables within the IIFE idiom as well as polluting the global scope.

// 2. The second part creates the immediately invoked function expression () through which the JavaScript Engine will directly interpret the function.

// Syntax
// (function defination) (Execution)

(function dbms() {
  // named IIFE
  console.log('DB CONNECTED');
})();

(() => {
  // Normal IIFE
  console.log('DB CONNECTED TWO');
})();

(name => {
  console.log(`DB CONNECTED THREE ${name}`);
})('Nikhil');
