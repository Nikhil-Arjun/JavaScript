//Parents,children and siblings

const article = document.querySelector('article');
// console.log(article.children);

const convert = Array.from(article.children);
// console.log(convert);
convert.forEach(child => {
  child.classList.add('article-element');
});

const title = document.querySelector('h2');
const parent = title.parentElement;
console.log(parent.parentElement);
console.log(title.nextElementSibling);
console.log(parent.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);
