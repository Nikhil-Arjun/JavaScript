// function sayMyName() {
//   console.log('N');
//   console.log('I');
//   console.log('K');
//   console.log('H');
//   console.log('I');
//   console.log('L');
// }

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// Functions are one of the fundamental building blocks in JavaScript.

// A function in javascript is similar to a procedure - a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

// To use a function, you must define it somewhere inthe scope from which you wish to call it.
// e.g.
function square(number) {
  return `${number * number}`;
}

const sqr = square(4);
console.log(sqr);

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const result = addTwoNumbers(8, 6);

// console.log('Result: ', result);

function loginUserMessage(username = 'Sam') {
  if (!username) {
    console.log('Please enter a username');
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage('Nikhil'));
console.log(loginUserMessage('Nikhil'));

// Rest operator (...Parameter_name)
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic function in JavaScript.

function calculateCartPrice(val1, val2, ...num1) {
  const result = val1 + val2;
  console.log(result);
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

// ** Function in Objects **

//When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function.

const user = {
  username: 'Nikhil',
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({
  username: 'sam',
  price: 399,
});

// ** Function in Array **
// WHen you pass an array as a parameter, if the function changes the array's values, that changes is visibe outside the function
const myNewArray = [200, 400, 100, 600];

function returnSecondVakue(getArray) {
  return getArray[1];
}

// console.log(returnSecondVakue(myNewArray));
console.log(returnSecondVakue([200, 400, 500, 1000]));
