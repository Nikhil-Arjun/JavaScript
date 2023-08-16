function fun(inputString, fn) {
  // execute some algorithms the string
  let output = inputString.split(','); //Output is an array

  for (let i = 0; i < output.length; i++) {
    fn(output[i]);
    fn(output[i]);
  }
}

// using it

fun('name: Nikhil, subject: cse', function process(ip) {
  let arr = ip.split(':');
  console.log('{', arr[0], ' => ', arr[1], '}');
});
