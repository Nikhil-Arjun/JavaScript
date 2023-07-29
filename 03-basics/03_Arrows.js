// this keyword => the value of this keyword is determined by how a function is called (runtime binding)

// In non-stric mode, *this* is always a reference to an object. In strict mode, it can be any value.
// *this* depends on - function, class or global
const user = {
  username: 'Nikhil',
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = 'Sam';
// user.welcomeMessage();

// console.log(this);

// function ref_val() {
//   // let username = 'Nikhil';
//   console.log(this);
// }

// ref_val()

// const name = function () {
//   let username = 'Nikhil';
//   console.log(this.username);
// };

// name(); // undefined

// Arrow function
// An arrow function expression has a shorter syntax compared to function expressions and does not have its own (this, arguments, super or new.target)
// Arrow functions are always anonymous

// Two factors influence the introduction of arrow function:
// 1.Shorter function
// 2.non-binding of this

// using this =>

// const name = () => {
//   let username = 'Nikhil';
//   console.log(this);
// };

// name();

// Explicit Return => when you use return keyword in {} curly brackets
const addTwoValue = (num1, num2, result) => {
  return `${num1} + ${num2} = ${(result = num1 + num2)}`;
};

console.log(addTwoValue(2, 2));

// Implicit return => without return and { }

const mulTwoValues = (num1, num2) => num1 * num2;

console.log(mulTwoValues(8, 2));
