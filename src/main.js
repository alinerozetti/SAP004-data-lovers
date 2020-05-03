import { listing, nameSearch, typeSearch, listingType, orderByName, orderByWeight } from './data.js';
const loadMore = document.getElementById("loadMore");
const loadAll = document.getElementById("loadAll");
const calc= document.getElementById("statistics")
document.getElementById("btn-name").addEventListener("click", searchNameFilter);
document.getElementById("btn-element").addEventListener("click", searchTypeFilter);
document.getElementById("btn-order").addEventListener("click", orderNameFilter);
loadMore.addEventListener("click", function(){renderList(listing(), 40)});
loadAll.addEventListener("click", function(){renderList(listing(), 0)});


function renderList(pokemons, qtd) {
  if(qtd == 20){
    const newList = [];
    for (let index = 0; index < qtd; index++) {
      newList[index] = pokemons[index];      
    }
    const html = newList.map(poke => {
      return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${poke.img}" alt=""> ${poke.name}</a></li>`
    });
    document.getElementById("list").innerHTML = html.join("");
  }
  else if(qtd == 40){
    loadMore.classList.remove("show");
    loadMore.classList.add("hide");
    loadAll.classList.remove("hide");
    loadAll.classList.add("show");
    const newList = [];
    for (let index = 0; index < qtd; index++) {
      newList[index] = pokemons[index];      
    }
    const html = newList.map(poke => {
      return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${poke.img}" alt=""> ${poke.name}</a></li>`
    });
    document.getElementById("list").innerHTML = html.join("");
  }
  else{
    loadAll.classList.remove("show");
    loadAll.classList.add("hide");
    const html = pokemons.map(poke => {
      return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${poke.img}" alt=""> ${poke.name}</a></li>`
    });
    document.getElementById("list").innerHTML = html.join("");
  }
}

function renderType(types) {
  const html = types.map(type => {
    return `<option value="${type}">${type}</option>`
  });
  document.getElementById("select-element").innerHTML = `<option value="">Choose</option>` + html.join("");
}

function init() {
  const pokemons = listing();
  const types = listingType();
  renderList(pokemons, 20)
  renderType(types)
}
init();

const searchName = document.getElementById("search");
function searchNameFilter() {
  const pokemonsFiltro = nameSearch(searchName.value);
  calc.classList.remove("show");
  calc.classList.add("hide");
  searchName.value=""
  renderList(pokemonsFiltro, 0);
}

const searchType = document.getElementById("select-element");
function searchTypeFilter() {
  const pokemonsFiltro = typeSearch(searchType.value);
  const qtdPokemon = (pokemonsFiltro.length /151)*100;
  calc.classList.remove("hide");
  calc.classList.add("show");
  calc.innerHTML = qtdPokemon.toFixed(0) + "% dos pokemons são deste tipo!";
  document.getElementById ("select-element").value= "";
  renderList(pokemonsFiltro, 0);
}

const orderName = document.getElementById("select-order");
function orderNameFilter() {
  calc.classList.remove("show");
  calc.classList.add("hide");
  
  if (orderName.value === "name") {
    const pokemonsFiltro = orderByName();
    orderName.value=""
    renderList(pokemonsFiltro, 0);
  }
  if (orderName.value === "number") {
    const pokemonsFiltro = listing();
    orderName.value=""
    renderList(pokemonsFiltro, 0);
  }
  if (orderName.value === "weight") {
    const pokemonsFiltro = orderByWeight();
    orderName.value=""
    renderList(pokemonsFiltro, 0);
  }
}





