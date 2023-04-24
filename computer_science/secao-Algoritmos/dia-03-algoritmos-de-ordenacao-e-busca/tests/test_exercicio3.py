from random import shuffle
from exercicios.exercicio3 import selection_sort, insertion_sort


ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


def test_selection_sort():
    assert selection_sort(inversamente_ordenados) == ordenados
    assert selection_sort(aleatorios) == ordenados


def test_insertion_sort():
    assert insertion_sort(inversamente_ordenados) == ordenados
    assert insertion_sort(aleatorios) == ordenados
