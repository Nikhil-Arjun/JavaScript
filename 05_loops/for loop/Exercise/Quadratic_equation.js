// Program to solve quadratic equation

/*
ax^2 + bx +c = 0
a,b and c are real numbers and 
a != 0

to find the roots of such equation, use the formula,

(root1, root2) = (-b +- sqb^2 - 4ac) /2
*/

let root1, root2;

let a = 4;
let b = 3;
let c = 5;

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
  root1 = root1 = (-b + Math.sqrt(discriminant)) / (2 * a);

  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`${root1} and ${root2}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  // result
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
