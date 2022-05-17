let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)

let numLivros = 0;

for (let a = 0; a < leitor.livrosFavoritos.length; a +=1) {
    numLivros +=1;
}


console.log(leitor.nome, leitor.sobrenome, "tem", numLivros,"livros favoritos")
