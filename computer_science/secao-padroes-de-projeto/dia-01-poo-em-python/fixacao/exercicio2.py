# Exercício de Fixação 2
# Implemente as classes Secador, Batedeira e MaquinaDeLavar, sempre herdando
# da classe Eletrodomestico. Para testar, instancie as novas classes e realize
# alguns prints, como por exemplo, divulgando o preço do Eletrodoméstico.

class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class Maquina_de_lavar(Eletrodomestico):
    pass


secador = Secador(cor='Branco', potencia=250, tensao=1000, preco=500)
batedeira = Batedeira(cor='Preto', potencia=1337, tensao=7331, preco=750)
maquina_de_lavar = Maquina_de_lavar('Rosa', 10, 20, 100)

print(secador.preco)
print(batedeira.preco)
print(maquina_de_lavar.preco)
