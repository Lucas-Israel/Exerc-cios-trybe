# Que tal adicionarmos um método update que atualiza o valor a partir de um
# índice?

class Listing:

    def __init__(self, value) -> None:
        self.value = value

    def update(self, index, value):
        self.value[index] = value


if __name__ == '__main__':
    values = [1, 2, 3, 4, 5, 6]
    b = Listing(values)
    b.update(3, 999)
    print(b.value)
