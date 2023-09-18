// program to find sum of first n natural numbers
// 1+2+3+4+5+6 = 21

const recurSum = n => {
  if (n <= 1) {
    return n;
  }
  return n + recurSum(n - 1);
};

let n = 7;
console.log(recurSum(n));
