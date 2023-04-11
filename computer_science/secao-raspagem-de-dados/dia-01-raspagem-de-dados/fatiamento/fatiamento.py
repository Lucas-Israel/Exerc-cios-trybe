# Recupera o primeiro elemento
a = [1, 2, 3][0]  # Saída: 1

print(a)

# Quando não incluso o valor inicial, iniciaremos do índice 0
# e do índice 2 em diante, os elementos não são incluídos
b = (1, 2, 3, 4)[:2]  # Saída: (1, 2)
print(b)
# Quando omitimos o valor final
# o fatiamento ocorre até o fim da sequência
c = (1, 2, 3, 4)[1:]  # Saída: (2, 3, 4)
print(c)
# Vá do índice 3 até o 7.
# O item no índice 7 não é incluído
d = "palavra"[3:7]  # Saída: "avra"
print(d)
# Começando do elemento de índice 1, vá até o último,
# saltando de 2 em 2
e = [1, 2, 3, 4][1::2]  # Saída: [2, 4]
print(e)


# À partir da versão 3.9 do Python, teremos uma função chamada removesuffix,
# que é equivalente à palavra[:-len(suffix)].
