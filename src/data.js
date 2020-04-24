import data from './data/pokemon/pokemon.js';

export const listing = () => {
  const pokemons = data.pokemon.map(poke => {
    return {
      img: poke.img,
      name: poke.name,
      num: poke.num,
    }
  })
  return pokemons;
};

export const nameSearch = (name) => {
  let pokemons = listing().filter(pokemon => {
    return pokemon.name === name;
  })
  return pokemons;
};

