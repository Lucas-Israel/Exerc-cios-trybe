// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
  event.preventDefault()
});

INPUT_CHECKBOX.addEventListener('click', (event) => {
  event.preventDefault()
});

function checkName(event) {
  var charCode = event.charCode;
  if (charCode != 0) {
    if (charCode != 97) {
      event.preventDefault();
      console.log('Valido somente a');
    }
  }
}

INPUT_TEXT.addEventListener('keypress', checkName, false);

// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault