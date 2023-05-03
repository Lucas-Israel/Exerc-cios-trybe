# Você têm dois arrays de números inteiros que representam:

# I - instantes de entrada e saídas em uma biblioteca
# II - um número que represente um instante a ser buscado.

# Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
# Considere que todo estudante entrou e saiu da biblioteca.


def instante_search(entradas, saidas, search):
    to_return = 0

    for i in range(len(entradas)):
        if saidas[i] >= search >= entradas[i]:
            to_return += 1

    return to_return

# O(n)


def test_instante_search():
    entradas = [1, 2, 3]
    saidas = [3, 2, 7]
    instante_buscado = 4
    assert instante_search(entradas, saidas, instante_buscado) == 1
