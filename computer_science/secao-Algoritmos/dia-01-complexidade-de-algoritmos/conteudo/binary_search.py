# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end:  # os índices podem ser no máximo iguais, o início não
        # pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio

        if numbers[mid] == target:  # se o elemento do meio for o alvo,
            # devolve a posição do meio
            return mid

        if target < numbers[mid]:  # se o elemento for menor, atualiza o
            # índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


if __name__ == '__main__':
    numbers = [2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 40]
    target = 13

    result = binary_search(numbers, target)
    print(f"Elemento encontrado na posição: {result}")
