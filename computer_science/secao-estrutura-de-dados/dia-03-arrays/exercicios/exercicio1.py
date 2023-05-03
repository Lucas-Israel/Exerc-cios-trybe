# Em um software monitor, o qual verifica a resiliência de outro software,
# precisamos saber o tempo máximo que um software permaneceu sem
# instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem. Supondo um array que contenha os estados
# coletados por nosso software, calcule quanto tempo máximo que o servidor
# permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

def stability_check(arr):
    count = 0
    count_to_send = 0
    for element in arr:
        if element == 1:
            count += 1
        if count > count_to_send:
            count_to_send = count
        if element == 0:
            count = 0
    return count_to_send

# O(n)


def test_stability_check():
    valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
    assert stability_check(valores_coletados) == 3
    valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
    assert stability_check(valores_coletados) == 4
    valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1]
    assert stability_check(valores_coletados) == 5
