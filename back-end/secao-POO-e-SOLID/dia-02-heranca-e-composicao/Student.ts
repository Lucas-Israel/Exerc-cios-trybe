import Person from "./Person";


export default class Student extends Person{
  private _enrollment = String()
  private _examsGrades: number[] = []
  private _assignmentGrades: number[] = []

  constructor(name: string, birthdate: Date) {
    super(name, birthdate);
    this.enrollment = this.generateEnrollment();
  }

  public get enrollment() {
    return this._enrollment;
  }

  public set enrollment(param) {
    if (param.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.')
    this._enrollment = param;
  }

  public get examsGrades() {
    return this._examsGrades;
  }

  public set examsGrades(param: number[]) {
    if (param.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.')
    this._examsGrades = param;
  }

  public get assignmentGrades() {
    return this._assignmentGrades;
  }

  public set assignmentGrades(param) {
    if (param.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.')
    this._assignmentGrades = param;
  }

  public generateEnrollment() {
    return String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')
  }

  public sumGrades():number {
    return this._assignmentGrades.reduce((a, b) => a + b, 0) + this._examsGrades.reduce((a, b) => a + b, 0)
  }

  public sumAverageGrade(): number {
    return this.sumGrades() / (this._assignmentGrades.length + this._examsGrades.length)
  }
}

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
// const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

// carolina.examsGrades = [25, 20, 25, 23];
// lucas.examsGrades = [25, 20, 25, 23];
// jessica.assignmentGrades = [50, 45];
// tamires.assignmentGrades = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// console.log(jessica.sumAverageGrade());


