# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares existem em
# uma sequência numérica (1 a n).

def even_counter(number):
    counter = 0
    for number in range(number + 1):
        if number % 2 == 0:
            counter += 1
    return counter

# 🚀 Exercício 2:
# Transforme o algoritmo criado acima em recursivo.


def recursive_even_counter(number):
    if number == 1:
        return 0
    elif number % 2 == 0:
        return 1 + recursive_even_counter(number - 1)
    else:
        return recursive_even_counter(number - 1)


if __name__ == '__main__':
    # a = even_counter(5)
    # print(a)
    a = recursive_even_counter(5)
    print(a)
