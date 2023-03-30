# Exercício 4:
# Agora que você tem duas formas diferentes de dar cartas para o seu baralho,
# refatore o código para não precisar mais de dois baralhos e dois iteradores
# isolados, mas sim usar um único iterador com duas estratégias diferentes de
# iteração.

# 🤩 Dica: Você pode receber a estratégia na inicialização do baralho e
# passá-la para frente no __iter__.
from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, strategy):
        self._strategy = strategy
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return self._strategy(self._cartas)


class BaralhoIterator(Iterator):
    def __init__(self, cartas):
        self.__cartas = cartas
        self.__current_index = 0

    def __next__(self):
        try:
            data = self.__cartas[self.__current_index]
        except IndexError:
            raise StopIteration()
        else:
            self.__current_index += 1
            return data


class NegativeBaralhoIterator(Iterator):
    def __init__(self, cartas):
        self.__cartas = cartas
        self.__current_index = -1

    def __next__(self):
        try:
            data = self.__cartas[self.__current_index]
        except IndexError:
            raise StopIteration()
        else:
            self.__current_index -= 1
            return data


baralho = Baralho(BaralhoIterator)


# for card in baralho:
#     print(card)


baralho_negativo = Baralho(NegativeBaralhoIterator)


for card in baralho_negativo:
    print(card)
