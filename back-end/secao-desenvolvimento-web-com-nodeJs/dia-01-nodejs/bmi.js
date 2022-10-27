const ask = require('readline-sync');

const IMC = () => {
  const w = ask.questionFloat('Qual seu peso?')
  const h = ask.question('Qual sua altura em cm?')

  const bmi = w / (h/100) ** 2;

  if (bmi < 18.5) return `Abaixo do peso (magreza)`;
  if (bmi < 25) return `Peso normal`;
  if (bmi < 30) return `Acima do peso (sobrepeso)`;
  if (bmi < 35) return `Obesidade grau I`;
  if (bmi < 40) return `Obesidade grau II`;
  return `Obesidade grau III e IV`;
}

module.exports = { IMC } ;