# Exercício 3:
# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um
# programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

reproved_students = []

with open("helper_excessao.txt", mode="r") as file:
    for line in file:
        student = line.split()
        student_note = int(student[1])
        if student_note < 6:
            reproved_students.append(student[0] + '\n')

with open("reprovados.txt", mode="w") as reprovados:
    reprovados.writelines(reproved_students)
