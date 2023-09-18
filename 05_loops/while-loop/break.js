// let counter = 5;

// while (counter <= 10) {
//   console.log(counter);
//   break;
//   console.log("increasing counter....");
//   counter++;
// }

// console.log("Thanks for playing!");

let score = 0;

while (true) {
  console.log("inside the loop");

  if (score >= 3) {
    break;
  }

  score++;
}

console.log("Done the loop");
