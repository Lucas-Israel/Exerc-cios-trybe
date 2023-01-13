export default class Subject {
  private _name: string

  public get name() {
    return this._name
  }

  public set name(param) {
    this.validateName(param)
    this._name = param
  }

  constructor(name: string) {
    this._name = name
  }

  private validateName(name: string) {
    if (name.length < 3) throw new Error('O nome deve possuir no mínimo 3 caracteres')
  }
}

// const math = new Subject('Matematica');
// const hist = new Subject('História');
// const filo = new Subject('Filosofia');

// console.log(math.name);
// console.log(hist.name);
// console.log(filo.name);

// filo.name = 'abc'

// console.log(filo.name);

// filo.name = 'ab'

// console.log(filo.name);




