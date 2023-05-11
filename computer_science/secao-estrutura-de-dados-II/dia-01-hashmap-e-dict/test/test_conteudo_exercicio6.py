from conteudo.exercicio6 import string_counter


def test_string_counter():
    strings = ["abcdef", "coxinha", "aaa"]
    answers = [
        {"a": 1, "b": 1, "c": 1, "d": 1, "e": 1, "f": 1},
        {"c": 1, "o": 1, "x": 1, "i": 1, "n": 1, "h": 1, "a": 1},
        {"a": 3},
    ]

    for index, string in enumerate(strings):
        assert string_counter(string) == answers[index]
