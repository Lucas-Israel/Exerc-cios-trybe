# Exercício 3: Você recebeu um convite para ajudar com uma atualização de
# segurança em um sistema interno de uma empresa.
# Esse sistema atende os setores de vendas, financeiro e suporte.
# Para respeitar a nova Lei Geral de Proteção de Dados, a empresa precisa
# garantir que as informações internas serão expostas somente a quem tem
# necessidade.
# Assim devemos ter os seguintes perfis de acesso:

# Conta de Suporte: Acesso apenas ao sistema de suporte
# Conta de Suporte e Vendas: Acesso aos sistemas vendas e suporte
# Conta de Gerente: Acesso a todos os sistemas vendas, financeiro e suporte

# 👀 De olho na dica: esse problema lembra o de combos na hamburgueria,
# que você já conhece!
# Aqui precisamos de uma implementação semelhante, utilizando o padrão Factory.

# 👀 De olho na dica: a Account pode ser sua Interface Criadora, que será
# herdada pelas fábricas, que podem ser classes referentes aos perfis de
# acessos.

from abc import ABC, abstractmethod


class Sistema(ABC):
    @abstractmethod
    def __repr__(self) -> str:
        pass


class Suporte(Sistema):
    def __repr__(self) -> str:
        return 'Informações de suporte'


class Vendas(Sistema):
    def __repr__(self) -> str:
        return 'Informações de vendas'


class Financeiro(Sistema):
    def __repr__(self) -> str:
        return 'Informações financeiras'


class Account(ABC):
    def __init__(self):
        self.__sistemas = []
        self.criar_conta()

    @abstractmethod
    def criar_conta(self):
        pass

    def exibir_sistemas(self):
        return self.__sistemas

    def adicionar_sistema(self, sistema):
        self.__sistemas.append(sistema)

    def remover_sistema(self, sistema):
        self.__sistemas.remove(sistema)


class SuporteAcc(Account):
    def criar_conta(self):
        self.adicionar_sistema(Suporte())


class SuporteEVendasAcc(Account):
    def criar_conta(self):
        self.adicionar_sistema(Suporte())
        self.adicionar_sistema(Vendas())


class GerenteAcc(Account):
    def criar_conta(self):
        self.adicionar_sistema(Suporte())
        self.adicionar_sistema(Vendas())
        self.adicionar_sistema(Financeiro())


if __name__ == "__main__":
    conta_escolhida = input(
        "Olá, qual tipo de conta deseja abrir? [SuporteAcc, SuporteEVendasAcc,"
        " GerenteAcc]: "
    )

    # Para transformar uma string em código executável basta usar o método
    # eval()
    # Equivalente a chamar SuporteAcc(), SuporteEVendasAcc(), GerenteAcc()
    Conta = eval(conta_escolhida)()

    print(f"\nCriando a conta {type(Conta).__name__}.")
    print(f"Conta criada com os seguintes sistemas: {Conta.exibir_sistemas()}")
