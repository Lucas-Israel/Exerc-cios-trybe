"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def pop(self):
        self.data.pop()


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# # para acessar um elemento do array, utilizamos seu índice
# print(array.get(0))  # saída: Felipe
# print(array.get(2))  # saída: Shirley
# print("-----")

array.set(0, "Marcos")
# array.set(1, "Patrícia")
# # quando começamos as inserções o valor muda
# array_memory_size = sys.getsizeof(array.data)

# array.set(2, "Matheus")
# array.set(3, "Giovana")
# # como um espaço adicional é reservado o valor não é modificado
# array_memory_size = sys.getsizeof(array.data)

# array.set(4, "Alberto")
# array.set(5, "Marta")
# array.set(6, "Túlio")
# array.set(7, "Michelle")
# array_memory_size = sys.getsizeof(array.data)

# # podemos iterar sobre seus elementos da seguinte maneira
# index = 0
# # enquanto há elementos no array
# while index < len(array):
#     # recupera o elemento através de um índice
#     print("Index:", index, ", Nome:", array.get(index))
#     index += 1

array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)
print(array.__len__())
for _ in range(array.__len__()):
    array.pop()
print(array)
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)
