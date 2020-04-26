import { listing, nameSearch } from './data.js';

document.getElementById("btn-name").addEventListener("click", buscanome);

function renderList(pokemons) {
  const html = pokemons.map(poke => {
    return `<li><a href="/detail?num=${poke.num}"><img src="${poke.img}" alt=""> ${poke.num} ${poke.name}</a></li>`
  });
  document.getElementById("list").innerHTML = html.join("");
}

function init() {
  const pokemons = listing();
  renderList(pokemons)
}
init();

const searchName = document.getElementById("search");
function buscanome() {
  const pokemonsFiltro = nameSearch(searchName.value);
  renderList(pokemonsFiltro);
}

