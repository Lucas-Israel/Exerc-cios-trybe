# Construa um novo DataFrame a partir do seguinte conjunto de dados:

import pandas as pd

dados = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62],
}

# Dados IPEA(2015)


# Agora, responda aos seguintes questionamentos:

#   1. Quantas linhas e colunas possui o nosso conjunto de dados?
#   2. Há valores nulos no DataFrame?
#   3. Qual o número médio de pessoas em situação de rua por região do Brasil
# em nosso DataFrame?
#   4. Qual região tem proporcionalmente a maior quantidade de pessoas nessa
# situação? E qual tem menos?

if __name__ == "__main__":
    new_dframe = pd.DataFrame(dados)
    print(f"1. linhas: {new_dframe.shape[0]} e colunas: {new_dframe.shape[1]}")
    print()
    print("----------------------------------------------------------------\n")
    print(new_dframe.info())
    print("2. de acordo com a tabela acima não existe valor nulo nesse datafr")
    print()
    print("----------------------------------------------------------------\n")
    media_rua = new_dframe["Total em situação de rua (%)"].mean()
    print(f"3. Numero médio de pessoas em situação de rua: {media_rua}")
    print()
    print("----------------------------------------------------------------\n")
    rua = new_dframe["Total em situação de rua (%)"]
    print(f"4. minimo: {rua.min()}, maximo {rua.max()}")
    print(f'{new_dframe["Grande Região"]}')
    print(new_dframe["Total em situação de rua (%)"])
