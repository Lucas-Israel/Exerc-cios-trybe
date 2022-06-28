const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const abc = ([nome, marca, ano]) => ({nome, marca, ano});
console.log(abc(palio));
console.log(abc(shelbyCobra));
console.log(abc(chiron));
