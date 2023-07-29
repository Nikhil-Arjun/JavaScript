/*
const name = 'Nikhil';
const repo_Count = 50;

// console.log(name + ' ' + repo_Count + ' Value'); <- Concat

// Backstick
console.log(`Hello my name is ${name} and my repo count is ${repo_Count}`);

// New String
const game_Name = new String('Nikhil-arj-338-@-gmail-com');

console.log(game_Name[0]); // to find index of a character
console.log(game_Name.__proto__); // to check which prototyoe is available to use

console.log(game_Name.length); // to check length of string
console.log(game_Name.toUpperCase()); //convert string in Uppercase
console.log(game_Name.charAt(2)); // to check - index of any character
console.log(game_Name.indexOf('N')); // to check character index

const newString = game_Name.substring(0, 4); // to create new string and it returns new string
console.log(newString);

const anotherString = game_Name.slice(-8, 4); //slice the string
console.log(anotherString);

const newStringOne = '  nikhil  ';
console.log(newStringOne);
console.log(newStringOne.trim()); //removes unwanted white space and new lines

const url = 'https://nikhil.com/nikhil%20arjun';
const clear_url = url.replace('%20', '-'); //Replace string char to other char
console.log(clear_url);

console.log(url.includes('nikhil')); // check char is present or not

console.log(game_Name.split('-')); // make a array by spliting
*/
/******************* JavaScript String Methods ***********************/

// JavaScript String length
// The length property returns the number of characters in a string.
// e.g

let sentence = 'Hello JavaScript';

let len = sentence.length;
console.log(len);
//String replace()
// The replace method returns a new string with the specified string/index replaced.

const message = 'ball bat';
let result = message.replace('b', 'c');
console.log(result);

//string indexOf
// returns the first index of occurrence of a value
const message1 = 'Javascript is not java';
const index = message1.indexOf('va');
console.log(index);

// String repeat()
// The repeat() method creates a new string by repeating the given string a specified number of times and returns it.
const holiday = 'Happy Holiday';
const result1 = holiday.repeat(4);
console.log(result1);

// String substring()
// The substring() method returns a specified part of the string between start and end indexes.
const msg = 'Javascript is fun';
const result2 = msg.substring(0, 10);
console.log(result2);
