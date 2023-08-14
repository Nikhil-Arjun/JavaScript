function fun(x, fn) {
  /*
   * x -> number
   * fn -> callback function
   */

  for (let i = 0; i < x; i++) {
    // console.log(i);
  }
  fn(); // calling the callback function passed in
  //some more logic
}

fun(10, function log() {
  // this is the callback function
  // console.log('Custom logger');
});

// e.g

// **** What is Map ****
//-> for all the elements of the given array, it passes the elements as an argument to the callback.

// let arr = [1, 2, 3, 4, 5];
// let x = arr.map(function process(v, i) {
// v -> value
// x -> index

// console.log(v, i);
// return v * v;
// });

// console.log(x);
// console.log(arr);

//********* custom-Map-Function ***********

function mapper(arr, fn) {
  /**
   * arr -> is going to be an array of elements
   * fn -> callback function whicj expects two arguments value and index
   */
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // i -> index, arr[i] -> value
    let res = fn(arr[i], i);
    result.push(res);
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let x = mapper(arr, function cuber(v, i) {
  console.log(v, v * v * v, i);
  return v * v * v;
});

console.log(x, arr);
