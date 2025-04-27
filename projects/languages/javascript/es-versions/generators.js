function* iterate(array) {
  for (const item of array) {
    yield item;
  }
}
const it = iterate(["Charmander", "Squirtle", "Pikachu", "Dragonite"]);
console.log(it.next()); // { value: 'Charmander', done: false}
