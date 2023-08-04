// forEach() ->
// The forEach() method executes a provided function once for each array element

// Syntax ->
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// callbackFn -> A function to execute for rach element in the array. Its return value is discarded.
// The function is called with the following arguments:
//    Element ->
//        The current element being processed in the array.
//    index -> The index of the current element ibeing processed n the array
//     array -. the array forEach() was called upon.

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach(item => {
//   console.log(item);
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    language: 'JavaScript',
    languageFileName: 'js',
  },
  {
    language: 'Python',
    languageFileName: 'py',
  },
  {
    language: 'C++',
    languageFileName: 'cpp',
  },
];

myCoding.forEach(item => {
  console.log(item.language);
});
