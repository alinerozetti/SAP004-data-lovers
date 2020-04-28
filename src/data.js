import data from './data/pokemon/pokemon.js';

export const listing = () => {
  const pokemons = data.pokemon.map(poke => {
    return {
      img: poke.img,
      name: poke.name,
      num: poke.num,
      id: poke.id,
      type: poke.type,
      weight: poke.weight
    }
  })
  return pokemons;
};

export const listingType = () => {
  const pokemon = data.pokemon;
  const types = pokemon.reduce(function (prev, curr) {
    return [...prev, ...curr.type];
  }, []);
  return [...new Set(types)];
};

export const orderByName = () => {
  return listing().sort((a, b) => a.name > b.name ? 1 : -1);
};

export const orderByWeight = () => {
  return listing().sort((a, b) =>
    parseFloat(a.weight.substring(0, a.weight.length - 3)) > parseFloat(b.weight.substring(0, b.weight.length - 3)) ? 1 : -1);
};

export const nameSearch = (namePokemon) => {
  const nameSearchPokemons = listing().filter(poke => {
    return poke.name.toUpperCase() === namePokemon.toUpperCase();
  });
  return nameSearchPokemons;
};

export const getByNum = (pokemonNum) => {
  const pokemon = data.pokemon.find(poke => {
    return poke.num === pokemonNum
  })
  return pokemon;
}

export const typeSearch = (typePokemon) => {
  const typeSearchPokemons = listing().filter(poke => {
    for (const tipo of poke.type) {
      return tipo === typePokemon;
    }
  });
  return typeSearchPokemons;
};

