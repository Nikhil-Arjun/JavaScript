// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter(word => {
//   return word.length > 6;
// });

// console.log(result);
/*
// Filtering out all small values
const isBigEnough = value => {
  return value >= 10;
};

const Values = [12, 5, 8, 130, 44];
const filterValue = Values.filter(isBigEnough);
console.log(filterValue);

// find all prime numbers in an array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const isPrime = num => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const newArray = array.filter(isPrime);
console.log(newArray);
*/

const nums = [5, 6, 7, 8, 9, 10];

const evenNums = nums.filter(num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});

console.log(nums);
console.log(evenNums);
