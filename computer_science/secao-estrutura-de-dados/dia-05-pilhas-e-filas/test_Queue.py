from conteudo.queue import Queue


def test_Queue():
    a = Queue()
    for num in range(1, 11):
        a.enqueue(num)
    assert a.__str__() == "Queue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)"
    a.dequeue()
    assert a.__str__() == "Queue(2, 3, 4, 5, 6, 7, 8, 9, 10)"
