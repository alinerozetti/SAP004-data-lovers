import { getByNum } from './data.js';

function init() {
  const params = new URLSearchParams(window.location.search);
  const num = params.get("num");
  const namePoke = getByNum(num);

  document.getElementById("name").innerHTML = namePoke.name;
  document.getElementById("imgPoke").src = namePoke.img;
  document.getElementById("type").innerHTML = namePoke.type;
  document.getElementById("weaknesses").innerHTML = namePoke.weaknesses;
  document.getElementById("candy").innerHTML = namePoke.candy;
  document.getElementById("candy-count").innerHTML = namePoke.candy_count;
  document.getElementById("height").innerHTML = namePoke.height;
  document.getElementById("weight").innerHTML = namePoke.weight;

  let evolutions = [];
  if (namePoke.prev_evolution) {
    evolutions = [...namePoke.prev_evolution]
  }
  if (namePoke.next_evolution) {
    evolutions = [...evolutions, ...namePoke.next_evolution]
  }
  const html = evolutions.map(poke => {
    const evolution = getByNum(poke.num)
    return `<li><a href="./detail?num=${poke.num}"><img src="${evolution.img}"> ${poke.name} ${poke.num}</a></li>`
  });
  document.getElementById("evolution").innerHTML = html.join("");
}
init();




