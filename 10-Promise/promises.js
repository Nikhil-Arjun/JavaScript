const promiseOne = new Promise((resolve, reject) => {
  // Do an async task to resolve the promise
  // DB calls.
  // cryptography, network
  setTimeout(() => {
    console.log(`Async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('Promise consumed');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Async 2 resolved');
});
