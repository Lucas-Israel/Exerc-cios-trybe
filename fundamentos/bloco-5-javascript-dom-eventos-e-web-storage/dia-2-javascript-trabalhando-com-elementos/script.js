// Exercicio 1

let body = document.body;

let h1Title = document.createElement('h1');
h1Title.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1Title);

// Exercicio 2

let mainContent = document.createElement('main');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// Exercicio 3

let sectionCre = document.createElement('section');
sectionCre.classList.add('center-content');
mainContent.appendChild(sectionCre);

// Exercicio 4

let tagP = document.createElement('P');
tagP.innerText = 'algum texto';
sectionCre.appendChild(tagP);

// Exercicio 5

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
mainContent.appendChild(sectionLeft);

// Exercicio 6

let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
mainContent.appendChild(sectionRight);

// Exercicio 7

let leftImg = document.createElement('img');
leftImg.className = 'small-image';
leftImg.src = 'https://picsum.photos/200';
sectionLeft.appendChild(leftImg);

// Exercicio 8

let rightLi = document.createElement('ul');
sectionRight.appendChild(rightLi);
let arr = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];
for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    rightLi.appendChild(li);
}

// Exercicio 9

for (let i = 1; i <= 3; i += 1){
let h3Main3 = document.createElement('h3');
h3Main3.innerHTML = 'Teste';
mainContent.appendChild(h3Main3);
};

// Parte 2

// Exercicio 1

h1Title.className = 'title';

// Exercicio 2

let eleh3 = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1){
    eleh3[i].className = 'description';
}

// Exercicio 3

let removendoLeft = document.getElementsByClassName('left-content')[0];
mainContent.removeChild(removendoLeft);

// Exercicio 4

let movendoRight = document.getElementsByClassName('right-content')[0];
movendoRight.style.marginRight='auto';

// Exercicio 5

let mudaCorSection = document.getElementsByClassName('center-content')[0];
mudaCorSection.parentNode.style.backgroundColor = 'green';

// Exercicio 6

let listLength = rightLi.children.length;
for (let i = listLength - 1; i > listLength - 3; i-= 1) {
  let child = rightLi.children[i];
  child.remove();
}
