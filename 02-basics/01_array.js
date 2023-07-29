/*
Array (Object) (Non-primitive type)
-> storing a collection of multiple items under a single variable name
->has members for performing common array operations.

1. JS arrays are resizable and can contain a mix of different data types.

2. JS arrays are not associative arrays and so, array elements cannot be accessed using arbitrary string as indexes

e.g. 
const myArr = [0,1,2,3,4,5]
console.log(myArr[0])  // 0

3. JS Arrays are Zero-indexed.
-> start from 0, then 1, 2...n
-> last element at -1
e.g
              0   1  2  3  4  5   //Positive index
const myArr = [0, 1, 2, 3, 4, 5]
              -6  -5 -4 -3 -2 -1  // negative index

4. JS array-copy operations create shallow copies (change in original array also)
*/

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['Ironman', 'Thor', 'Batman', 'Flash'];

const myArr2 = new Array(1, 2, 3, 4, 6);
// console.log(myArr[1], myHeros, myArr2);

// Array Methods
//myArr.push(6); // Value gets add on last index
//myArr.push(7);

//myArr.pop(); // Value gets remove on last index

myArr.unshift(9); // value insert at the start of the array.

myArr.shift(); // Remove the first element from the array and return it.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// Slice, splice

console.log('A', myArr);

const myn1 = myArr.slice(1, 3); //Returns a copy of a section of an array. For both start and end, a negative index

console.log(myn1);
console.log('B', myArr);

const myn2 = myArr.splice(1, 3); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log('C', myArr);

console.log(myn2);
