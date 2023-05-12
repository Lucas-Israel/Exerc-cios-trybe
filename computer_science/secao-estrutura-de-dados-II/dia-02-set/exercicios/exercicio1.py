# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que
# a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive.
# A pontuação final é calculada da seguinte forma:

# A nota de partida de cada pessoa é o maior número que a outra pessoa não
# escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.
# Exemplo:


# clara = [0, 1, 5, 9, 10]
# # nota de partida: 5
# # redutor: 1
# # pt: 4

# marco = [0, 2, 8, 9, 10]
# # nota de partida: 8
# # redutor: 2
# # pt individual: 6

# # Quem ganhou: Marco
# Implemente uma função que receba um dicionário com os nomes e números
# chutados e retorne o nome de quem ganhou.

# entrada = {
#     'Clara': [0, 1, 5, 9, 10],
#     'Marco': [0, 2, 8, 9, 10]
# }

# # saída: 'Marco'
# Faça a análise de complexidade da sua solução.


def blefe(dict_list: dict):
    set1 = set()
    set2 = set()
    player1 = ""
    player2 = ""
    for index, player in enumerate(dict_list):
        if index == 0:
            player1 += player
            for element in dict_list[player]:
                set1.add(element)
        if index == 1:
            player2 += player
            for element in dict_list[player]:
                set2.add(element)

    diff1 = set1 - set2
    diff2 = set2 - set1

    val_index0 = 0
    val_index1 = 11

    for value in diff1:
        if value > val_index0:
            val_index0 = value
        if value < val_index1:
            val_index1 = value
    # print(f"{player1} max: {val_index0}")
    # print(f"{player1} min: {val_index1}")

    result_diff1 = 0

    if val_index0 == val_index1:
        result_diff1 = val_index0
    else:
        result_diff1 = abs(val_index0 - val_index1)

    val_index0 = 0
    val_index1 = 11

    for value in diff2:
        if value > val_index0:
            val_index0 = value
        if value < val_index1:
            val_index1 = value

    # print(f"{player2} max: {val_index0}")
    # print(f"{player2} min: {val_index1}")

    result_diff2 = 0

    if val_index0 == val_index1:
        result_diff2 = val_index0
    else:
        result_diff2 = abs(val_index0 - val_index1)

    winner = ""
    if result_diff1 > result_diff2:
        winner = player1
    if result_diff2 > result_diff1:
        winner = player2
    else:
        winner = "EMPATE"

    return winner


# vai ser O(n) baseado na lista passada pelos jogadores
