const items = ["light", "banana", "phone", "book", "mouse"];

const plurals = items.map(item => {
  if (item === "mouse") {
    return "mice";
  } else {
    return item + "s";
  }
});

console.log(items);
console.log(plurals);
