from conteudo.exercicio7 import odd_to_triple
from conteudo.exercicio5 import new_dict


def test_odd_to_triple():
    answer = {
        3: 9,
        4: 8,
        5: 15,
        6: 12,
        7: 21,
        8: 16,
        9: 27,
        10: 20,
        11: 33,
        12: 24,
        13: 39,
        14: 28,
        15: 45,
        16: 32,
        17: 51,
        18: 36,
        19: 57,
        20: 40,
    }

    odd_to_triple(new_dict)

    assert new_dict == answer
