# A lanchonete Pão na Chapa está pensando em expandir o seu negócio.
# Mas, para garantir a saúde financeira do empreendimento, ela resolveu
# consultar vários fornecedores, e assim, estabelecer a melhor relação
# entre custo x benefício para os principais ingredientes usados na
# sua cozinha.

# A pesquisa se deu ao longo de 7 dias, com objetivo de identificar
# qual dos fornecedores possuía a melhor relação de custo x benefício
# para os principais ingredientes usados.

# Usando o seguinte conjunto de dados, responda as perguntas abaixo:

# Qual o dia da semana em que o queijo muçarela está com o menor preço?

# Qual o nome do fornecedor onde o tomate esteve com o maior preço histórico?

# Em qual/quais dia/dias da semana o fornecedor soma pão aparentemente não
# abriu as portas?

# De olho na dica 🖊: Confira os dias em que há valores nulos para o preço do
# pão francês.

# Crie um novo DataFrame com o preço médio de cada produto pesquisado.

import pandas as pd


def f_print(to_print):
    print()
    print("---------------------------------------\n")
    print(to_print)


if __name__ == "__main__":
    df = pd.read_csv("./data/pesquisa_pao_na_chapa.csv")
    f_print(df)

    queijo_muca = df.loc[df["produto"] == "queijo muçarela"]
    muca_min = queijo_muca["preco_reais"].min()
    full_string = queijo_muca.loc[queijo_muca["preco_reais"] == muca_min]
    dia_muca_barata = df.iloc[full_string.index[0]].dia_da_semana
    f_print(f"A muçarela esta mais barata na: {dia_muca_barata}")

    tomate = df.loc[df["produto"] == "tomate"]
    tomate_max = tomate["preco_reais"].max()
    got_tomato = tomate.loc[tomate["preco_reais"] == tomate_max]
    fornecedor_tomate_max = df.iloc[got_tomato.index[0]].nome_do_fornecedor
    f_print(f"O tomate mais caro foi do fornecedor: {fornecedor_tomate_max}")

    soma_pao = df.loc[df["nome_do_fornecedor"] == "soma pão"]
    sem_preco = soma_pao.loc[soma_pao["preco_reais"].isna()]
    # f_print(sem_preco)
    for num in range(2):
        sem_pao = df.iloc[sem_preco.index[num]].dia_da_semana
        f_print(f"O fornecedor soma pão não abriu as portas na: {sem_pao} ")

    new_frame = df[["produto", "preco_reais"]].groupby("produto").mean()
    f_print(new_frame)
