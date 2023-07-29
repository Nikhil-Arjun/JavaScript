const marvel_heros = ['thor', 'Ironman', 'Spiderman'];
const dc_heros = ['Superman', 'Flash', 'batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_Heros = marvel_heros.concat(dc_heros); // Combine two or more arrays
// console.log(marvel_heros);

// Spread Operator
// elements from an object or array need to be included in a new array or object
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray('Nikhil')); // Checking while givrn argument is array or not
console.log(Array.from('Nikhil')); //Creates an array from an iterable object

let score1 = 100;
let socre2 = 200;
let score3 = 300;

console.log(Array.of(score1, socre2, score3)); //Returns a new array from a set of elements.
