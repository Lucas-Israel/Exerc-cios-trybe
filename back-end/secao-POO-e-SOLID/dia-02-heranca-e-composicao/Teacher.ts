import Person from "./Person";
import Employee from "./interface/Employee"

export default class Teacher extends Person implements Employee {
  private _subject: string
  private _registration: string
  private _salary: number
  private _adimissionDate: Date

  public get subject() {
    return this._subject
  }

  public set subject(param) {
    this._subject = param
  }

  public get registration() {
    return this._registration
  }

  public set registration(param) {
    this._registration = param
  }

  public get salary() {
    return this._salary
  }

  public set salary(param) {
    this._salary = param
  }

  public get adimissionDate() {
    return this._adimissionDate
  }

  public set adimissionDate(param) {
    this._adimissionDate = param
  }

  constructor(name: string, birthDate: Date, subject: string, salary: number) {
    super(name, birthDate)
    this._registration = this.generateRegistration()
    this._subject = subject
    this._salary = salary
    this._adimissionDate = new Date()
  }

  generateRegistration() {
    return String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')
  }
}

const a = new Teacher('Joao', new Date('1995/03/17'), 'matematica', 20000)
const b = new Teacher('Maria', new Date('1992/03/07'), 'historia', 15000)
const c = new Teacher('Xablau', new Date('1950/01/01'), 'filosofia', 10)

console.log(a);
console.log(b);
console.log(c);


