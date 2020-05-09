// import { example, anotherExample } from '../src/data.js';
import { typeSearch } from '../src/data.js';

const pokemons = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ]
}]

describe('pokemon', () => {
  it("testa o tipo do pokemon", () => {
    expect(typeSearch(pokemons, "type", "Grass")).toEqual([{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }]);
  });
});






// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
