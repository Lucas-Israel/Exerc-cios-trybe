from abc import ABC, abstractmethod
from math import pi as PI


class Figura_geometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    @abstractmethod
    def perimetro(self):
        ...


class Quadrado(Figura_geometrica):
    def __init__(self, lado):
        self.__lado = lado

    def area(self):
        return self.__lado * self.__lado

    def perimetro(self,):
        return self.__lado * 4


class Retangulo(Figura_geometrica):
    def __init__(self, lado1, lado2):
        self.__lado1 = lado1
        self.__lado2 = lado2

    def area(self):
        return

    def perimetro(self):
        return (self.__lado1 + self.__lado2) * 2


class Circulo(Figura_geometrica):
    def __init__(self, raio=False, diametro=False):
        self.__raio = raio
        self.__diametro = diametro

    def area(self):
        if self.__raio:
            return PI * self.__raio ** 2
        if self.__diametro:
            return PI * (self.__diametro/2) ** 2

    def perimetro(self):
        if self.__raio:
            return 2 * PI * self.__raio
        if self.__diametro:
            return PI * self.__diametro


print(Circulo(raio=20).area())
