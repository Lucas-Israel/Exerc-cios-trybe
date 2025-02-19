# import csv

# with open("data/graduacao_unb.csv", encoding="utf-8") as file:
#     graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
#     # Usando o conceito de desempacotamento
#     header, *data = graduacao_reader

# print(header)
# print(data[0])

# import csv

# with open("data/graduacao_unb.csv", encoding="utf8") as file:
#     graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
#     # Usando o conceito de desempacotamento
#     header, *data = graduacao_reader

# group_by_department = {}
# for row in data:
#     department = row[15]
#     if department not in group_by_department:
#         group_by_department[department] = 0
#     group_by_department[department] += 1

# # Escreve o relatório em .csv
# # Abre um arquivo para escrita
# with open("data/department_report.csv", "w", encoding="utf-8") as file:
#     writer = csv.writer(file)

#     # Escreve o cabeçalho
#     headers = [
#         "Departamento",
#         "Total de Cursos",
#     ]
#     writer.writerow(headers)

#     # Escreve as linhas de dados
#     # Desempacotamento de valores
#     for department, grades in group_by_department.items():
#         # Agrupa o dado com o turno
#         row = [
#             department,
#             grades,
#         ]
#         writer.writerow(row)

import csv

# lê os dados
with open("data/graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.DictReader(file, delimiter=",", quotechar='"')

    # a linha de cabeçalhos é utilizada como chave do dicionário
    # agrupa cursos por departamento
    group_by_department = {}
    for row in graduacao_reader:
        department = row["unidade_responsavel"]
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1

# abre um arquivo para escrita
with open("data/new_department_report.csv", "w", encoding="utf-8") as file:
    # os valores a serem escritos devem ser dicionários
    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    # É necessário passar o arquivo e o cabeçalho
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()
    # escreve as linhas de dados
    for department, grades in group_by_department.items():
        # Agrupa o dado com o turno
        row = {"Departamento": department, "Total de Cursos": grades}
        writer.writerow(row)
