function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

function criandoNovoBotao(nomeDoBotao) {
  let containerDoBotao = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let novoBotaoID = 'btn-holiday';

  novoBotao.innerHTML = nomeDoBotao;
  novoBotao.id = novoBotaoID;
  containerDoBotao.appendChild(novoBotao);
};
criandoNovoBotao('Feriados');

function apertandoBotaoFeriado() {
  let botaoTrocaDeCor = document.querySelector('#btn-holiday');
  let pegarFeriados = document.querySelectorAll('.holiday');
  let corDeFundo = 'rgb(238,238,238)';
  let corNova = 'white';

  botaoTrocaDeCor.addEventListener('click', function(){
    for (let index = 0; index < pegarFeriados.length; index+= 1) {
      if (pegarFeriados[index].style.backgroundColor === corNova) {
        pegarFeriados[index].style.backgroundColor = corDeFundo;
      } else {
        pegarFeriados[index].style.backgroundColor = corNova
      }
    }
  });
}
apertandoBotaoFeriado();

function sexta(nomeDoBotao){
  let containerDoBotao = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let novoBotaoID = 'btn-friday';

  novoBotao.innerHTML = nomeDoBotao;
  novoBotao.id = novoBotaoID;
  containerDoBotao.appendChild(novoBotao)
}
sexta('Sexta-feira')

function apertandoBotaoSexta() {
  let botaoSexta = document.querySelector('#btn-friday');
  let pegarSexta = document.querySelectorAll('.friday');
  let corDeFundo = 'rgb(238,238,238)';
  let corNova = 'white';

  botaoSexta.addEventListener('click', function(){
    for (let index = 0; index < pegarSexta.length; index+= 1) {
      if (pegarSexta[index].style.backgroundColor === corNova) {
        pegarSexta[index].style.backgroundColor = corDeFundo;
      } else {
        pegarSexta[index].style.backgroundColor = corNova
      }
    }
  });
}
apertandoBotaoSexta();