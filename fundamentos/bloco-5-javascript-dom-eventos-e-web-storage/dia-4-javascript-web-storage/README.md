Para criar um cookie: 'document.cookie' uma string contendo o nome e o valor do que se pretende armazenar:


document.cookie = 'email=isabella@email.com';


O cookie é deletado quando fechamos o navegador. Para que isso não aconteça, adicionar uma data para expiração:


document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';


O parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.


document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';


O Javascript permite que você atribua document.cookie a uma variável. Conseguirá ler as informações que estão armazenadas. O que será retornado é uma string contendo o nome e o valor do cookie. Quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.


const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com


Alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação.


document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';


Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:


document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'


---------------- cookies ----------------

---------------Local e Session Storage-------------

'localStorage' - salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado

'sessionStorage' - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba (tab) ou o navegador (browser).

o 'localStorage' quanto o 'sessionStorage', armazenam dados no formato chave e valor e os valores salvos serão sempre no formato string.

transformar o dado em uma string 'JSON.stringify()' e transformar o dado de volta para o formato original JSON.parse().


const myObj = {
  name: 'Link',
  age: 20,
};

transformar este objeto em uma string: `JSON.stringify()`

localStorage.setItem('myData', JSON.stringify(myObj));

o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.

recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string: função `JSON.parse()`.

const recoveredObject = JSON.parse(localStorage.getItem('myData'));


mais exemplos do que pode ser salvo no localStorage ou sessionStorage:

let organization = {
  name: 'trybe',
  since: 2019,
};

// A variável 'storage' pode ser localStorage ou sessionStorage
let storage = localStorage;

storage.setItem('trybe', JSON.stringify(organization));
let org = JSON.parse(storage.getItem('trybe'));
console.log(org); // { name: 'trybe', since: 2019 }

let classes = ['2019/set', '2019/oct'];
storage.setItem('classes', JSON.stringify(classes));
let cls = JSON.parse(storage.getItem('classes'));
console.log(cls); // ['2019/set', '2019/oct']

`.setitem(chave, valor)` para salvar.
`.setitem(name, gabriel)`