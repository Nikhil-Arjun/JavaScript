/*
for (let i = 0; i < 10; i++) {
  // Initializer ; Conditional Check ; Updater
  // code here
}
*/

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

for (let i = 0; i < 100; i += 5) {
  console.log(i);

  if (i === 25) {
    console.log("ha, gotcha");
    continue;
  }

  console.log("This is loop", i);
}

/*
    Create a for loop that prints out the numbers from 5 - 10 (inclusive)
*/

for (let i = 5; i <= 10; i++) {
  console.log(i);
}

for (i = 10; i <= 100; i += 10) {
  if (i === 50) {
    console.log("Halfway There!");
  } else if (i === 100) {
    console.log("You Made It!");
  } else {
    console.log("Congratulations, you're at level " + i);
  }
}
