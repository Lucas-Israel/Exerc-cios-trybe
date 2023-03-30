# Exercício 1:
# Abaixo temos parte da implementação de um jogo do mundo de Star Wars.
# Porém, esse código está com um erro.

# Encontre-o e corrija-o sem alterar o código das classes de personagens
# (Soldier e Jedi).

class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100

# mudando estratégia
# class StarWarsGame:
#     def __init__(self, character):
#         self.character = character

#     def fight_enemy(self):
#         if type(self.character) is Soldier:
#             print(
#                 f"You caused {self.character.attack()} of damage to the ene")
#         if type(self.character) is Jedi:
#             print(
#                 f"You caused {self.character.attackWithSaber()} "
#                 "of damage to the enemy")

# criando adapter


class JediAdapter:
    def __init__(self, jedi):
        self.jedi = jedi

    def attack(self):
        return self.jedi.attackWithSaber()


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage in the enemy")


soldier = Soldier(5)
jedi = Jedi(20)
jedi_adapter = JediAdapter(jedi)
StarWarsGame(soldier).fight_enemy()
StarWarsGame(jedi_adapter).fight_enemy()
