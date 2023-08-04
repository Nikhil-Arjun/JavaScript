// for of
// -> The for...of statement creates a loop iterating over iterable objects (including Array, Map, set, arguments Objects and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

// ["","",""]
// [{},{},{}]

// syntax ->
// for (variable of object)
//   statement
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = 'Hello World';

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

//Map->
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value);
}

// Not iterable
const myObject = {
  game1: 'NFS',
  game2: 'Modern warfare',
  game3: 'GTA 5',
};

for (const [key, value] of myObject) {
  // console.log(key, ':-', value);
}
