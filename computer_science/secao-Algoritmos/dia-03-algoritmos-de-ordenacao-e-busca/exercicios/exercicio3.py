# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção,
# para as entradas de dados ordenadas, inversamente ordenadas e aleatórias.
# Em seguida, compare-os. Faça testes para entradas de tamanho
# 10.000, 100.000, 1.000.000.

# ▶️ A entrada de dados pode ser gerada da seguinte maneira:

def search_for_selection(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end):
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index


def selection_sort(list):
    n = len(list)

    for index in range(n - 1):
        min_element_index = search_for_selection(list, index, n)
        list[index], list[min_element_index] = list[min_element_index], list[index]

    return list


def insertion_sort(list):
    n = len(list)

    for index in range(1, n):
        key = list[index]

        new_position = index - 1

        while new_position >= 0 and list[new_position] > key:
            list[new_position + 1] = list[new_position]
            new_position = new_position - 1

        list[new_position + 1] = key

    return list
