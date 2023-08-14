/*
1.SetTimeout
2.SetInterval
These two functions are not by default given to us by JavaScript

#Then how are we able to use it ?
- setTimeout - It is a function that helps to execute some task after a certain timer *(One time only)
-Syntax ->
    SetTimeout(taskCallback(handler), time in ms)
    1000 -> 1sec

    e.g. const id = setTimeout(function() {
      console.log("Hello")
    }, 1000)

    id = Returns an unique id

    clearTimeout( unique id) => timer get nullified, so that setTimeout (unique id function) is not executed anymore.
*/

let id1 = setTimeout(function execute1() {
  // some task
  console.log('task completed 1');
}, 10000);

let id2 = setTimeout(function execute2() {
  // some task
  console.log('task completed 2');
  clearTimeout(id1);
}, 5000);

// SetInterval
/* It is a function that helps us to execute some task again and again after a given Interval

Syntax ->
const id = setInterval (taskcallback, interval in ms)

*/
let id3 = setInterval(function () {
  console.log(`task done again`);
}, 3000);

let id4 = setTimeout(function () {
  console.log(id3);
}, 13000);
