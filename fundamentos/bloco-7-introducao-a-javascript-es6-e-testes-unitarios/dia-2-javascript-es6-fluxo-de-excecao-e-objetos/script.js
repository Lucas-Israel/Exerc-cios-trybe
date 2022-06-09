const check = (value1, value2) => {
  if (value1 === ''|| value2 === '') {
    throw new Error ('Não deixar nenhuma caixa vazia.')
  }
};

function sum() {
  let value1 = document.getElementById('value1').value;
  let value2 = document.getElementById('value2').value;
  const result = parseInt(value1) + parseInt(value2);
  try {
    check(value1, value2);
    document.getElementById('result').innerText = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    return alert(error.message);
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}