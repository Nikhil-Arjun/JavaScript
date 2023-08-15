/*
Closures ->
When a function "remembers" it's lexical scope even when the function is executed outside that lexical scope
*/

// e.g.1
// function todo1(task) {
//   console.log('Start of todo...');
//   setTimeout(function fun() {
//     console.log('Completed', task);
//   }, 5000);
//   console.log('End of todo...');
// }

// console.log('Starting');
// todo('assignments');
// console.log('Ending');

// // e.g.2
// function todo(task) {
//   console.log('Starting todo...');
//   setTimeout(function func() {
//     console.log('Completed', task);
//   }, 5000);

//   task = 'Nikhil';
//   console.log('End of todo...');
// }

// console.log('Starting');
// todo('assignments');
// console.log('Ending');

// //e.g.3
// function a(name) {
//   return function b() {
//     console.log(name);
//   };
// }

// let x = a('Nikhil');
// console.log(x);
// x();

// e.g.4

// Function Scope
// function test() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function execute(task) {
//       console.log(`i: ${i}`);
//     }, i * 1000);
//   }
// }

// test();

//Block scope
// function test() {
//   for (let j = 0; j < 3; j++) {
//     setTimeout(function execute(task) {
//       console.log(`j: ${j}`);
//     }, j * 1000);
//   }
// }

// test();
