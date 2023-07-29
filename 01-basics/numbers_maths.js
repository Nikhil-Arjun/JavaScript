const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3));

const hunders = 1000000;
// console.log(hunders.toLocaleString('en-IN'));

// +++++++++++++++++ Maths ++++++++++++++++++++++=

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.min(4, 3, 6, 8));

console.log(Math.random()); // to get 0 to 1 value
console.log(Math.random() * 10 + 1); // to get 1 to 10 value
console.log(Math.floor(Math.random() * 10) + 1); // to get roundoff value  1 t0 10

const min = 10;
const max = 20;
// to get value 10 to 20

console.log(Math.floor(Math.randomm() * (max - min + 1)) + min);
