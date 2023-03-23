# Exercício 1: Escreva um programa que retorne uma lista com os
# valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do
# número.

# Exemplo: 3 -> [1, 2, "Fizz"].


def fiz_buzz(number):
    new_list = []
    counter = 1
    while counter <= number:
        if counter % 15 == 0:
            new_list.append('FizzBuzz')
        elif counter % 3 == 0:
            new_list.append('Fizz')
        elif counter % 5 == 0:
            new_list.append('Buzz')
        else:
            new_list.append(counter)
        counter += 1
    return new_list


if __name__ == '__main__':
    to_print = fiz_buzz(15)
    print(to_print)
