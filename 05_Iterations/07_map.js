//Map
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));

map1.set('a', 97);

console.log(map1.get('a'));

console.log(map1.size);

map1.delete('b');

console.log(map1.size);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map(num => {
//   return num + 10;
// });

const newNums = myNumbers
  .map(num => num * 10)
  .map(num => num + 1)
  .filter(num => num >= 40);

console.log(newNums);
