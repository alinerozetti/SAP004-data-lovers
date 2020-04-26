import data from './data/pokemon/pokemon.js';

export const listing = () => {
  const pokemons = data.pokemon.map(poke => {
    return {
      img: poke.img,
      name: poke.name,
      num: poke.num,
      id: poke.id,
    }
  })
  return pokemons;
};

export const nameSearch = (namePokemon) => {
  const nameSearchPokemons = listing().filter(poke => {
    return poke.name === namePokemon;
  });
  return nameSearchPokemons;
};

export const evolution = () => {
  const pokemons = data.pokemon.map(poke => {
    return {
      next_evolution: poke.next_evolution
    }
  });
  return pokemons;
}

export const getByNum = (pokemonNum) => {
  const pokemon = data.pokemon.find(poke => {
    return poke.num === pokemonNum
  })
  return pokemon;

}

