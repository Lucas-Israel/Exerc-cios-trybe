from cronometro import Cronometro
from random import shuffle

# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada
#  de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

ordenados = list(range(10000))
inversamente_ordenados = list(reversed(range(10000)))
aleatorios = ordenados[:]
shuffle(aleatorios)


def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1:
        mid = (start + end) // 2
        merge_sort(numbers, start, mid)
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end)


def merge(numbers, start, mid, end):
    left = numbers[start:mid]
    right = numbers[mid:end]

    left_index, right_index = 0, 0

    for general_index in range(start, end):
        if left_index >= len(left):
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(right):
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        elif left[left_index] < right[right_index]:
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            numbers[general_index] = right[right_index]
            right_index = right_index + 1


def bubble_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for ordered_elements in range(n - 1):  # Precisamos ordenar n-1 elementos
        print(numbers)
        for item in range(0, n - 1 - ordered_elements):
            # se um elemento for maior, flutuamos ele para cima
            if numbers[item] > numbers[item + 1]:
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element

                # Lembra da troca com desempacotamento?
                # numbers[item], numbers[item + 1] = numbers[item + 1],
                # numbers[item]
    return numbers


with Cronometro('merge_sort 10000 elementos'):
    merge_sort(aleatorios, 0, len(aleatorios))

# with Cronometro('bubble_sort 10000 elementos'):
#     bubble_sort(aleatorios)


# No bubble sort em um caso médio temos uma complexidade de O(n²), o que significa que normalmente
# temos n² trocas, já o merge sort, como utiliza dividir e conquistar, consegue ter uma
# complexidade O(n log n) em média. Mesmo em um pior cenário, onde ao embaralharmos os dois arrays,
# tornando-os inversamente ordenados, o merge sort seria mais rápido, pois sua complexidade ainda
# seria O(n log n) e o bubble sort teria complexidade quadrática O(n²).
