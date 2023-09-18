const fruit = true && "bananas";
console.log(fruit);

console.log(false && "oranges");
console.log(0 && "Cucumbers");

console.log("----------");

console.log(true || "oranges");
console.log(false || "bananas");
console.log("" || "Cucumbers");

console.log("-----------");

console.log(0 ?? "Monkeys");
console.log("" ?? "koalas");
console.log(null ?? "elephants");

// Truthy and falsy values

// JS Falsy values
// false
// 0
// ""
// null
// undefined
// NaN

// Truth Values
// All values expect above falsy values
