# Remover duplicatas de uma DoublyLinkedList, atividade extraída e adaptada do
# LeetCode. Nesta atividade será necessário implementar um algoritmo que receba
# uma DoublyLinkedList como argumento e retorne uma nova lista, sem elementos
# que possuem mais de uma ocorrência.

# input: 1 <-> 1 <-> 2
# saída: 2

# input: 1 <-> 1 <-> 2 <-> 3 <-> 3
# saída: 2

# input: 1 <-> 2 <-> 3 <-> 3
# saída: 1 <-> 2

# Faça a análise de complexidade da sua solução.

import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))


if __name__ == '__main__':
    from fixação.double_linked_list import DLinkedList
else:
    from fixação.double_linked_list import DLinkedList


def remove_duplicate_from_double_linked(linked_list):
    list_with_unique_elements = DLinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if linked_list.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


if __name__ == '__main__':
    a = DLinkedList()
    a.insert_last(1)
    a.insert_last(1)
    a.insert_last(1)
    a.insert_last(4)
    a.insert_last(5)
    b = remove_duplicate_from_double_linked(a)
    print(b)
