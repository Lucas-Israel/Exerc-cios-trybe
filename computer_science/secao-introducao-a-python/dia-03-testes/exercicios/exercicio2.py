# Exercício 2: Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira, a expressão MY LOVE
# significa 69 5683. Claro que existem alguns problemas, uma vez que alguns
# números de telefone não formam uma palavra ou uma frase, e os dígitos 1 e 0
# não estão associados a nenhuma letra.

# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por letras
# maiúsculas (A-Z), hifens (-) e os números 1 e 0.

# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9


# Exemplo de entrada:
# 1-HOME-SWEET-HOME
# MY-MISERABLE-JOB


# Saídas correspondentes:
# 1-4663-79338-4663
# 69-647372253-562


# Curiosidade: A frase “The quick brown fox jumps over the lazy dog” é um
# pantograma (frase com sentido em que são usadas todas as letras do alfabeto
# de determinada língua) da língua inglesa.

# Verifique casos como entrada maior que 30 caracteres, vazia e com caracteres
# inválidos.

coded_letters_with_number = [
    ('ABC', '2'), ('DEF', '3'), ('GHI', '4'), ('JKL', '5'), ('MNO', '6'),
    ('PQRS', '7'), ('TUV', '8'), ('WXYZ', '9'), ('1', '1'), ('-', '-')
]


def text_to_phone_number(text=False):
    'Receives a text and decodes it into a phone number'
    # uncoded_number = ''
    # if not text:
    #     raise ValueError('Text cannot be empty')
    # if not 1 < len(text) <= 30:
    #     raise ValueError("Expression with invalid length")
    # for char in text:
    #     for tupla in coded_letters_with_number:
    #         if char.upper() in tupla[0]:
    #             uncoded_number += tupla[1]
    # return uncoded_number
    # nao consegui encaixar um caso onde verifique e nao exista uma letra
    if not text:
        raise ValueError('Text cannot be empty')
    if not 1 < len(text) <= 30:
        raise ValueError("Expression with invalid length")
    number = ""
    for char in text:
        if char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQRS":
            number += "7"
        elif char in "TUV":
            number += "8"
        elif char in "WXYZ":
            number += "9"
        elif char in "-01":
            number += char
        else:
            raise ValueError("Invalid character")
    return number


if __name__ == '__main__':
    text_to_phone_number('1-HOME-SWEET-HOME')
