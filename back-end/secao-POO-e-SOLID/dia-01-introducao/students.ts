class Students {
  private _matricula: string;
  private _nome: string;
  private _nota1: number;
  private _nota2: number;
  private _nota3: number;
  private _nota4: number;
  private _trabalhoNota1: number;
  private _trabalhoNota2: number;

  constructor() {
    this._matricula = ''
    this._nome = ''
    this._nota1 = 0
    this._nota2 = 0
    this._nota3 = 0
    this._nota4 = 0
    this._trabalhoNota1 = 0
    this._trabalhoNota2 = 0
  }

  setNotas(n1: number, n2: number, n3: number, n4: number) {
    this._nota1 = n1
    this._nota2 = n2
    this._nota3 = n3
    this._nota4 = n4
  }

  notasSoma() {
    return this._nota1 + this._nota2 + this._nota3 + this._nota4
  }

  notasMedia() {
    return this.notasSoma()/4
  }
}

const newStudent = new Students();

newStudent.setNotas(5, 6, 7, 8);

console.log(newStudent.notasSoma());
console.log(newStudent.notasMedia());

