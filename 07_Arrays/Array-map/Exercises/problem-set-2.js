/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/

const bools = [true, true, false, true, false, false];

const mappedBools = bools.map(function (bool) {
  if (bool === true) {
    return Math.floor(Math.random() * (10 - 1) + 1);
  } else {
    return "Nothing";
  }
});

console.log(bools);
console.log(mappedBools);
