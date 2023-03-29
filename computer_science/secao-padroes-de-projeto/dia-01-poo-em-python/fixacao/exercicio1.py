# Exercício de fixação 1
# Além do liquidificador, podemos modelar inúmeros eletrodomésticos,
# tais como: ventilador, batedeira, secador, máquina de lavar e etc.

# Para fixar crie uma objeto da classe Ventilador, semelhante ao exemplo do
# liquidificador.

# Em seguida faça com que a pessoa tenha um ventilador como atributo através
# da composição.

# Crie também um método comprar_ventilador.

# Faça com que o print (__str__) de Pessoa informe se sua instância possui ou
# não um ventilador.

class Ventilador:
    @property
    def cor(self):
        return self.__cor

    @property
    def preco(self):
        return self.__preco

    @property
    def dono(self):
        return self.__dono

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

    @preco.setter
    def preco(self, novo_preco):
        self.__preco = novo_preco

    @dono.setter
    def dono(self, novo_dono):
        self.__dono = novo_dono

    def __init__(self, cor='Branco', preco=250, dono='Ninguem'):
        self.cor = cor
        self.preco = int(preco)
        self.dono = dono

    def __str__(self):
        return f'''
        -- Ventilador {self.cor}
        -- Preco {self.preco}
        -- Dono {self.dono}
        '''


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = int(saldo_na_conta)
        self.liquidificador = None
        self.ventilador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            ventilador.dono = self.nome
            self.ventilador = ventilador

    def ventilador_mensagem(self):
        if self.ventilador:
            return 'possui um ventilador'
        return 'não possui um ventilador'

    def __str__(self):
        return f"""
        -- {self.nome} - possui {self.saldo_na_conta} reais em sua conta
        -- {self.nome} - {self.ventilador_mensagem()}
        """


ventilador = Ventilador('Branco', 250)
pessoa = Pessoa('Xablau', 5000)

print(pessoa)
print(ventilador)

pessoa.comprar_ventilador(ventilador)

print(pessoa)
print(ventilador)
