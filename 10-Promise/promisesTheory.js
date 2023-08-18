// Because of disadvantges of callbacks ->
// 1. Callback hell (see callbacks.js file)
// 2. Inversion of control -> If there is some part of code which control we are passing to someone else,
// & we don't know how that part will  be executed, this problem called as Inversion of control.

// We need promises
/*
Promises -> 

=> Promises are special JS Objects that are also considered readability enhancers. They get immediately returned from a function setup to return a promise.

=> They act as placeholders for the data we hope to get back from future task.

=> We also attach the functionality we want to defer  until the futute task is done. And promises objects automatically handles execution of this functionality.

-> So promises do two things, one inside JS and one outside JS.
1. It signs up the process required to run in the runtime and gives a placeholder in JS, which has a value property.


** To learn promises in in-depth you need two things **
-> 1. How to create a promises?
-> 2. How to consume a promise?
*/
