/*
 ***--- Async Nature of JS ---***
 * How JS handles async operations *
 
 -> JavaScript is a single threaded language. (Not a multi-threaded)

 -> JavaScript by default only supports synchronous code executions.
 *Note-> The above property of sync-codr execution only works for operations natively knows to javaScript.
 */
// console.log('Start');
// for (let i = 0; i < 1000000000; i++) {
//   // some task
// }
// console.log('task done');
// console.log('End');

// O/p-> Start, end , task done (after 7sec timer)

// How ? -> JavaScript Runtime

// Question ->
// We can easily do tasks that take a lot of time to complete without blocktime the code flow.

function process() {
  console.log('Start');
  setTimeout(function exec() {
    console.log('executed some task');
  }, 3500);
  for (let i = 0; i < 10000000000; i++) {
    // some task
  }
  console.log('End');
}

process();

// O/p -> start, for loop execution, end , executed some task

// the condition to start executing tasks from event queue is that.
// 1. The Call stack should be empty i.e no function in the call stack is left to be executed.
// 2. The global code is also done.

// -> Runtime cannot break native JS Execution flow.
