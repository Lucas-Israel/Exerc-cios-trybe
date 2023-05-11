from exercicios.exercicio1 import Hierarchy


def test_score_calculator():
    bosses = [None, 1, 1, 2, 4, 4, 5]

    people = [1, 2, 3, 4, 5, 6, 7]

    answers = [3, 2, 1, 3, 2, 1, 1]

    hie = Hierarchy(2)

    for index, boss in enumerate(bosses):
        hie.add_person(boss, people[index])

    for index, answer in enumerate(answers):
        assert hie.get_score(people[index]) == answer
