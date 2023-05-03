# Em um jogo de baralho, as cartas estão representadas por um array numérico.
# Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo
# uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

def shuffle(arr):
    # first_half = arr[:len(arr) // 2:]
    # second_half = arr[len(arr)//2::]
    # to_send = []
    # for i in range(len(first_half)):
    #     to_send.append(first_half[i])
    #     to_send.append(second_half[i])
    to_send = []
    half = len(arr) // 2
    for i in range(half):
        to_send.extend(arr[i::half])
    return to_send

# O(n)


def test_shuffle():
    cartas = [2, 6, 4, 5]
    assert shuffle(cartas) == [2, 4, 6, 5]
    cartas = [1, 4, 4, 7, 6, 6]
    assert shuffle(cartas) == [1, 7, 4, 6, 4, 6]
