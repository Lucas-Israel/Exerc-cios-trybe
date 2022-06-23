// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

let a;

// Pesquisa
const searchEmployee = (ids, detail) => {
  if (!detail || !ids) {
    throw new Error('erro1');
  }

  if (typeof ids !== 'string' || typeof detail !== 'string'){
    throw new Error('erro2');
  }

  for (let index = 0; index < professionalBoard.length; index += 1) {
    const element = professionalBoard[index];

    if (element.id === ids) {
      if(!element[detail]) {
        throw new Error('Informação indisponível');
      }
      return element[detail];
    }
  }
  throw new Error('ID não identificada');
};

module.exports = searchEmployee;

// console.log(searchEmployee('5569-4', 'firstName'));

// console.log(professionalBoard[0].firstName);