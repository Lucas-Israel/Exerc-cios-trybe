# exercicio 1:
# Inicializando a classe e adicionando elementos
# Crie uma classe chamada Conjunto;
# Escreva um construtor que defina uma lista do tamanho necessário. Inicialize
# todos os valores com False, uma vez que ainda não temos valores adicionados;
# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;
# Na main (dentro de: if __name__ == "__main__":), instancie um objeto do tipo
# Conjunto e adicione os valores.

# [0, 10, 100, 1000]

# -------------------------------------------

# exercicio 2:
# Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto)
# não irá funcionar. O que será impresso é o endereço de memória onde o objeto
# está guardado, e não é isso que queremos. Para que o comando print funcione,
# precisamos que a nossa classe tenha um método chamado __str__ e é o que
# faremos agora:

# A = {1, 2, 3}
# saída: '{1, 2, 3}'

# B = {7, 2, 10}
# saída: '{2, 7, 10}'

# C = {}
# saída: '{}'

# -------------------------------------------

# Exercício 3: is_in
# Caso queiramos saber se um elemento faz parte ou não do conjunto usando o
# operador in, precisamos que a nossa classe tenha um método chamado
# __contains__ e é o que faremos agora:

# -------------------------------------------

# Exercício 4: União
# União: Todos os elementos que estão em A OU em B

# Crie um método com a assinatura abaixo, que recebe como parâmetro outro
# objeto da classe Conjunto:

# def union(self, conjunto_b):
#    retorno: outro objeto Conjunto com união do próprio objeto com o
#    conjunto_b

# -------------------------------------------

# Exercício 5: Intersecção
# Intersecção: Todos os elementos que estão em A E em B

# Crie um método com a assinatura abaixo, que recebe como parâmetro outro
# objeto da classe Conjunto:

# def intersection(self, conjunto_b):
#     retorno: outro objeto Conjunto com intersecção do próprio objeto com o
#     conjunto_b

# -------------------------------------------

# Exercício 6
# Continue os exercícios de fixação para terminar de implementar as operações
# de conjuntos:

# difference;
# issubset;
# issuperset.

# -------------------------------------------


class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjunto_b):
        # to_return = True
        # for index in range(1001):
        #     if self.set[index] is True:
        #         if conjunto_b.set[index] is False:
        #             to_return = False

        # return to_return
        for index in range(1001):
            if self.set[index] and not conjunto_b.set[index]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for index in range(1001):
            if conjunto_b.set[index] and not self.set[index]:
                return False

        return True


# Exercício 7
# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a
# Trybe! Em um determinado módulo, os estudantes precisam entregar dois
# trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o
# nome da pessoa fica registrado. Precisamos saber como está o andamento da
# entrega das listas. Para isso, você tem acesso aos nomes das pessoas da
# turma, bem como ao log de quem já entregou qual lista.
# A partir das listas abaixo, utilize a classe já criada e imprima os
# resultados das perguntas abaixo:

# estudantes = [1, 2, 3, 4, 5, 6, 7]
# lista1_entregues = [1, 4, 7, 3]
# lista2_entregues = [3, 1, 6]

# -------------------------------------------

if __name__ == "__main__":
    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]
    estudantes_conj = Conjunto()
    entregues_1 = Conjunto()
    entregues_2 = Conjunto()

    for estudante in estudantes:
        estudantes_conj.add(estudante)

    for estudante in lista1_entregues:
        entregues_1.add(estudante)

    for estudante in lista2_entregues:
        entregues_2.add(estudante)

    entregaram_1 = estudantes_conj.intersection(entregues_1)
    entregaram_1_e_2 = entregues_1.intersection(entregues_2)

    for num in range(1001):
        if entregaram_1_e_2.set[num] is True:
            print(f"O Aluno {num} entregou os dois trabalhos")

    print("\n")

    nao_entregaram_1 = estudantes_conj.difference(entregues_1)

    for num in range(1001):
        if nao_entregaram_1.set[num] is True:
            print(f"O Aluno {num} não entregou o trabalho 1")

    print("\n")

    nao_entregaram_2 = estudantes_conj.difference(entregues_2)

    for num in range(1001):
        if nao_entregaram_2.set[num] is True:
            print(f"O aluno {num} não entregou o trabalho 2")

    print("\n")

    entregou_pelo_menos_um = entregues_1.union(entregues_2)

    for num in range(1001):
        if entregou_pelo_menos_um.set[num] is True:
            print(f"O aluno {num} entregou pelo menos um trabalho")

    entregou_nada = nao_entregaram_1.intersection(nao_entregaram_2)

    print("\n")

    for num in range(1001):
        if entregou_nada.set[num] is True:
            print(f"O aluno {num} não entregou nenhum trabalho")
