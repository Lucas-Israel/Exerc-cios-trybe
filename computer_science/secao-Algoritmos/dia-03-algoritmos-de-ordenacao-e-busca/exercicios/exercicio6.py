# Exercício 6 Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no
# tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham.
# Supondo que isto será representado como um array de booleanos, descubra o índice onde o erro
# ocorreu pela primeira vez.

# Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.


# entrada: [True, True, True, True, False, False, False]  # saída: 4


# entrada: [True, True, False, False, False, False, False]  # saída: 2

def error_check(list):
    n = len(list)
    for index in range(0, n):
        if list[index] is False:
            return index

    return -1
