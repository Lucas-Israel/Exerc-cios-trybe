let b1 = document.getElementById('elementoOndeVoceEsta');
// console.log(b1);
let parentb1 = b1.parentElement;
parentb1.style.color = 'red';
let neto = document.getElementById('primeiroFilhoDoFilho');
neto.innerText = 'adicionando texto';
let pai = document.getElementById('pai');
let pFiPai = pai.firstElementChild;
// console.log(pFiPai);
// console.log(b1.previousElementSibling);
let atenOnde = b1.nextSibling;
// console.log(atenOnde);
let terFiOnde = b1.nextElementSibling;
// console.log(terFiOnde);
let terFiPai = pai.lastElementChild.previousElementSibling;
// console.log(terFiPai);

const irmEleOnVcEs = document.createElement('section');
irmEleOnVcEs.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmEleOnVcEs);

const eleChild = document.createElement('section');
eleChild.id = 'childElementoOndeVoceEsta';
b1.appendChild(eleChild);

const bisneto = document.createElement('section');
bisneto.id = 'neto';
neto.appendChild(bisneto);

console.log(bisneto.parentElement.parentElement.nextElementSibling)

// parte 3

for (let i = pai.childNodes.length - 1; i >=0; i -= 1){
    let filhoAtual = pai.childNodes[i];
    if (filhoAtual.id !== 'elementoOndeVoceEsta'){
        filhoAtual.remove();
    }
}

let segEUltFil = document.getElementById('segundoEUltimoFilho');
segEUltFil.remove();