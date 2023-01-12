class Clients {
  private _nome: string

  constructor(){
    this._nome = ''
  }
}

class Pedido {
  private _nomeDoCliente: string
  private _itensConsumidos: [{ nome: string, preco: number }]
  private _formaDePagamento: string
  private _desconto: number

  constructor(desconto: number){
    this._nomeDoCliente = ''
    this._itensConsumidos = [{ nome: '', preco: 0}]
    this._formaDePagamento = ''
    desconto >= 0 || desconto <= 1 ? this._desconto = desconto : this._desconto = 0
  }

  total() {
    return this._itensConsumidos.reduce((a, b) => a + b.preco, 0)
  }

  totalComDesconto() {
    return this.total() * (1 - this._desconto)
  }
}

class Itens {
  private _item: string
  private _preco: number

  constructor() {
    this._item = ''
    this._preco = 0
  }
}