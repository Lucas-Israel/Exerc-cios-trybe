# Exercício 1:
# Faça um programa que solicite o nome de uma pessoa
# usuária e imprima-o na vertical.

# Exemplo:

# F
# U
# L
# A
# N
# O

# from_user = input('Digite seu nome: ')

# for char in from_user:
#     print(char)


# Exercício 2:
# Escreva um programa que receba vários números naturais e calcule a soma
# desses valores. Caso algum valor da entrada seja inválido
# (por exemplo uma letra),
# uma mensagem deve ser exibida na saída de erros no seguinte formato:
# “Erro ao somar valores, {valor} é um valor inválido”. Ao final,
# você deve imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que
# separe-os com um espaço. Receba os valores no formato str e utilize o método
# split para pegar cada valor separado. O método isdigit, embutido no tipo str,
# pode ser utilizado para verificar se a string corresponde a um número
# natural.


# from_user = input('Digite numeros separados por espaço: ')

# listing = from_user.split(' ')

# minha_soma = 0

# for number in listing:
#     if not number.isdigit():
#         print(f"Erro ao somar valores, {number} não é um dígito.")
#     else:
#         minha_soma += int(number)

# print(minha_soma)
