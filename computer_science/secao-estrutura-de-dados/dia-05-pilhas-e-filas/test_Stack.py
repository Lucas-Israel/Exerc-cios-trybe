from conteudo.stack import Stack


def test_stack():
    a = Stack()
    assert a.size() == 0
    assert a.is_empty() is True
    for num in range(2, 12):
        a.push(num)
    assert a.size() == 10
    assert a.is_empty() is False
    a.pop()
    assert a.size() == 9
    assert a.peek() == 10
    assert a.__str__() == "Stack(2, 3, 4, 5, 6, 7, 8, 9, 10)"
    a.clear()
    assert a.size() == 0
