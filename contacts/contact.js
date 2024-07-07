const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
<header>
    <img class="logo" src="../img/bird.jfif" alt="Logo">
    <nav>nav</nav>
</header>
<main>main</main>
 <footer></footer>`;



 const navDOM = document.querySelector('nav');

 const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'About',
        link: '../about-us/',
    },
    {
        text: 'Products',
        link: '../products/',
    },
    {
        text: 'Contact',
        link: '../contacts/',
    },
    {
        text: 'Sportas',
        link: '../sportas/',
    },
    {
        text: 'Skelbimai',
        link: '../skelbimai/',
    },
 ];


 let navHTML = '';

 for ( const linkData of mainLinksData) {
    if (linkData.text === 'Contact') {
        navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`;
    } else {

        navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
    }
    
 }

 navDOM.innerHTML = navHTML;



 

//  Reikia sukurti masyva, kuriame yra atskirais objektais aprasyti 10 pokemonu, t.y.:
//  -pavadinimas
//  -pagrindine spalva
//  -nuoroda i paveiksliuka is isorinio saltinio
//  -forma (ilgas, apvalus, kvadratinis)
//  -tipas (zeme, oras, vanduo, ugnis...)
// Visus juos reikia sugeneruoti i <main> taga kaip naujus <article> HTML objektus

{/* <article>
<img src="" alt="">
<p>pavadinimas</p>
<p>savybe1</p>
<p>savybe2</p>
<p>savybe3</p>
<a href="nuoroda i oficialu saltini"></a>
</article> */}

// dar reikia bent minimalaus dizaino, gal net panaudoti grid;

// nuoroda turi atsidaryti naujame narsykles tab'e.
 
 
 
 
const pokemonDOM = document.querySelector('main');

const pokemonArticleData = [
   {
       number: '1',
       link: 'https://www.pokemon.com/us/pokedex/vanillish',
       name: 'Vanillish',
       color: 'Blue',
       form: 'Oval',
       type: 'Ice',
   },
   {
        number: '2',
        link: 'https://www.pokemon.com/us/pokedex/minun',
        name: 'Minun',
        color: 'Yellow',
        form: 'Long',
        type: 'Electric',
    },
    {
        number: '3',
        link: 'https://www.pokemon.com/us/pokedex/solrock',
        name: 'Solrock',
        color: 'Brown',
        form: 'Round',
        type: 'Rock',
    },
    {
        number: '4',
        link: 'https://www.pokemon.com/us/pokedex/crobat',
        name: 'Crobat',
        color: 'Violet',
        form: 'Long',
        type: 'Poison',
    },
    {
        number: '5',
        link: 'https://www.pokemon.com/us/pokedex/shinx',
        name: 'Shinx',
        color: 'Blue',
        form: 'Oval',
        type: 'Electric',
    },
    {
        number: '6',
        link: 'https://www.pokemon.com/us/pokedex/magneton',
        name: 'Magneton',
        color: 'Aqua',
        form: 'Round',
        type: 'Electric',
    },
    {
        number: '7',
        link: 'https://www.pokemon.com/us/pokedex/conkeldurr',
        name: 'Conkeldurr',
        color: 'Brown',
        form: 'Rectangle',
        type: 'Fighting',
    },
    {
        number: '8',
        link: 'https://www.pokemon.com/us/pokedex/seedot',
        name: 'Seedot',
        color: 'Grey',
        form: 'Round',
        type: 'Grass',
    },
    {
        number: '9',
        link: 'https://www.pokemon.com/us/pokedex/chespin',
        name: 'Chespin',
        color: 'Green',
        form: 'Oval',
        type: 'Grass',
    },
    {
        number: '10',
        link: 'https://www.pokemon.com/us/pokedex/iron-bundle',
        name: 'Iron Bundle',
        color: 'Red',
        form: 'Round',
        type: 'Ice',
    },  
];


let pokemonHTML = '';

for (const article of pokemonArticleData) {
    pokemonHTML += `
    <article>
        <img class="pokemon-img" src="../img/${article.number}.png" alt="${article.number}">
        <p>Number: ${article.number}</p>
        <a href="${article.link}" target="_blank">Link to site</a>
        <p>Name: ${article.name}</p>
        <p>Color: ${article.color}</p>
        <p>Form: ${article.form}</p>
        <p>Type: ${article.type}</p>       
    </article>`;
      
}

pokemonDOM.innerHTML = pokemonHTML;