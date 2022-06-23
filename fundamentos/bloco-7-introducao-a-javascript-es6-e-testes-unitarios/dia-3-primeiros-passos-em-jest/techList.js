const techList = (nomTec, nome) => {
  let sort = nomTec.sort();
  if (sort[0] === undefined || nome === undefined || nome === '') {
    return 'Vazio!';
  }
  let arr = [];
  for (let index = 0; index < sort.length; index += 1) {
    arr.push({ tech: sort[index] });
    arr[index].name = nome;
  }
  return arr;
}

module.exports = techList;
