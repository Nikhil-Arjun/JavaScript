function fun(x, fn) {
  /*
   * x -> number
   * fn -> callback function
   */

  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn(); // calling the callback function passed in
  //some more logic
}

fun(10, function log() {
  // this is the callback function
  console.log('Custom logger');
});
