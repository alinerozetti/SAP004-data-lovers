// import { example, anotherExample } from '../src/data.js';
import { typeSearch, listing, orderByName } from '../src/data.js';


describe('pokemon', () => {
  it('quando o tipo for gelo todos os pokemons retornados tem que ser de gelo', () => {
    expect(typeSearch("Ice").every(poke => poke.type.includes("Ice"))).toBe(true);
    expect(typeSearch("Ice").length).toBe(5);
  });

  it('quando filtrar o elemento number ele retorna os pokemons ordenados', () => {
    expect(listing()[0].num).toBe("001");
    expect(listing()[150].num).toBe("151");
  });

  it('quando filtrar o elemento ordenar  ele retorna os pokemons ordenados', () => {
    expect(orderByName()[0].name[0]).toBe("A");
    expect(orderByName()[150].name[0]).toBe("Z");
  });

  // it('quando filtrar o elemento Weight  ele retorna os pokemons ordenados', () => {
  //   const weightOrder = orderByWeight();
  //   console.log(weightOrder[0], weightOrder[1],
  //     parseFloat(weightOrder[0].weight), parseFloat(weightOrder[1].weight))
  //   expect(parseFloat(weightOrder[0].weight) > parseFloat(weightOrder[1].weight)).toBe(true);
  // });

  /*it('quando pesquisar o pokemon pelo nome ira aparecer o pokemon', () => {
    expect(nameSearch()[0].name).toBe("Bulbasaur");
    expect(nameSearch()[150].name).toBe("Mew");
  });*/



});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
