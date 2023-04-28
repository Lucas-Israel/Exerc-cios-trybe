# Exercício 4:
# Faça um script que, a cada intervalo de segundo, mostre no console a memória
# utilizada do sistema operacional vs a memória total (ambos em megabytes - MB)
# Lembre-se que você pode se basear no script do exercício anterior.

from subprocess import check_output
from time import sleep


def memory_space_check():
    memory_information = [
        information
        for information in check_output("free")
        .decode("UTF-8")
        .split("\n")[1]
        .split(" ")
        if information != ""
    ]
    total_memory = int(memory_information[1]) / 1000
    used_memory = int(memory_information[2]) / 1000
    print(
        f"Memória total: {total_memory:.0f}MB\n"
        f"Memória utilizada: {used_memory:.0f}MB"
    )


def check_per_second(second):
    for _ in range(0, second):
        memory_space_check()
        sleep(1)


if __name__ == '__main__':
    check_per_second(2)
