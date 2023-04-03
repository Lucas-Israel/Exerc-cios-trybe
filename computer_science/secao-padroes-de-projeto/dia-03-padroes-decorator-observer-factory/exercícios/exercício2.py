# Exercício 2: Você está desenvolvendo um novo despertador para Assistente
# virtual Alexa, utilizando o Padrão Observer.
# Ao despertar, esse despertador aciona algumas rotinas especiais na casa.

# Implemente um objeto Alarme que consiga acionar as tarefas de rotina
# previamente cadastradas, sempre que o alarme despertar.
# Veja alguns exemplos de rotinas:

# Acender as luzes;

# Preparar o café;

# Ligar o computador.

# 👀 De olho na dica: crie um observador para cada rotina e vincule-o
# dinamicamente por composição ao objeto Alarme.
# Assim, quando o despertador tocar todas as rotinas vinculadas serão
# disparadas automaticamente.

from abc import ABC, abstractmethod


class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass


class TurnLightsOn(Notificador):
    def notificar(self):
        print('Luzes Ligadas')


class PrepareBreakFast(Notificador):
    def notificar(self):
        print('Preparando o café')


class TurnComputerOn(Notificador):
    def notificar(self):
        print('Ligando o computador')


class Alarme:
    def __init__(self) -> None:
        self.__sistemas_de_notificacao = []

    def adicionar_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.append(sistema)

    def remover_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.remove(sistema)

    def __notificar_todos(self):
        for sistema in self.__sistemas_de_notificacao:
            sistema.notificar()

    def alarme(self):
        print("Som do alarme: Triiiiiiim, Triiiiiiim")
        self.__notificar_todos()


if __name__ == '__main__':
    alerta = Alarme()
    luz = TurnLightsOn()
    cafe = PrepareBreakFast()
    pc = TurnComputerOn()
    list = [luz, cafe, pc]
    for element in list:
        alerta.adicionar_sistema_de_notificacao(element)

    alerta.alarme()
