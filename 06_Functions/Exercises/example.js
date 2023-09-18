// function declaration

const sayHello = () => {
  console.log("Hello, jello!");
  console.log("meow!");
};

// "Calling" the function

sayHello("moo!");
sayHello("foo!");
sayHello();
sayHello();

// sum of two numbers

const sum = (num1, num2) => {
  return num1 + num2;
};

const result = sum(4, 6);
console.log(result);

// Multiplication of three numbers

const mul = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

const multiplication = mul(4, 3, 5);
console.log(multiplication);

//

const hello = () => {
  console.log("Yo");
  return "hello!";
};

hello();

const result3 = hello();
console.log(result3);
