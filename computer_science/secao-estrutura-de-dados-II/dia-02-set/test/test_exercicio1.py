from exercicios.exercicio1 import blefe


def test_blefe():
    entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}
    assert blefe(entrada) == "Marco"
    entrada = {"AAA": [0, 2, 4, 6, 10], "BBB": [1, 3, 5, 7, 9]}
    assert blefe(entrada) == "EMPATE"
    entrada = {"XABLAU": [1, 2, 3, 4, 5], "ZZZZZ": [3, 4, 5, 6, 7]}
    assert blefe(entrada) == "EMPATE"
    entrada = {"XABLAU": [1, 2, 3, 4, 5], "ZZZZZ": [2, 3, 4, 5, 6]}
    assert blefe(entrada) == "ZZZZZ"
