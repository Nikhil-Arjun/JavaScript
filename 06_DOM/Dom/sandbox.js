// The query selector
// const para = document.querySelector('div.error');
// console.log(para);

// Multiple querySelectorAll
// const paras = document.querySelectorAll('p');S
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//   console.log(para);
// });

// console.log(errors);

/******Other ways to Query the DOM *********/

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

/*** Methods ****

# HTMLCollection Methods
.item()
.namedItem()

#Node List methods
.item()
.entries()
.forEach()
.keys()
.values()

*/

// #Adding and Changing page content
const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = ' ninjas are awesome!';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//   // console.log(para.innerText);
//   para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2<h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// #Getting and setting Attributes
/*
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'background-color:#41e789');

*/

// #Changing CSS style
/*
const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = '#41e789';
title.style.backgroundColor = '#FFFDD0';

title.style.fontSize = '60px';
title.style.margin = '';
*/

// #Adding and Removing classes

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   if (p.textContent.includes('error')) {
//     p.classList.add('error');
//   } else if (p.textContent.includes('success')) {
//     p.classList.add('success');
//   } else {
//     return 2 + 2;
//   }
// });

// const title = document.querySelector('.title');
// title.classList.toggle('test');
