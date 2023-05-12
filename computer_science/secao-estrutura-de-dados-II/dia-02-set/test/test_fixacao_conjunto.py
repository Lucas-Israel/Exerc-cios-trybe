from conteudo.exercicio_fixacao.conjunto import Conjunto


def test_conjunto():
    a = Conjunto()
    to_add = [0, 10, 100, 1000]
    for num in to_add:
        a.add(num)
        assert a.set[num] is True


def test_conjunto_print():
    a = Conjunto()
    a.add(1)
    assert a.__str__() == "{1}"


def test_conjunto_contains():
    a = Conjunto()
    nums = [1, 2, 3, 4, 5]
    for num in nums:
        a.add(num)
        assert a.__contains__(num) is True
    assert a.__contains__(20) is False


def test_conjunto_union():
    a = Conjunto()
    b = Conjunto()
    for num in range(1, 11):
        a.add(num)
    for num in range(10, 21):
        b.add(num)
    c = {num for num in range(1, 21)}
    assert a.union(b).__str__() == f"{c}"


def test_conjunto_intersection():
    a = Conjunto()
    b = Conjunto()
    for num in range(1, 11):
        a.add(num)
    for num in range(9, 21):
        b.add(num)
    assert a.intersection(b).__str__() == "{9, 10}"


def test_conjunto_diff():
    a = Conjunto()
    b = Conjunto()
    for num in range(1, 6):
        a.add(num)
    for num in range(2, 7):
        b.add(num)
    assert a.difference(b).__str__() == "{1}"
    assert b.difference(a).__str__() == "{6}"


def test_conjunto_subset():
    a = Conjunto()
    b = Conjunto()
    for num in range(3, 8):
        a.add(num)
    for num in range(1, 11):
        b.add(num)
    assert a.issubset(b) is True


def test_conjunto_superset():
    a = Conjunto()
    b = Conjunto()
    for num in range(3, 8):
        a.add(num)
    for num in range(1, 11):
        b.add(num)
    assert b.issuperset(a) is True
