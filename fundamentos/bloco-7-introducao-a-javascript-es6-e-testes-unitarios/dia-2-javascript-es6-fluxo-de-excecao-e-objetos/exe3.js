const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}

const add = (a, b, c) => a[b] = c;
add(lesson2, 'turno', 'noite');

const listaKey = (a) => Object.keys(a);
// console.log(listaKey(lesson2));

const objTam = (a) => listaKey(a).length;
// console.log(objTam(lesson2));

const listaVal = (a) => Object.values(a);
// console.log(listaVal(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
// console.log(allLessons);

const nAlunos = (a) => {
  const l1Es = a.lesson1.numeroEstudantes;
  const l2Es = a.lesson2.numeroEstudantes;
  const l3Es = a.lesson3.numeroEstudantes;
  return l1Es + l2Es + l3Es;
}

// console.log(nAlunos(allLessons));

const nAlunos2 = (a) => {
  let count = 0;
  const arr = Object.keys(a);
  for (const b in arr) {
    count += a[arr[b]].numeroEstudantes;
  }
  return count;
}

// console.log(nAlunos2(allLessons));

const chaVal = (a, num) => Object.values(a)[num];

// console.log(chaVal(lesson2, 2));

const verifica = (a, b, c) => {
  const arr = Object.entries(a);
  let igual = false;
  for (const d in arr) {
    if(arr[d][0] === b && arr[d][1] === c) igual = true;
  }
  return igual;
}

// const arr = Object.entries(lesson3)[3][0];
// console.log(arr);

// console.log(verifica(lesson3, 'turno', 'noite'));

const qntsEst = (a, b) => {
  const arr = Object.entries(a);
  let count = 0; 
  for (const c in arr) {
    if(arr[c][1].materia === b){
      count += arr[c][1].numeroEstudantes;
    }
  }
  return count;
}
// const arr = Object.entries(allLessons);
// console.log(arr[2][1]);

// console.log(qntsEst(allLessons, 'Matemática'));

const qntsAulas = (a, b) => {
  const arr = Object.entries(a);
  let count = 0; 
  let materia = '';
  for (const c in arr) {
    if(arr[c][1].professor === b){
      count += arr[c][1].numeroEstudantes;
      materia = arr[c][1].materia;
    }
  }
  return `Professor: ${b},
Aula: ${materia}
Estudantes: ${count}`;
}
// const arr2 = Object.entries(allLessons);
// console.log(arr2[0][1].materia);

console.log(qntsAulas(allLessons, 'Carlos'));
