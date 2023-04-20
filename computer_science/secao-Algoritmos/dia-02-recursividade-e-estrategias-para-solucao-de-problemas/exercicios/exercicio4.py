# 🚀 Exercício 4:
# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc)
# de dois inteiros.


def recursive_mdc_finder(number1, number2):
    print(f'number1 {number1}')
    print(f'number2 {number2}')
    if number2 == 0:
        return number1
    return recursive_mdc_finder(number2, number1 % number2)


if __name__ == '__main__':
    a = recursive_mdc_finder(4, 12)
    print(a)
