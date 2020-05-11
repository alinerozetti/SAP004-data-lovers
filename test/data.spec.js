import { typeSearch, get, orderBy, orderByWeight } from '../src/data.js';

const pokemons = [
  { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" },
  { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "height": "0.79 m", }];

describe('pokemon', () => {
  it("testa o tipo", () => {
    expect(typeSearch(pokemons, "type", "Grass")).toEqual([
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" }]);
  });

  it("testa o id", () => {
    expect(get(pokemons, "id", 1)).toEqual(
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" });
  });

  it("testa o num", () => {
    expect(get(pokemons, "num", "001")).toEqual(
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" });
  });

  it("testa a ordenação", () => {
    expect(orderBy(pokemons, "name")).toEqual([
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" },
      { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "height": "0.79 m", }]);
  });

  it("teste ordenação por peso", () => {
    expect(orderByWeight(pokemons, "weight")).toEqual([
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" },
      { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "height": "0.79 m", }]);
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
