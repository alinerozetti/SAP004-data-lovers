import { listing, nameSearch } from './data.js';

const pokemons = listing();
const html = pokemons.map(pokemon => {
  return `<li><img src="${pokemon.img}" alt="">${pokemon.num}-${pokemon.name}</li>`
})

document.getElementById("list").innerHTML = html.join("");


console.log(nameSearch("Ivysaur"));
