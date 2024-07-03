// <button type="button">Click me</button>

const formDOM = document.getElementsByTagName('form')[0];

formDOM.innerHTML = '<button type="button">Click me</button>'


const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');

// ulDOM.innerHTML = `
//   <li>
//                 <p class="title">Duona</p>
//                 <p class="count">1</p>
//             </li>
//             <li>
//                 <p class="title">Sviestas</p>
//                 <p class="count">2</p>
//             </li>
//             <li>
//                 <p class="title">Pomidoras</p>
//                 <p class="count">3</p>
//             </li>
//             <li>
//                 <p class="title">Agurkas</p>
//                 <p class="count">1</p>
//             </li>
//             <li>
//                 <p class="title">Grietine</p>
//                 <p class="count">2</p>
//             </li>`


const products = [
    {
        title: 'Duona',
        count: 1,
    },
    {
        title: 'Sviestas',
        count: 2,
    },
    {
        title: 'Pomidoras',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
    {
        title: 'Grietine',
        count: 2,
    },
    {
        title: 'Desra',
        count: 1,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {

HTML += `
<li>
<p class="title">${products[i].title}</p>
<p class="count">${products[i].count}</p>
</li>`;

}

ulDOM.innerHTML = HTML;







