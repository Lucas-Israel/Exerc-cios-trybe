


---------------Erros do bloco--------------------




Pergunta: `'Qual o retorno obtido quando se usa getElementsByClassName ou getElementsByTagName?'`

minha resposta : 'Um array do tipo NodeList com todos os elementos encontrados'

Alternativa incorreta. As funções citadas retornam um array do tipo HTMLCollection e não do tipo NodeList, como o querySelectorAll faz.

Correção: `'Um array do tipo HTMLCollection com todos os elementos encontrados'`
Diferentemente da função querySelectorAll, que traz um array do tipo NodeList (que representa qualquer "nó" no DOM), as funções getElementsByClassName e getElementsByTagName retornam um array do tipo HTMLCollection (que representam qualquer elemento HTML).


Pergunta: `'Para chamar uma função ao clicar em algum elemento comumente é usado elemento.addEventListener("click", function). De que outra forma é possível fazer a mesma coisa?'`

minha resposta: 'elemento.click(func)'

Alternativa incorreta. `A forma correta é elemento.onclick = func`. A função click() não recebe parâmetros.

correção: `'elemento.onclick = func'`
É possível usar tanto addEventListener quanto onclick para adicionar uma função à ação de clique no elemento.



Pergunta: 

Analise o trecho HTML abaixo:

<section>
  <div id="topo">
    <h2>Título que tá aqui</h2>
    <p>Texto que tá aqui</p>
  </div>
  <ul id="meio">
    <li>Item que tá aqui</li>
    <li>Item que tá lá</li>
    <li>Item que tá acolá</li>
  </ul>
  <footer id="baixo">
    <h3>Menu que tá aqui</h3>
    <ol>
      <li>Item que tá em primeiro</li>
      <li>Item que em segundo</li>
      <li>Item que em terceiro</li>
    </ol>
  </footer>
</section>


Analise também a função abaixo:

function inner (selectID) {
  const selector = document.getElementById(selectID);
  console.log(selector.innerHTML);
}

`O que será enviado para o console ao chamar a função inner("baixo")?`

resposta: 

<footer id="baixo">
  <h3>Menu que tá aqui</h3>
  <ol>
    <li>Item que em primeiro</li>
    <li>Item que em segundo</li>
    <li>Item que em terceiro</li>
  </ol>
</footer>

Alternativa incorreta. O innerHTML retorna todo o conteúdo HTML entre as tags do elemento passado como parâmetro, sem incluir o próprio elemento.

correção: 

<h3>Menu que tá aqui</h3>
  <ol>
    <li>Item que em primeiro</li>
    <li>Item que em segundo</li>
    <li>Item que em terceiro</li>
  </ol>
Alternativa correta. `O innerHTML retorna todo o conteúdo HTML entre as tags do elemento passado como parâmetro.`





























