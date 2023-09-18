// and or operators
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("--------------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("--------------");

console.log(!true);
console.log(!false);

// Truth table
// AND ->
// true - 1 and false - 0

// X    | Y || result
//  0   |   0   ||  0
//  0   |   1   ||  0
//  1   |   0   ||  0
//  1   |   1   ||  1

// OR ->
// true - 1 and false - 0

// X    | Y || result
//  0   |   0   ||  0
//  0   |   1   ||  1
//  1   |   0   ||  1
//  1   |   1   ||  1

// NOT->
// true - 1 and false - 0

// x | Result
// 0 | 1
// 1 | 0
