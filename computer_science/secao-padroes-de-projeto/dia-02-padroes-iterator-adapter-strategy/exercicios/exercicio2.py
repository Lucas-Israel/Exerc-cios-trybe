# Exercício 2:
# Dado o código de um baralho e suas cartas, você deve transformá-lo em um
# iterador sequencial que fornece as cartas em sua ordem tradicional, começando
# de < A de copas > até < K de paus > .
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

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas)


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


baralho = Baralho()

for card in baralho:
    print(card)
