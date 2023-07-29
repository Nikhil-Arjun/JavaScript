let score = true;

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a number)
// true => 1; false =>0

let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

// Truthy and falsy values
// Falsy values => undefined, NaN, "" , 0, null
// 1 => True; 0=> false
// " " => false
// "hitesh" => true

// Truthy values => Any vakues (Number and string)

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************** Operations *********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2); // Addition
// console.log(2 - 2); // Subtraction
// console.log(2 * 2); // Multiplication
// console.log(2 ** 3); // Power of
// console.log(2 / 3); // Divide
// console.log(2 % 3); // Modules (useful in cryptography)

let str1 = 'Hello ';
let str2 = 'Nikhil';

let str3 = str1 + str2;
// console.log(str3);

// console.log('1' + 2);
// console.log(1 + '2');
// console.log('1' + 2 + 2);
// console.log(1 + 2 + '2');

// console.log(+true);
// console.log(+'');

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);

// Postfix increment
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

// Prefix increment
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
