
// Exercício 1

function ondeMeVejo(){
    let ondeSeVe = document.getElementsByTagName('p')[1];
    ondeSeVe.innerText = 'Ganhando dinheiro';
}
ondeMeVejo()

// Exercício 2

function corDaBox(){
    let corBoxAmarela = document.getElementsByClassName('main-content')[0];
    corBoxAmarela.style.background = 'rgb(76,164,109)';
}
corDaBox()

//Exercício 3

function corDaBoxDentro(){
    let corBoxVermelha = document.getElementsByClassName('center-content')[0];
    corBoxVermelha.style.background = 'white';
}
corDaBoxDentro()

// Exercício 4

function corrigeTagH1(){
    let textTagH1 = document.getElementsByTagName('h1')[0];
    textTagH1.innerText = 'Exercício 5.1 - JavaScript';
}
corrigeTagH1()
