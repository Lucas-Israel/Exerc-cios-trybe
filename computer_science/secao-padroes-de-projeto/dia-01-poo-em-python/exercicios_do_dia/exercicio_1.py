# Exercício 1: Vamos implementar o diagrama abaixo

# Atributos:

# volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;

# canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;

# tamanho - será inicializado com o valor do parâmetro;

# ligada - será inicializado com o valor de False, pois está inicialmente
# desligado.

# Todos os atributos devem ser privados.


# Métodos:

# aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;

# diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;

# modificar_canal - altera o canal de acordo com o parâmetro recebido e deve
# lançar uma exceção (ValueError) caso o valor esteja fora dos limites;

# ligar_desligar - alterna o estado da TV entre ligado e desligado (True/False)

class Televisão:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligado = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligado(self):
        return self.__ligado

    @volume.setter
    def volume(self, new_volume):
        if 1 <= new_volume <= 99:
            self.__volume = new_volume

    @canal.setter
    def canal(self, new_canal):
        if 1 <= new_canal <= 99:
            self.__canal = new_canal
        else:
            raise ValueError('Canal fora do limite')

    @tamanho.setter
    def tamanho(self, new_tamanho):
        self.__tamanho = int(new_tamanho)

    @ligado.setter
    def ligado(self, new_ligado: bool):
        if type(new_ligado) == bool:
            self.__ligado = new_ligado

    def aumentar_volume(self):
        self.volume += 1

    def diminuir_volume(self):
        self.volume -= 1

    def mudar_canal(self, new_canal):
        self.canal = new_canal

    def ligar_desligar(self):
        self.ligado = not self.__ligado


a = Televisão(250)

a.mudar_canal(99)

print(a.canal)

print(a.ligado)

a.ligar_desligar()
print(a.ligado)

a.ligar_desligar()
print(a.ligado)
