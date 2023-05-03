# Em um software gerenciador de servidores, precisamos verificar o número de
# servidores que se comunicam. Os servidores estão representados como um array
# bidimensional onde o valor 1 representa um computador e 0 a ausência do
# mesmo.
# Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna.

def servidores_comunicativos(grid):
    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer


# O algoritmo recebe um array de arrays com tamanho n, que podem ter
# quantidades diferentes de linhas e colunas. Portanto possui
# Complexidade de Tempo O(n.m).


def test_servidores_comunicativos():
    servidores_list = [
        [[1, 0], [0, 1]],
        [[1, 0], [1, 1]],
        [[1, 0, 0],
         [1, 0, 0],
         [0, 0, 1]]
    ]
    resultado_list = [0, 3, 2]

    for index, servidores in enumerate(servidores_list):
        assert servidores_comunicativos(servidores) == resultado_list[index]
