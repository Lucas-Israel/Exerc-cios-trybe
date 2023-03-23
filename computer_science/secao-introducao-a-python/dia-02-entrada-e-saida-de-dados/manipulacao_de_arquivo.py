# ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já
# exista, sobrescrevendo o antigo.
# file = open("arquivo.txt", mode="w")

# file.write("nome idade\n")
# file.write("Maria 45\n")
# file.write("Miguel 33\n")


# print("Túlio 22", file=file)


# LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
# file.writelines(LINES)

# file.close()


# file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)
# file.close()


# file = open("arquivo.txt", mode="w")
# LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
# file.writelines(LINES)
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(line)
#     # não esqueça que a quebra de linha também é um caractere da linha
# file.close()

# file = open("arquivo.dat", mode="wb")
# # o prefixo b em uma string indica que seu valor está codificado em bytes
# file.write(b"C\xc3\xa1ssio 30")
# file.close()

# # leitura
# file = open("arquivo.dat", mode="rb")
# content = file.read()
# print(content)  # saída: b'C\xc3\xa1ssio 30'
# file.close()
