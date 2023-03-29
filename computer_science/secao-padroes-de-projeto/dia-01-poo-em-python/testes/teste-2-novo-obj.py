class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligado_return_test(self):
        return self.__ligado


if __name__ == '__main__':
    a = Liquidificador(cor='preto', potencia='abcdef', tensao=200, preco='150')
    print(a.cor)
    print(a.preco)
    print(a._potencia)
    print(a.ligado_return_test())
