import { typeSearch, nameSearch, listingType, get, orderBy, orderByWeight } from '../src/data.js';

const pokemons = [
  { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" },
  { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "weight": "7.5 kg" },
  { "id": 39, "num": "039", "name": "Jigglypuff", "type": ["Normal"], "weight": "5.5 kg" }];

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
      { "id": 39, "num": "039", "name": "Jigglypuff", "type": ["Normal"], "weight": "5.5 kg" },
      { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "weight": "7.5 kg" }]);
  });

  it("teste ordenação por peso", () => {
    expect(orderByWeight(pokemons, "weight")).toEqual([
      { "id": 39, "num": "039", "name": "Jigglypuff", "type": ["Normal"], "weight": "5.5 kg" },
      { "id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "weight": "6.9 kg" },
      { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "weight": "7.5 kg" }]);
  });

  it("pesquisa os tipos dos pokemons", () => {
    expect(listingType(pokemons, "type")).toEqual(["Normal", "Grass", "Poison", "Flying"]);
  });

  it("procura pelo nome do pokemon", () => {
    expect(nameSearch(pokemons, "name", "Zubat")).toEqual([
      { "id": 41, "num": "041", "name": "Zubat", "type": ["Poison", "Flying"], "weight": "7.5 kg" }]);
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
