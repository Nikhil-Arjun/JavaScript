// Object => used to store various keyed collections and more complex entities.
// created using =>
// 1.singleton
// const tinderUser = new Object();

//2.object literals

const mySym = Symbol('key1');

const JsUser = {
  name: 'Nikhil',
  'full name': 'Nikhil Arjun',
  [mySym]: 'mykey1',
  age: 26,
  location: 'Mumbai',
  email: 'nikhil@google.com',
  isLoggedIn: false,
  lastLohinDays: ['Monday', 'Saturday', 'Sunday'],
};

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

JsUser.email = 'Nikhil@chatgpt.com';
// Object.freeze(JsUser);

JsUser.email = 'Nikhil@chatgpt.com';
// console.log(JsUser);

JsUser.greeting = function () {
  console.log('Hello Js user');
  return 2 + 2;
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
  return 2 + 1;
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
