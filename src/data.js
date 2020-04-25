import data from './data/pokemon/pokemon.js';

export const listing = () => {
  const pokemons = data.pokemon.map(poke => {
    return {
      img: poke.img,
      name: poke.name,
      id: poke.id,
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

export const completeListing = (id) => {
  for (let item of data.pokemon) {
    if (item.id == id) {
      return {
        type: item.type,
        weaknesses: item.weaknesses,
        candy_count: item.candy_count,
        height: item.height,
        weight: item.weight,
        next_evolution: item.next_evolution
      }
    } else {
      console.log("pokemon errado")
    }
  }





  // const pokemons = data.pokemon.map(poke => {
  //   return {
  //     type: poke.type,
  //     weaknesses: poke.weaknesses,
  //     candy_count: poke.candy_count,
  //     height: poke.height,
  //     weight: poke.weight,
  //     next_evolution: poke.next_evolution
  //   }
  // })
  // return pokemons;
};


