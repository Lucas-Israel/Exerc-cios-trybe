class Classe_1:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe_1()
Classe_1.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá


# Atributo de classe

class Classe_2:
    atributo_da_classe = 1


objeto_1 = Classe_2()
objeto_2 = Classe_2()

print(Classe_2.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe_2.atributo_da_classe = 2
print(Classe_2.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe_2.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2

# Metodos de classe para mudar os valores de classe

# Eles funcionam por meio do decorador @classmethod, que, assim como o
# @staticmethod, também está disponível no escopo global,
# e recebem um primeiro parâmetro cls, que referencia a classe.


class Classe:
    _atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.retorna_atributo_da_classe())  # Saída: 1
print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
print(Classe.retorna_atributo_da_classe())  # Saída: 2
print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
print(Classe.retorna_atributo_da_classe())  # Saída: 3
print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
print(objeto_2.retorna_atributo_da_classe())  # Saída: 3


# A propósito, tal como o self, cls é apenas uma convenção,
# podendo receber outros nomes.
# É comum confundir e escrever um classmethod que recebe self, o que não vai
# quebrar o programa, mas é importante saber que independentemente do nome o
# parâmetro será uma referência à classe, e não ao objeto.
