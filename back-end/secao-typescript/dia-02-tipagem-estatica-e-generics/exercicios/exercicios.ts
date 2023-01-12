interface Car {
  brand: string,
  color: string,
  doors: number,
}

class Car {
  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('Honk!');
  }

  turnOn() {
    console.log('Carro ligado');
  }

  turnOff() {
    console.log('Carro desligado');
  }

  speedUp() {
    console.log('Acelerando');
  }

  speedDown() {
    console.log('Desacelerando');
  }

  stop() {
    console.log('Parando carro');
  }

  turn(direcao: string) {
    console.log(`Virando carro para ${direcao}`);
  }

  travel1() {
    this.turnOn();
    this.speedUp();
    console.log('Em 600 metros vire a esquerda');
    this.turn('esquerda');
    console.log('Em 200 metros na rotatória pegue a segunda saída a direita');
    this.turn('direita');
    console.log('Mantenha em frente pelos próximos 1,2 quilômetros');
    console.log('Em 300 metros vire a direita');
    this.turn('direita');
    console.log('Em 400 metros você chegará ao seu destino');
    this.speedDown();
    this.honk();
  }

  travel2() {
    console.log('Siga em frente');
    this.speedUp();
    console.log('Em 300 metros vire a direita');
    this.turn('direita');
    console.log('Mantenha em frente pelos próximos 2 quilômetros');
    console.log('Em 200 metros vire a esquerda');
    this.turn('esquerda');
    console.log('Em 400 metros vire a direita');
    this.turn('direita');
    console.log('Em 100 metros você chegará ao destino');
    this.speedDown();
    this.turnOff();
  }
}

const carro1 = new Car('Volksvagen', 'prata', 4);

carro1.travel1();
console.log('INICIANDO PROXIMA CORRIDA');
carro1.travel2();

type slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: slices;
}

class Pizza {
  constructor(flavor: string, slices: slices) {
    this.flavor = flavor;
    this.slices = slices;
  }

  pizza() {
    console.log(`Pizza sabor ${this.flavor} em ${this.slices} pedaços`);
  }
}

const pizza1 = new Pizza('Calabreza', 8);

pizza1.pizza();

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaComum extends Pizza {
  flavor: Common;
}

let pizzaComum: PizzaComum = {
  flavor: 'Frango',
  slices: 6,
  pizza() {console.log(`Pizza sabor ${this.flavor} em ${this.slices} pedaços`);
  }
}

const pizza2 = pizzaComum.pizza();

interface PizzaDoce extends Pizza {
  flavor: Sugar,
  slices: 4,
}

let pizzaDoce: PizzaDoce = {
  flavor: 'Marshmallow',
  slices: 4,
  pizza() {console.log(`Pizza sabor ${this.flavor} em ${this.slices} pedaços`)}
}

const pizza3 = pizzaDoce.pizza();

// Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
// Recebe como segundo parâmetro uma função de callback;
// Retorna um novo array removendo os itens que não atendem a condição da função de callback;
// A função de callback recebe como primeiro parâmetro um item do tipo do array;
// A função de callback pode receber como segundo parâmetro um index do tipo inteiro;
// A função de callback pode receber como terceiro parâmetro o próprio array;
// A função de callback devolve um booleano.

type callBackType<T> = (item: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callBack: callBackType<T>): Array<T> {
  const newArr: Array<T> = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callBack(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }

  return newArr;

}

console.log(myFilter(['abc', 'aa', 'def'], (item) => item !== 'aa'));
console.log(myFilter([1,2,3,4], (item) => item > 3));

