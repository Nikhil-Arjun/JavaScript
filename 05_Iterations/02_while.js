//while loop statement ->
// A while statement executes its statements as long as a specified conditon evaluates to true.

// syntax ->
// while (condition)
//    statement

let index = 0;
while (index <= 10) {
  // console.log(`Value of index is ${index}`);,
  index += 2; // index = index + 2
}

let myArray = ['Flash', 'batman', 'superman'];

let arr = 0;
while (arr < myArray.length) {
  // console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

// do-while loop
// The do....while statement repeats until a specified condition evaluates to false.

// A do.....while statement looks as follows:

// syntax ->
// do {
//   statement
// } while (condition);

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
