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

function dayZoomIn() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayZoomOut() {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayZoomIn();
dayZoomOut();

function addTarefa(stg) {
  let criar = document.createElement('span');
  let containerTarefas = document.querySelector('.my-tasks');

  criar.innerHTML = stg;
  containerTarefas.appendChild(criar);
}
addTarefa('Cozinhar');

function legendaColoridaSpan(cor) {
  let selectTask = document.querySelector('.my-tasks');
  let Div = document.createElement('div');

  Div.className = 'task';
  Div.style.backgroundColor = cor;
  selectTask.appendChild(Div);
}
legendaColoridaSpan('green');

function taskSelected() {
  let taskSel = document.getElementsByClassName('task selected');
  let task = document.querySelector('.task');

  task.addEventListener('click', function(evento) {
    if (taskSel.length === 0) {
      evento.target.className = 'task selected';
    } else {
      evento.target.className = 'task';
    }
  })
}

taskSelected()

function Daycolor() {
  let dia = document.querySelector('#days');
  let taskSel = document.getElementsByClassName('task selected');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  dia.addEventListener('click', function(evento) {
    let eveTarCor = evento.target.style.color;
    if (eveTarCor !== taskColor) {
      let cor = taskSel[0].style.backgroundColor;
      evento.target.style.color = cor;
    } else if (eveTarCor === taskColor) {
      evento.target.style.color = 'rgb(119,119,119)';
    }
  })
};
Daycolor();

function addNoTare() {
  let getTasklist = document.querySelector('.task-list');
  let input = document.querySelector('#task-input');
  let botao = document.querySelector('#btn-add');

  botao.addEventListener('click', function() {
    if (input.value.length > 0) {
      let novaLinha = document.createElement('li');
      novaLinha.innerText = input.value;

      getTasklist.appendChild(newLi);
      input.value = '';
    } else {
      alert('Error: digite ao menos 1 caractere.');
    }
  })
  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && input.value.length > 0) {
      let novaLinha = document.createElement('li');
      novaLinha.innerText = input.value;

      getTasklist.appendChild(newLi);
      input.value = '';
    }
  })
}

addNoTare();