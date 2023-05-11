# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a
# uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas
# que estão abaixo dela, incluindo subordinados de seus subordinados, além
# dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem
# score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem
# equipe, tem score 2.

# Escreva um método que calcule o score de uma determinada pessoa.

# 👀 De olho na dica: para saber o score de uma pessoa, você precisa saber o
# score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma
# função dentro dela própria?

# Exemplo de subordinados:

# - 1 => 2, 3

# - 2 => 4

# - 3 => sem subordinados

# - 4 => 5, 6

# - 5 => 7

# - 6 => sem subordinados

# - 7 => sem subordinados


# Neste exemplo, o score de cada pessoa é:

# - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

# - 2 => 4 (score 4) + 1 (score dele próprio) = 5

# - 3 => 1 (score dele próprio)

# - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

# - 5 => 1 (score 7) + 1 (score dele próprio) = 2

# - 6 => 1 (score dele próprio)

# - 7 => 1 (score dele próprio)

# ⚠️ Faça a análise de complexidade da sua solução.

# Bônus: É muito comum em entrevistas que, quando a pessoa resolve o problema
# dentro do tempo, façam-se perguntas "follow-up", que dificultam a questão.
# Os follow-ups abaixo são opcionais.

# Follow-ups:

# Caso a empresa precise fazer essa consulta frequentemente, como você pode
# tornar essas consultas mais eficientes? Como você pode guardar o resultado
# de consultas anteriores?

# Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa.
# Seu método deve considerar que cada pessoa pode ter no máximo k pessoas em
# seu time. Se o time estiver cheio, a nova contratada pode ser alocada na
# equipe de qualquer pessoa abaixo dela, não precisando ser na equipe
# imediatamente abaixo.

# Se você adicionar uma nova contratação à lista de subordinadas, a estrutura
# que você fez no follow-up 1 está desatualizada. Modifique suas funções para
# que essa estrutura seja atualizada junto com a adição de uma nova
# contratação. Faça isso sem rodar de novo a função score() e lembre-se de
# atualizar todos os scores desde a pessoa da presidência até a equipe que a
# nova contratação entrou.


# class Hierarquia:
#     def __init__(self, subs):
#         self.subs = subs
#         self.scores = {}

#     def score_calculator(self, person):
#         if person in self.scores:
#             return self.scores[person]

#         counter = 1

#         for element in self.subs[person]:
#             counter += self.score_calculator(element)
#         self.scores[person] = counter

#         return counter


# Complexidade O(n)


class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]


# Complexidade O(1)
