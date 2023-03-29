class Exemplo:
    def __init__(self):
        print("Inicializando Exemplo")
        self.__privado = "Eu sou privado"

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")

    def metodo_publico(self):
        print("Este é um método público")
        self.__metodo_privado()
        return self.__privado


if __name__ == '__main__':
    a = Exemplo()
    print(a.metodo_publico())

# __new__(), cria uma nova instancia, ja é feito automaticamente, mas
# posso fazer manualmente
# Observe que o nome do método privado começa com dois sublinhados __.
# Além disso, dentro do construtor __init__, há um atributo que começa
# com dois sublinhados __privado. Isso também é um exemplo de encapsulamento
# de dados. Para acessar o método privado de dentro da classe, podemos
# simplesmente chamar o método normalmente. Por exemplo, o método público
# metodo_publico chama o método privado __metodo_privado usando o
# self.__metodo_privado().
