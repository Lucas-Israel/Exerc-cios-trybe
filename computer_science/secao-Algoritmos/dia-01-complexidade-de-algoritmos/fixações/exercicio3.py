# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro
# do outro.
# Entenda como ele terá uma complexidade de O(n³)!


def nunca_faca_um_loop_triplo(arr1, arr2, arr3):
    result = []
    number_of_iterations = 0

    for number1 in arr1:
        for number2 in arr2:
            for number3 in arr3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1
    print(number_of_iterations)


n = 51
meu_array = list(range(1, n))

# nunca_faca_um_loop_triplo(meu_array, meu_array, meu_array)
