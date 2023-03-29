# Exercício 2: Defina uma classe Estatistica que calcule média, mediana e moda
# de uma lista de números.
# 🐦 Dica: Utilize métodos de classe.
from statistics import mean, median, mode


class Calculadora:
    @classmethod
    def media(cls, *numeros):
        return mean(numeros)

    @classmethod
    def mediana(cls, *numeros):
        return median(numeros)

    @classmethod
    def moda(cls, *numeros):
        return mode(numeros)


b = Calculadora.media(3, 3)
c = Calculadora.mediana(1, 50, 1, 50)
d = Calculadora.moda(2, 2, 7, 7, 7, 5)

print(b, c, d)
