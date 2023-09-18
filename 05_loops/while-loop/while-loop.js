const greeting = "Hola!";

let number = 0;
// Without increment (number++ in this e.g.) loop will become infinite loop.
while (number < 3) {
  //while(true)
  console.log(number, greeting);
  number++;
}

console.log("All done");
