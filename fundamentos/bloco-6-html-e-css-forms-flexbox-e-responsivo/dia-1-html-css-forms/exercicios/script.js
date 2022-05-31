const button = document.querySelector('#enviar');
const buttonLimp = document.querySelector('#limpar');

// button.addEventListener('click', event => {
//   event.preventDefault();
// });

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

buttonLimp.addEventListener('click', () => {
  clearFields();
});

function textInputValidation() {
  const email = document.querySelector('#input-senha').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#areatxt').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === true) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

button.addEventListener('click', (event) => {
  handleSubmit(event);
});
