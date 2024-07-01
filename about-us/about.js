const h1DOM = document.getElementById('title');

console.log(h1DOM);


const pDOM = document.getElementsByTagName('p');
console.log(pDOM[0].textContent.trim());


console.log(h1DOM.innerText.toUpperCase());
// console.log(pDOM.innerText);


const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM[0]);

console.clear();

const liDOM = ulDOM[1].getElementsByTagName('li');
console.log(liDOM);


for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText);
}

