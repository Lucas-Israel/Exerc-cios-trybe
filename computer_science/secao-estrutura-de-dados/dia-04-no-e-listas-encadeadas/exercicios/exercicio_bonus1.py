# Remover duplicatas de uma LinkedList, atividade extraída e adaptada do
# LeetCode. Nesta atividade será necessário implementar um algoritmo que
#  receba uma LinkedList como argumento e retorne uma nova lista sem
# elementos duplicados. Esta função deve respeitar a complexidade O(n).

# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3

#  Faça a análise de complexidade da sua solução.

from exercicio2 import LinkedList


def remove_duplicate(linked_list: LinkedList):
    new_linked_list = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if new_linked_list.index_of(current_node.value) == -1:
            new_linked_list.insert_last(current_node.value)

    return new_linked_list


if __name__ == '__main__':
    size = range(1, 11)
    a = LinkedList()
    for num in size:
        if num < 5:
            a.insert_at(1, len(a))
        else:
            a.insert_at(num, len(a))
    b = remove_duplicate(a)
    print(b)
    count = len(b)
    to_print = b.head_value
    while count:
        print(to_print.value)
        to_print = to_print.next
        count -= 1
