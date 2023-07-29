// Date
// JavaScript Date objects represents a single moment in time in a platform independent format.

// Dates
let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());

// console.log(typeof myDate); //Obejct

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date('2023-01-14');
let myCreatedDate = new Date('01-14-2023');
// console.log(myCreatedDate.toLocaleString());

// to get time
let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
