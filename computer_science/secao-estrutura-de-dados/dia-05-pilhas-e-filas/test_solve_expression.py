from conteudo.expression_solver import solve_expression


def test_solve_expression():
    expression = "5 10 + 3 *"
    assert solve_expression(expression) == 45
    expression = "3 4 +"
    assert solve_expression(expression) == 7
    expression = "1 2 3 4 + 2 2 2 *"
    assert solve_expression(expression) == 80
