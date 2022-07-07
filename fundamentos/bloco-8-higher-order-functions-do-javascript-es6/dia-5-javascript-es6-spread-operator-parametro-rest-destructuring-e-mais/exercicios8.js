// escreva greet abaixo

const greet = (A, B = 'Hi') => `${B} ${A}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
