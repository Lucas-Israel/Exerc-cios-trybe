# Exercícios de fixação

# Em seu terminal Python, crie uma lista (do conhecido tipo list) com alguns
# elementos.

# Agora, chame a função nativa iter(), passando essa lista como
# parâmetro, e veja que é retornado um objeto iterador do tipo list_iterator.

# Guarde este objeto iterador em uma variável e veja o que acontece quando
# chamar a função nativa next() passando esse objeto como parâmetro.

list = [1, 2, 3, 4, 5]

a = iter(list)

print(next(a))
print(next(a))
print(next(a))
print(next(a))
print(next(a))
