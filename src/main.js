import { listing, nameSearch, completeListing } from './data.js';

const pokemons = listing();
const html = pokemons.map(pokemon => {
  return `<li><img src="${pokemon.img}" alt=""> ${pokemon.id} ${pokemon.name}</li>`
})

document.getElementById("list").innerHTML = html.join("");


// console.log(nameSearch("Ivysaur"));

console.log(completeListing(1));


