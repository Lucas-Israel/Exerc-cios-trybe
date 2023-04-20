# 🚀 Exercício 3:
# Crie um algoritmo recursivo que encontre, em uma lista, o maior número
# inteiro.


def recursive_greatest_int_finder(number_list):
    if len(number_list) == 1:
        return number_list
    elif number_list[0] < number_list[-1]:
        return recursive_greatest_int_finder(number_list[1::])
    else:
        return recursive_greatest_int_finder(number_list[:-1:])


if __name__ == '__main__':
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 6]
    a = recursive_greatest_int_finder(list)
    print(a)
