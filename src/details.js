import data from './data/pokemon/pokemon.js';
import { getByNum, getById } from './data.js';

const dataPokemon = data.pokemon;

function init() {
  const params = new URLSearchParams(window.location.search);
  const num = params.get("num");
  const pokemon = getByNum(dataPokemon, num);
  dicePokemon(pokemon);
  evolutionPokemon(pokemon);
  nextPokemon(pokemon);
  previousPokemon(pokemon);
}
init();

function dicePokemon(pokemon) {
  document.getElementById("name").innerHTML = `${pokemon.name} N°${pokemon.num}`;
  document.getElementById("imgPoke").src = pokemon.img;
  document.getElementById("weaknesses").innerHTML = pokemon.weaknesses.join(" / ");
  document.getElementById("egg").innerHTML = pokemon.egg;
  document.getElementById("spawn_chance").innerHTML = pokemon.spawn_chance;
  document.getElementById("avg_spawns").innerHTML = pokemon.avg_spawns;
  document.getElementById("spawn_time").innerHTML = pokemon.spawn_time;
  document.getElementById("multipliers").innerHTML = pokemon.multipliers;
  document.getElementById("candy").innerHTML = pokemon.candy;
  document.getElementById("candy-count").innerHTML = pokemon.candy_count;
  document.getElementById("height").innerHTML = pokemon.height;
  document.getElementById("weight").innerHTML = pokemon.weight;

  const htmlType = pokemon.type.reduce((pokePreview, pokeNext) => {
    return pokePreview += `<li>${pokeNext}</li>`
  }, "")
  document.getElementById("type").innerHTML = htmlType
}


function evolutionPokemon(pokemon) {
  let evolutions = [];
  if (pokemon.prev_evolution) {
    evolutions = [...pokemon.prev_evolution]
  }
  if (pokemon.next_evolution) {
    evolutions = [...evolutions, ...pokemon.next_evolution]
  }
  const html = evolutions.map(poke => {
    const evolution = getByNum(dataPokemon, poke.num)
    return `<li><a href="./detail?num=${poke.num}"> N°${poke.num}<img src="${evolution.img}">${poke.name}</a></li>`
  });
  document.getElementById("evolution").innerHTML = html.join("");
}

function nextPokemon(pokemon) {
  let pokemonId = pokemon.id + 1;
  if (pokemonId === 152) {
    pokemonId = 1
  }
  const next = getById(dataPokemon, pokemonId)
  const nextId = document.getElementById("next")
  nextId.innerHTML = `${next.name} N°${next.num} <i class="fas fa-arrow-circle-right"></i>`
  nextId.href = `./detail?num=${next.num}`
}

function previousPokemon(pokemon) {
  let pokemonId = pokemon.id - 1;
  if (pokemonId === 0) {
    pokemonId = 151
  }
  const previous = getById(dataPokemon, pokemonId)
  const previousId = document.getElementById("previous")
  previousId.innerHTML = `<i class="fas fa-arrow-circle-left"></i> ${previous.name} N°${previous.num}`
  previousId.href = `./detail?num=${previous.num}`
}


