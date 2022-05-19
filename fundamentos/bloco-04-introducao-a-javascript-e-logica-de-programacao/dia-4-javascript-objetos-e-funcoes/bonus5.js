let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
};

for(var i in moradores.blocoUm) {
    var item = moradores.blocoUm[i];
    console.log(item['nome'] + ' ' + item['sobrenome']);
}

for(var i in moradores.blocoDois) {
    var item = moradores.blocoDois[i];
    console.log(item['nome'] + ' ' + item['sobrenome']);
}

// https://stackoverflow.com/questions/41247633/accessing-nested-objects-with-a-for-in-loop
