from exercicios.exercicio2 import LinkedList


def test_LinkedList():
    a = LinkedList()
    for num in range(1, 5):
        a.insert_at(num, len(a))
    num_list = [1, 2, 3, 4]
    for index, num in enumerate(num_list):
        assert a.index_of(num) == index + 1
