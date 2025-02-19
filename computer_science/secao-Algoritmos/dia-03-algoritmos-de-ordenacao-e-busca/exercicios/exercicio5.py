# Exercício 5 Converta o algoritmo recursivo de busca binária em iterativo.

def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end:  # os índices podem ser no máximo iguais, o
        # início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio

        if numbers[mid] == target:  # se o elemento do meio for o
            # alvo, devolve a posição do meio
            return mid

        if target < numbers[mid]:  # se o elemento for menor,
            # atualiza o índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1

# o binary search que foi apresentado no dia não estava em recursivo.
