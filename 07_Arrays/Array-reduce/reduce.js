const nums = [5, 10, 15, 20, 25, 30, 35, 40];

// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
// console.log(sum, nums[i]);
//   sum = sum + nums[i];
// }

// console.log(sum);

const sum2 = nums.reduce((result, number) => {
  console.log(result, number);
  return result + number;
}, 0);

console.log("----------");
console.log(sum2);
