import pandas as pd


data = {
    "comida": ["abacate", "requeijão", "margarina", "doce de leite", "abacax"],
    "tipo": ["doce", "salgado", "salgado", "doce", "doce"],
}


df = pd.DataFrame(data)

# Aqui fazemos a filtragem pelo tipo "doce" passando a condição
# df["tipo"] == "doce" como índice do loc.
comidas_doces = df.loc[df["tipo"] == "doce"]

# print(comidas_doces)


def calcula_situacao(media):
    return "Aprovado" if media >= 7 else "Reprovado"


notas = pd.DataFrame(
    {
        "nome": ["maria", "joão", "pedro", "ana"],
        "primeira_nota": [9, 8, 7, 8],
        "segunda_nota": [8, 7, 9, 3],
    }
)

# Cria uma nova coluna chamada media
notas["media"] = (notas["primeira_nota"] + notas["segunda_nota"]) / 2

# Cria uma nova coluna chamada situacao no DataFrame com Aprovado ou Reprovado
# com base na média
notas["situacao"] = notas["media"].apply(calcula_situacao)

# print(notas)

a = notas.groupby(by="situacao")

for b in a:
    print(b)
