const mage = {
  healthPoints: 130,
  healthPointsMax: 130,
  intelligence: 45,
  mana: 125,
  hits: undefined,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  healthPointsMax: 200,
  strength: 30,
  weaponDmg: 2,
  hits: undefined,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  healthPointsMax: 350,
  strength: 50,
  hits: undefined,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//   1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const draMinDmg = 15;

const draDmg = () => Math.floor(Math.random() * (dragon.strength - draMinDmg) + draMinDmg);

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warMinDmg = warrior.strength;
const warMaxDmg = warrior.strength * warrior.weaponDmg;

const warDmg = () => Math.floor(Math.random() * (warMaxDmg - warMinDmg) + warMinDmg)

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const magMinDmg = mage.intelligence;
const magMaxDmg = mage.intelligence * 2;

const mageDmg = () => {
  if ( mage.mana < 15) return 'Não possui mana suficiente';
  mage.mana -= mageObj().manaGasta;
  return Math.floor(Math.random() * (magMaxDmg - magMinDmg) + magMinDmg)
}

const mageObj = () => {
  return {
    dano: mageDmg,
    manaGasta: 15,
  }
}

// console.log(mageObj().dano());

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const warAct = (abc) => {
  if (warrior.hits === undefined) {
    warrior.hits = 0;
    warrior.hits += 1;
  }
  if (warrior.damage === undefined) {
    warrior.damage = 0;
    warrior.damage += abc;
    return dragon.healthPoints -= abc;
  }
  warrior.hits += 1;
  warrior.damage += abc;
  return dragon.healthPoints -= abc;
};

const magAct = (abc) => {
  if (typeof abc === 'string') return console.log(abc);
  if (mage.hits === undefined) {
    mage.hits = 0;
    mage.hits += 1;
  }
  if (mage.damage === undefined) {
    mage.damage = 0;
    mage.damage += abc;
    return dragon.healthPoints -= abc;
  }
  mage.hits += 1; 
  mage.damage += abc;
  return dragon.healthPoints -= abc;
}

const draAct = (abc) => {
  if (dragon.hits === undefined) {
    dragon.hits = 0;
    dragon.hits += 2;
  }
  if (dragon.damage === undefined) {
    dragon.damage = 0;
    dragon.damage += abc * 2;
    return warrior.healthPoints -= abc, mage.healthPoints -= abc;
  }
  dragon.hits += 2;
  dragon.damage += abc * 2;
  return warrior.healthPoints -= abc, mage.healthPoints -= abc;
}

const turnResult = () => battleMembers;

const gameActions = {
  warTurn: warAct,
  magTurn: magAct,
  draTurn: draAct,
  actTurn: turnResult,
};

gameActions.warTurn(warDmg());
gameActions.warTurn(warDmg());
gameActions.warTurn(warDmg());
gameActions.magTurn(mageObj().dano());
gameActions.magTurn(mageObj().dano());
gameActions.draTurn(draDmg());
console.table(gameActions.actTurn());


// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.
// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.