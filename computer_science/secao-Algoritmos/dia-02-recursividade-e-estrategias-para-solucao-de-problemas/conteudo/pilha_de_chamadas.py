def somatorio(n):
    if n <= 0:  # caso base
        return 0
    print(n)
    return n + somatorio(n - 1)


a = somatorio(4)
print(a)
