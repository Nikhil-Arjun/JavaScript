// How can we write a function to download some data from a url, and not use callbacks
// instead use promises.

// Promises ->
// Promises are special JavaScript Objects ->
// i. How to create a these objects ?
// ii. How to consume a promise ?
// iii. Properties

// How promises works behind the scene ??
// -> The promise Objects we create has $ major properties.
// 1.State
// 2.Value
// 3.onfulfullment
// 4.onReject

// 1.Status/state ->
/*
status shows current promise status.
 i. Pending state (Process stil going on, yet to complete).
 ii. fulfulled state  --> Success
 iii. Rejected state  --> Error
*/

// 2.Value ->
/*
When status of promise is pending, this value property is undefined. The moment promise is resolved (Status -> fulfilled)
the value property is updated from undefined to the new value.(this value we can consider as the returned value/resolved value.)

So, the value property acts like a placeholder till the time promise finishes.
*/

// 3.onfulfilled ->
/*
This is an array, which contains function that we attach to our promise objects.
(to a promise objects we can attach some functions using .then (dot method) method.)

when the value property is updated from undefined, to the new value, JS gives chance ti these attached function one by one within the value property as their
argument.
(If their is no piece of code in the call stack and global code left.)
-> States, value, onfulfillment(f,g,h,i) functions

Syntax -> 
function function_name(parameter) {
  return new Promise (function (resolve, reject) {
    // logic
  })
}

-> new Promise (Promise constructor)
-> function (r,r) -> this constructor takes callback as arguments

-> To create a promise call the promise constructor.

-> The promise constructor takes a callback as an argument

-> The callback passed inside constructor, expects 2 arguments
   - Resolve, Reject
   -> then inside the callback write your logic.

-> If you want to return something on success, then call resolve() function with whatever value you want yo return.

#Question
When do we considered a promise fulfilled ?
-> If we call resolve() function, we consider it fulfillment.
-> We consider it rejected if we call reject();

-> Creation of a promises Object is synchronous.



 */
function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log('Starting fetching from', url);
    setTimeout(function process() {
      let data = 'dummy data';
      console.log('Completed fetching from the database');
      // somehow we need to return the data ? - TODo
      resolve(data); //Return some data from success
    }, 4000);
  });
}

function fetch(url) {
  return new Promise(function (resolve, reject) {
    // any logic
    for (let i = 0; i < 1000000; i++) {
      // some  task
    }
    console.log('Completed');
    resolve('sanket');
  });
}
