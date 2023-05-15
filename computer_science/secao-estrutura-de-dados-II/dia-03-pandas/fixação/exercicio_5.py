# Crie um novo dataframe a partir de algum dos arquivos .csv apresentados ao
# longo do conteúdo do dia de hoje.

# Além disso, crie também um novo schema no SGBD de sua preferência e atribua
# a ele um nome sugestivo como, por exemplo, chuvas como referência ao
# dataframe que trata das chuvas na região do Morumbi.

# Por fim, crie uma tabela usando o pandas e preencha essa tabela com o
# conteúdo do seu dataframe. Atente-se para a política de criação utilizada
# (replace, fail, etc.).

import os
import pandas as pd
from sqlalchemy import create_engine
from urllib.parse import quote
from dotenv import load_dotenv

load_dotenv()

MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")

database_url = "mysql+pymysql://root:%s@localhost:3306/pao_na_chapa"

engine = create_engine(database_url % quote(MYSQL_PASSWORD))


def f_print(to_print):
    print()
    print("---------------------------------------\n")
    print(to_print)


if __name__ == "__main__":
    df = pd.read_csv("data/pesquisa_pao_na_chapa.csv")

    f_print(df)

    df.to_sql(name="pesquisa", con=engine, if_exists="replace")
