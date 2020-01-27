// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.
const table = new Array(10)

const randomTab = table.fill(0).map(el => Math.floor(Math.random() * 10) + 1);
console.log(randomTab);
