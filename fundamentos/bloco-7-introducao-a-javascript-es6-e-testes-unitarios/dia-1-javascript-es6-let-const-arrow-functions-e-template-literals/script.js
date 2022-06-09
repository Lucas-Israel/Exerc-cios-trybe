// const a = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// a(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a,b) => a - b);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// const fat = (num) => {
//  let result = num;
//   for (let index = 1; index < num; index += 1) {
//     result *= index;
//   }
//   return result;
// }

// console.log(fat(5));

// https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript

// bonus

// const fat2 = (num) => (num == 1 || num == 0) ? 1 : num * fat2(num - 1);

// console.log(fat2(6));

// https://www.geeksforgeeks.org/one-line-function-for-factorial-of-a-number/

// const maiorPala = (palavra) => {
//   let arr = palavra.split(' ');
//   let tama = 0;
//   let res = '';

//   for (const a of arr) {
//     if(a.length > tama) {
//       tama = a.length;
//       res = a;
//     }
//   }
//   return res;
// }
// console.log(maiorPala('teste testando testado asfasdasdas asdc asdsadasdasdasd'));

// const btn = document.querySelector('#btn')
// const elemento = document.querySelector('#span');
// let counter = 0;

// const countering = function() {
//   counter += 1;
//   elemento.textContent = counter;
// }

// btn.addEventListener('click', countering);

const arr = ['javascript', 'teste2','css', 'teste3','teste1']

const replacing = (string) => {
  let nov = string.replace(/x/g, 'Bebeto');
  return nov
}

const rereplace = (stg, arra) => {
  arra.sort();
  console.log(`Olá ${replacing(stg)} aqui!
Minhas cinco principais habilidades são:

·${arra.join('\n·')}

#goTrybe.`);
}
rereplace('Tryber x', arr);
