def fibonacci(num):  # nome da função e parâmetro
    print(f'nova chamada com numero {num}')
    if (num <= 1):  # condição de parada
        print('parei \n')
        return num
    else:
        # chamada de si mesma com um novo valor
        return fibonacci(num - 2) + fibonacci(num - 1)


a = fibonacci(5)
print(a)
