//Tasks->
// 1.Write a function to download data from a url
// 2.Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a new url

function fetchCustome(url, fn) {
  // download content of the url
  // This downloading can take sometimes
  // we will download the content fromm url, and them whatever is the result, we will pass to the callback
  console.log('Starting downloading from', url);
  setTimeout(function process() {
    console.log('Download Completed');
    let response = 'Dummy data';
    fn(response);
  }, 3000);
}

function writeFile(data, fn) {
  // this function writes data in a new file
  console.log('Started writing data');
  setTimeout(function process() {
    console.log('Writing Completed');
    let filename = 'output.ext';
    fn(filename);
    console.log('writing ended');
  }, 4000);
}

function uploadFile(filename, newurl, fn) {
  console.log('upload started');
  setTimeout(function process() {
    console.log('file', filename, 'Upload Completed on', newurl);
    let uploadResponse = 'SUCCESS';
    fn(uploadResponse);
    console.log('Upload ended');
  }, 4000);
}

fetchCustome('www.google.com', function downloadCallback(response) {
  console.log('Download response is', response);
  writeFile(response, function writeCallback(filenameResponse) {
    console.log('new file written is', filenameResponse);
    uploadFile(
      filenameResponse,
      'www.drive.google.com',
      function uploadcallback(uploadResponse) {
        console.log('Successfully uploaded, uploadResponse');
      }
    );
  });
});

// This is callback hell.
