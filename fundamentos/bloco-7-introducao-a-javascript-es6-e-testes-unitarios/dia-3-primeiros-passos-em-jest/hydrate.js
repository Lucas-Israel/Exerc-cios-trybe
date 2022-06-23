const hydrate = (frase) => {
  let reg = /\d/g;
  let numeros = frase.match(reg);
  let sum = 0;
  for (let i in numeros) {
    if (numeros[i] > 0 && numeros[i] < 10) {
      sum += parseInt(numeros[i], 10);
    }
  }
  if (sum < 2) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = hydrate;