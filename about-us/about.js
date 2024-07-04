import { header } from "../js/header.js";





const h1DOM = document.getElementById('title');

console.log(h1DOM);


const pDOM = document.getElementsByTagName('p');
console.log(pDOM[0].textContent.trim());


console.log(h1DOM.innerText.toUpperCase());
// console.log(pDOM.innerText);


// const ulDOM = document.getElementsByTagName('ul');
// console.log(ulDOM[0]);

console.clear();




// const liDOM = ulDOM[0].getElementsByTagName('li');

// for (let i = 0; i < liDOM.length; i++) {
//     liDOM[i].innerText = (i+1) + ') ' + liDOM[i].innerText;
// }


// const liDOM2 = ulDOM[1].getElementsByTagName('li');

// for (let i = 0; i < liDOM2.length; i++) {
//     liDOM2[i].innerText = (i+1) + ') ' + liDOM2[i].innerText;
// }


// const liDOM3 = ulDOM[2].getElementsByTagName('li');

// for (let i = 0; i < liDOM3.length; i++) {
//     liDOM3[i].innerText = (i+1) + ') ' + liDOM3[i].innerText;
// }



const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);

let index = 1;
for (const list of ulDOM) {
    const liDOM = list.getElementsByTagName('li')
    // console.log(liDOM);

    
    for (const item of liDOM) {
        // item.innerText = (index++) + ') ' + item.innerText;
        item.innerText = `${index++}) ${item.innerText}`;
        
    }
}

console.clear();

// document.getElementById('');
// document.getElementsByClassName('red');



// const listItemsDOM = document.querySelectorAll('ul:nth-child(6) > li');

const listItemsDOM = document.querySelectorAll('ul > li:first-child, ol > li:first-child');

console.log(listItemsDOM);


const ulItemsDOM = document.querySelectorAll('ul > li:first-child');
console.log(ulItemsDOM);
const olItemsDOM = document.querySelectorAll('ol > li:first-child');
console.log(olItemsDOM);


// const x = [...ulItemsDOM];
// const y = [...olItemsDOM];

// console.log(x);
// console.log(y);

const totalLiDomination = [...ulItemsDOM].concat(...olItemsDOM);
console.log(totalLiDomination);

const totalLiDomination2 = [...ulItemsDOM, ...olItemsDOM];
console.log(totalLiDomination2);


header();
