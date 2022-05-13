// const comida = 'pão na chapa';
// const bebida = 'cafezinho';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }


//  AND
// const currentHour = 0;
// let message = "";

// if (currentHour >= 22 && currentHour <= 23.59){
//     message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18 && currentHour < 22){
//     message = "Rango da noite, vamos jantar :D";
// }
// else if (currentHour >= 14 && currentHour < 18){
//     message = "Vamos fazer um bolo pro café da tarde?";
// }
// else if(currentHour >= 11 && currentHour < 14){
//     message = "Hora do almoço!!!";
// }
// else if (currentHour >= 4 && currentHour < 11){
//     message = "Hmmm, cheiro de café recém passado";
// }
// else if(currentHour >= 0 && currentHour < 4){
//     message = "Não deveríamos comer nada, é hora de dormir";
// }
// else {
//     message = "Não é uma hora valida";
// }

// console.log(message);
//--------

// OR

// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// let weekDay = "quarta-feira";
// let message = "";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     message = "Oba, mais um dia de aprendizado na Trybe >:D";
// }

// else {
//     message = "FINALMENTE, descanso merecido UwU"; // GZUS, UwU?????
// }
// console.log(message);

//--------------

// Operador NOT

// Vamos iniciar com um exemplo do que o NOT é capaz, você consegue prever o que esse código vai imprimir?
// Copiar
//   console.log((2 + 2) === 4);
// Isso aqui deve nos retornar true, não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. Agora, se adicionarmos o operador NOT antes dessa declaração?
// Copiar
//   console.log(!(2 + 2) === 4);
// Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔
// Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true, podemos gerar o resultado oposto simplesmente fazendo !variável. Ou seja, false.
// Então, sabendo que o resultado original da operação ali em cima é true, quando a gente insere o operador NOT antes da operação, teremos o valor contrário a nossa resposta final, que é false.
// Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:
// Strings...
// Copiar
// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false
// Números...
// Copiar
// console.log(!42); // false

// console.log(!0); // true
// // O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
// Valores nulos...
// Copiar
// console.log(!null); // true
// Valores indefinidos..
// Copiar
// console.log(!undefined); // true