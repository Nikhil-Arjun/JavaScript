// Loops -> The various loop mechanisms offer different ways to determine the start and end points of the loop.There are various situations that are more easily served by one type of loop over the others.

// for loop statement ->
// A for loop repeats until a specified condition evaluates to false.The JavaScript for loop is similar to the jave and C for loop.

// for statement looks as follows->

// for (initialization; condition; afterthought)
//      statement

// Syntax ->
// for (let index = 0; index < array.length; index++){
//     const element = array[index];
// }

// Print number 1 to 10
for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log('5 is best number');
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i * j);
  }
}

let myArray = ['Flash', 'Batman', 'Superman'];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break and continue

// break statement -> Use the break statement to determine a loop,switch, or in conjuctuin with labeled statement.

// for (let i = 0; i <= 20; i++) {
//   if (i == 5) {
//     console.log('Detected 5');
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

// continue statement -> the continue statement can be used to restart a while, do-while, for, or label statement

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log('Detected 5');
    continue;
  }
  console.log(`Value of i is ${i}`);
}
