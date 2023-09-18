for (let i = 1; i < 100; i++) {
  if (i === 50) {
    console.log("Half way there!");
    continue;
  }

  if (i === 100) {
    console.log("You made it");
    continue;
  }

  if (i % 10 === 0) {
    console.log("Checkpoint !", i);
  }
}
console.log("all done");
