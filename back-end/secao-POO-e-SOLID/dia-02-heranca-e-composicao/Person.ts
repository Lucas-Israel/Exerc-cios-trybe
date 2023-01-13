export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name
    this.birthDate = _birthDate
  }

  public get name(): string {
    return this._name
  }

  public set name(nam) {
    this.validateName(nam);
    this._name = nam;
  }

  public get birthDate(): Date {
    return this._birthDate
  }

  public set birthDate(param) {
    this.validateBirthDate(param);
    this._birthDate = param
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validateBirthDate(param: Date): void {
    if (param.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(param) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);

// const invalidPersonName = new Person('An', new Date('2000/06/07'));

// console.log(invalidPersonName);

// const invalidPersonAge = new Person('Ana Vitória', new Date('2900/06/07'));

// console.log(invalidPersonAge);


