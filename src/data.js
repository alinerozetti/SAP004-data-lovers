export const listing = (dataPokemon) => {
  const pokemons = dataPokemon.map(poke => {
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

export const listingType = (dataPokemon) => {
  const pokemon = dataPokemon;
  const types = pokemon.reduce(function (prev, curr) {
    return [...prev, ...curr.type];
  }, []);
  const newSet = new Set(types);
  return [...newSet]
};

export const orderByName = (dataPokemon) => {
  return listing(dataPokemon).sort((a, b) => a.name > b.name ? 1 : -1);
};

export const orderByWeight = (dataPokemon) => {
  return listing(dataPokemon).sort((a, b) =>
    parseFloat(a.weight.substring(0, a.weight.length - 3)) > parseFloat(b.weight.substring(0, b.weight.length - 3)) ? 1 : -1);
};

export const nameSearch = (dataPokemon, namePokemon) => {
  const nameSearchPokemons = listing(dataPokemon).filter(poke => {
    return poke.name.toUpperCase().indexOf(namePokemon.toUpperCase()) === 0;
  });
  return nameSearchPokemons;
};

export const getByNum = (dataPokemon, pokemonNum) => {
  const pokemon = dataPokemon.find(poke => {
    return poke.num === pokemonNum
  })
  return pokemon;
}
export const getById = (dataPokemon, pokemonId) => {
  const pokemon = dataPokemon.find(poke => {
    return poke.id === pokemonId
  })
  return pokemon;
}

export const typeSearch = (dataPokemon, typePokemon) => {
  const typeSearchPokemons = listing(dataPokemon).filter(poke => {

    return poke.type[0] === typePokemon || poke.type[1] === typePokemon;
  });
  return typeSearchPokemons;
};

