// Reduce() =>
// The reduce() method executes a user-supplied 'reducer' callback function on each element of the array, in order, passing in the return value from the calculation on the preceding elements.
// The final result of running the reducer across all elements of the array is a single value.

//  easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

// syntax ->
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
// console.log(`acc:${accumulator} and currval: ${currentValue}`);
// return accumulator + currentValue;
// }, 3);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'Js course',
    price: 2999,
  },
  {
    itemName: 'Python Course',
    price: 1599,
  },
  {
    itemName: 'Mobile Dev Course',
    price: 5999,
  },
  {
    itemName: 'Data science course',
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
