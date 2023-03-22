# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def get_higher(number1, number2):
    """Compares both numbers and return the greater"""
    return number1 if number1 > number2 else number2


# to_print = get_higher(1, 2)

# print(to_print)
# print(get_higher.__doc__)

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def get_average(list):
    """Receives a list of numbers as a parameter and returns its average"""
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


# numbers = [1, 2, 3, 4, 5, 6, 7]

# to_print = get_average(numbers)

# print(to_print)
# print(get_average.__doc__)

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_square(number):
    """If the received number is greater than 1 print a square of *"""
    if number > 1:
        count = 0
        while count < number:
            print(number * '*')
            count += 1
    else:
        print('Number must be greater than 1')


# print_square(5)
# print(print_square.__doc__)


#  Exercício 4: Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


def get_max_chars(list):
    """Receives a list with strings and returns the longest"""
    list_with_str_len = [len(string) for string in list]
    return max(list_with_str_len)


# list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

# to_print = get_max_chars(list)

# print(to_print)
# print(get_max_chars.__doc__)


# Exercício 5: Considere que a cobertura da tinta é de
# 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede (em m²).


def get_volume_and_price_per_area(area):
    """Calculates the necessary paint and cost based on area, (cans, price)"""
    import math
    litre_per_can = 18
    price_per_can = 80
    total_cans = math.ceil(area / litre_per_can)
    total_price = total_cans * price_per_can
    return total_cans, total_price


# to_print = get_volume_and_price_per_area(27)

# print(get_volume_and_price_per_area.__doc__)
# print(to_print)


# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


def get_triangle(side1, side2, side3):
    '''Returns a triangle type in PT-BR based on its sides measures'''
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        return 'Não é um triangulo'
    if side1 == side2 == side3:
        return 'Triângulo Equilátero'
    if side1 == side2 or side1 == side3 or side2 == side3:
        return 'Triângulo Isósceles'
    return 'Triângulo Escaleno'


# print(get_triangle.__doc__)
# to_print = get_triangle(4, 3, 4)
# print(to_print)


# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def get_lesser_number(list):
    '''Returns the lesser number in a list'''
    return min(list)


# list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

# print(get_lesser_number.__doc__)
# print(get_lesser_number(list))


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def print_triangle(base):
    '''Prints a triangle with a base of * received as a parameter'''
    line = 0
    while line <= base:
        print(line * '*')
        line += 1


# print(print_triangle.__doc__)
# print_triangle(5)


# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N. Por exemplo, para N = 5,
# o valor esperado será 15.


def summation(number):
    '''Returns the summation of the parameter'''
    result = 0
    int = 1
    while int <= number:
        result += int
        int += 1
    return result


# print(summation.__doc__)
# print(summation(5))


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela:

# Álcool:
#   - Até 20 litros, desconto de 3% por litro;
#   - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#   - Até 20 litros, desconto de 4% por litro;
#   - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma:
# A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente,
# sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço
# do litro do álcool é R$ 1,90.


def fuel_price(litre, fuel_type):
    '''Receives total litre of fuel and its type A or G, returns price'''
    # alcohol_price = 1.90
    # gasoline_price = 2.50
    # discount1 = 0.97
    # discount2 = 0.95
    # discount_threshold = 20
    # total_price = 0
    # if fuel_type == 'A':
    #     if litre > discount_threshold:
    #         total_price = (alcohol_price * discount1) * litre
    #     else:
    #         total_price = (alcohol_price * discount2) * litre
    # else:
    #     if litre > discount_threshold:
    #         total_price = (gasoline_price * discount1) * litre
    #     else:
    #         total_price = (gasoline_price * discount2) * litre
    # return total_price
    discount_threshold = 20
    if fuel_type == "A":
        price = 1.90
        discount = 0.03
        if litre > discount_threshold:
            discount = 0.05
    elif fuel_type == "G":
        price = 2.50
        discount = 0.04
        if litre > discount_threshold:
            discount = 0.06
    total = price * litre
    total -= total * discount
    return total


print(fuel_price.__doc__)
print(fuel_price(20, 'A'))
print(fuel_price(21, 'G'))
