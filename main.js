import data from './data/pokemon/pokemon.js';
import { nameSearch, typeSearch, listingType, orderBy, orderByWeight } from './data.js';


const dataPokemon = data.pokemon;
const loadMore = document.getElementById("loadMore");
const loadAll = document.getElementById("loadAll");
const calc = document.getElementById("statistics");
const searchName = document.getElementById("search");
const searchType = document.getElementById("select-element");
const orderName = document.getElementById("select-order");

document.getElementById("btn-name").addEventListener("click", searchNameFilter);
document.getElementById("btn-element").addEventListener("click", searchTypeFilter);
document.getElementById("btn-order").addEventListener("click", orderFilter);
loadMore.addEventListener("click", function () { renderList(dataPokemon, 40) });
loadAll.addEventListener("click", function () { renderList(dataPokemon, 0) });

function searchTypeFilter() {
  const pokemonsFiltro = typeSearch(dataPokemon, "type", searchType.value);
  const qtdPokemon = (pokemonsFiltro.length / 151) * 100;
  calc.classList.remove("hide");
  calc.classList.add("show");
  calc.innerHTML = qtdPokemon.toFixed(0) + "% dos pokemons são deste tipo!";
  document.getElementById("select-element").value = "";
  renderList(pokemonsFiltro, 0);
}

function orderFilter() {
  calc.classList.remove("show");
  calc.classList.add("hide");
  const pokemonsFiltro = orderByValue(orderName.value)
  orderName.value = ""
  renderList(pokemonsFiltro, 0);
}

function orderByValue(value) {
  switch (value) {
    case "name-asc":
      return orderBy(dataPokemon, "name");
    case "name-desc":
      return orderBy(dataPokemon, "name").reverse();
    case "number-asc":
      return orderBy(dataPokemon, "id");
    case "number-desc":
      return orderBy(dataPokemon, "id").reverse();
    case "weight-asc":
      return orderByWeight(dataPokemon, "weight");
    case "weight-desc":
      return orderByWeight(dataPokemon, "weight").reverse();
  }
}

function searchNameFilter() {
  const pokemonsFiltro = nameSearch(dataPokemon, "name", searchName.value);
  calc.classList.remove("show");
  calc.classList.add("hide");
  searchName.value = "";
  renderList(pokemonsFiltro, 0);
}

function renderList(pokemons, qtd) {
  if (qtd == 20) {
    const newList = [];
    for (let index = 0; index < qtd; index++) {
      newList[index] = pokemons[index];
    }
    const html = newList.map(poke => {
      return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${poke.img}" alt=""> ${poke.name}</a></li>`
    });
    document.getElementById("list").innerHTML = html.join("");
  }
  else if (qtd == 40) {
    loadMore.classList.remove("show");
    loadMore.classList.add("hide");
    loadAll.classList.remove("hide");
    loadAll.classList.add("show");
    const newList = [];
    for (let index = 0; index < qtd; index++) {
      newList[index] = pokemons[index];
    }
    const html = newList.map(poke => {
      return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${poke.img}"> ${poke.name}</a></li>`
    });
    document.getElementById("list").innerHTML = html.join("");
  }
  else {
    loadMore.classList.remove("show");
    loadMore.classList.add("hide");
    loadAll.classList.remove("show");
    loadAll.classList.add("hide");
    const html = pokemons.map(poke => {
      return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${poke.img}"> ${poke.name}</a></li>`
    });
    document.getElementById("list").innerHTML = html.join("");
  }
}

function renderType(types) {
  const html = types.map(type => {
    return `<option value="${type}">${type}</option>`
  });
  document.getElementById("select-element").innerHTML = `<option value="">Selecionar</option>` + html.join("");
}

function init() {
  const types = listingType(dataPokemon, "type");
  renderList(dataPokemon, 20)
  renderType(types)
}
init();











