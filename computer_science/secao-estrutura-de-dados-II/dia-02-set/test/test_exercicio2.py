from exercicios.exercicio2 import no_repeat_finder


def test_no_repeat_finder():
    strings = ["aaa", "abb", "abcc", "abccdfghijk"]
    answers = [1, 2, 3, 8]

    count = 0
    for string in strings:
        assert no_repeat_finder(string) == answers[count]
        count += 1
