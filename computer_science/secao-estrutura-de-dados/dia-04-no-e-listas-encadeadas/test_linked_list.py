from exercicios.exercicio2 import LinkedList
from fixação.double_linked_list import DLinkedList
from exercicios.exercicio_bonus2 import remove_duplicate_from_double_linked


def test_LinkedList():
    a = LinkedList()
    for num in range(1, 5):
        a.insert_at(num, len(a))
    num_list = [1, 2, 3, 4]
    for index, num in enumerate(num_list):
        assert a.index_of(num) == index + 1


def test_remove_duplicate_DLINK():
    new_range = range(1, 6)
    a = DLinkedList()
    for num in new_range:
        if num < 4:
            a.insert_last(1)
        if num >= 4:
            a.insert_last(num)
    b = remove_duplicate_from_double_linked(a)
    b_size = len(b) + 2
    to_check = b.head
    answers = ["TAIL", 5, 4, 1, "HEAD"]
    while b_size:
        assert to_check.value == answers[b_size - 1]
        to_check = to_check.next
        b_size -= 1
