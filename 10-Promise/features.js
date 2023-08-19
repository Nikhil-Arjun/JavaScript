//Tasks->
// 1.Write a function to download data from a url
// 2.Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a new url

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log('Started downloading from', url);
    setTimeout(function processDownloading() {
      let data = 'Dummy data';
      console.log('Download Completed');
      resolve(data);
      // resolve("nikhil")   these line will not br executed as promise is fulfilled only once.
      // resolve(1234)
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log(`Started writing ${data} in a file`);
    setTimeout(function processWriting() {
      let filename = 'result.txt';
      console.log('File written successfully');
      resolve(filename);
    }, 3000);
  });
}

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log('Upload started on url', url, 'filename is', file);
    setTimeout(function processUpload() {
      let result = 'Success';
      console.log(`Uploading done`);
      resolve(result);
    }, 5000);
  });
}

// let data = fetchData('www.datadrive.com');
// let filename = writeFile(data);
// let response = uploadData(filename, 'www.drive.google.com');
// the above will not work in reqd fashion.

// let downloadPromise = fetchData('www.datadrive.com');
// downloadPromise.then(function processDownload(value) {
//   console.log('Download promise fulfilled');
//   let writePromise = writeFile(value);
//   writePromise.then(function processWrite(value) {
//     console.log('Writing done');
//     console.log('filename is', value);
//   });
// });
// above piece of code solves inversion of control but still gets promise hell

let downloadPromise = fetchData('www.datadrive.com');
x = downloadPromise
  .then(function processDownload(value) {
    console.log('Downloading is done with the following value', value);
    return value;
  })
  .then(function processWrite(value) {
    console.log('inside processWrite');
    return writeFile(value);
  })
  .then(function processUpload(value) {
    console.log('inside processUpload');
    return uploadData(value, 'www.drive.google.com');
  })
  .then(function process() {
    console.log('Done');
  });

// Event queue, Event loop is already in JS.
// Read about microtask
