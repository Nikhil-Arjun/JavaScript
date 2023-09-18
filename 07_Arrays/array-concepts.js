let animals = ["monkey", "dog", "cat", "koala"];

console.log(animals);

// Access array elements by using indices
const monkey = animals[0];
console.log(monkey);

const koala = animals[3];
console.log(koala);

// add the element in last position of an array
animals.push("elephant");
console.log(animals);

// remove the element from last position of an array
animals.pop();
console.log(animals);

// adding element at first position of an array
animals.unshift("Lion");
console.log(animals);

// removing element from first position of an array
animals.shift();
console.log(animals);

// for more array methods go to
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
