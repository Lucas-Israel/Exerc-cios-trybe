# Exercício 6:

# Você está trabalhando em um sistema de orçamentos que faz cálculos de
# impostos e precisa ser refatorado para adicionar novos, que no caso são o
# PIS (0,65%) e o COFINS (3%).

# Mas durante a refatoração, você se depara com uma má prática de código.
# Encontre essa má prática e a solucione em conjunto com a refatoração.


from abc import ABC, abstractmethod


class EstrategiaDeImposto(ABC):
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError


class Iss(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class Icms(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class Pis(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class Cofins(EstrategiaDeImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self._valor = valor

    def calcular_imposto(self, imposto: EstrategiaDeImposto):
        return imposto.calcular(self._valor)


orcamento = Orcamento(1000)

print(f"ISS: {orcamento.calcular_imposto(Iss)}")
print(f"ICMS: {orcamento.calcular_imposto(Icms)}")
print(f"PIS: {orcamento.calcular_imposto(Pis)}")
print(f"COFINS: {orcamento.calcular_imposto(Cofins)}")
