function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading(url) {
      let data = "Dummy data";
      console.log("Downloading completed");
      resolve(data);
    }, 7000);
  });
}

async function processing() {
  console.log("Entering processing");
  let value1 = await fetchData("www.youTube.com");
  console.log("Youtube donwloading done");
  let value2 = await fetchData("www.google.com");
  console.log("google donwloading done");
  console.log("Exiting processing");
  return value1 + value2;
}

console.log("Start");
setTimeout(function timer1() {
  console.log("timer 1");
}, 0);
console.log("after setting timer1");
let x = processing();
x.then(function (value) {
  console.log("Finally processing promise resolves with", value);
});

setTimeout(function timer2() {
  console.log("timer 2");
}, 1000);

setTimeout(function timer3() {
  console.log("timer 3");
}, 0);

console.log("End");
